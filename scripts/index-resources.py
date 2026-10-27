#!/usr/bin/env python3
"""Inventorie les originaux sans les modifier ; dédoublonne par contenu SHA-256.

Le manifeste privé conserve tous les chemins et les décisions. Le catalogue du
site ne contient que les fichiers exploitables et des identifiants opaques.
Les ZIP sont inventoriés ; leurs médias/documents sont extraits dans un cache,
avec des noms dérivés de leur contenu (aucun chemin d'archive n'est exécuté).
"""
from pathlib import Path
from collections import Counter, defaultdict
import hashlib, json, mimetypes, subprocess, re, zipfile, unicodedata
from PIL import Image, ImageOps

ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / 'ressources-locales'
CACHE = ROOT / '.cache/ressources'
PREVIEWS = ROOT / 'public/ressources-apercus'
HASH_CACHE = CACHE/'hash-cache.json'
hash_cache = json.loads(HASH_CACHE.read_text()) if HASH_CACHE.exists() else {}
for folder in [CACHE, PREVIEWS, ROOT/'src/content/generated']: folder.mkdir(parents=True, exist_ok=True)
Image.MAX_IMAGE_PIXELS = 200_000_000
IMAGES = {'.jpg','.jpeg','.png','.webp','.gif','.bmp','.tif','.tiff','.heic'}
VIDEOS = {'.mp4','.mov','.webm','.mkv','.avi','.m4v'}
AUDIO = {'.mp3','.wav','.flac','.ogg','.m4a'}
DOCS = {'.pdf','.docx','.doc','.odt','.pptx','.ppt','.xlsx','.xls','.ods','.odp'}
CODE = {'.c','.h','.cpp','.hpp','.ino','.py','.js','.ts','.tsx','.css','.html','.vhd','.vhdl','.sv','.verilog','.tex','.md','.txt','.csv','.json','.yaml','.yml','.ioc','.kicad_pcb','.kicad_sch','.sch','.brd','.stl','.step','.stp','.sldprt','.ipt','.s','.ld','.cfg','.ini','.xml','.launch','.urdf','.xacro','.dot','.pkt','.pka'}
# Formats de conception et de fabrication présents dans les projets KiCad/CAO.
CODE |= {'.kicad_sch-bak','.kicad_mod','.kicad_pro','.kicad_prl','.kicad_sym','.kicad_wks','.svg','.wrl','.drl','.lib','.net','.gbl','.gbs','.gbp','.gbo','.gm1','.gtl','.gts','.gtp','.gto','.gbr','.g2','.g3','.dsn','.dcm','.fz','.pro','.ipc','.sldasm','.igs','.ai','.bat','.cmd','.ps1','.rules','.service','.win','.ipynb'}
GENERATED = {'.o','.d','.pyc','.elf','.map','.a','.so','.su','.cyclo','.bin','.hex','.uf2','.class','.appimage','.tmp','.lck','.bck','.log','.obj','.exe','.dll','.pack','.idx','.make','.cmake','.marks','.internal','.includecache','.mk','.bak','.list','.prefs','.project','.cproject'}
SKIP_PARTS = {'.git','.pio','node_modules','__pycache__','cmakefiles','_deps','drivers','middlewares','cmsis','cmsis_5','debug','release','build','builds','.venv','venv','site-packages','dist-packages','pico-sdk','freertos','.github','.vscode','html_docs','doxygen'}
PRIVATE_NAMES = ['info_logement','stage evaluation','lettre_de_motivation','mail_log','curriculum-vitae','livret daccueil','informations cours redon','calendrier di','2022-23-présentation','rentree2024','presentation rentrée','charte_graphique_epf','plaquette esti','sans nom 1']

def norm(s): return ''.join(c for c in unicodedata.normalize('NFD',s.lower()) if not unicodedata.combining(c))
def digest(p):
    stat=p.stat(); key=str(p); old=hash_cache.get(key)
    if old and old['size']==stat.st_size and old['mtime']==stat.st_mtime_ns:return old['sha']
    h=hashlib.sha256()
    with p.open('rb') as stream:
        for chunk in iter(lambda:stream.read(4*1024*1024),b''):h.update(chunk)
    sha=h.hexdigest();hash_cache[key]={'size':stat.st_size,'mtime':stat.st_mtime_ns,'sha':sha};return sha
def classify(rel):
    parts=[p.lower() for p in Path(rel).parts]; ext=Path(rel).suffix.lower(); name=norm(Path(rel).name)
    if any(p in SKIP_PARTS for p in parts) or '/stage/tools/' in '/'+rel.lower():return 'dependance-ou-generation'
    if any(norm(x) in name for x in PRIVATE_NAMES) or Path(rel).name.startswith('.env'):return 'document-personnel-ou-administratif'
    if Path(rel).name=='fp-info-cache':return 'generation-ou-configuration'
    if ext in GENERATED or any(p.startswith('.') for p in parts):return 'generation-ou-configuration'
    if ext in IMAGES:return 'image'
    if ext in VIDEOS:return 'video'
    if ext in AUDIO:return 'audio'
    if ext in DOCS:return 'document'
    if ext=='.zip':return 'archive'
    if ext in CODE or Path(rel).name.lower() in ['makefile','cmakelists.txt','readme','license','fp-lib-table','sym-lib-table']:return 'source'
    return 'autre-fichier'

def theme(rel):
    s=norm(rel)
    if 'projet robot foot' in s or 'coupe de france de robotique junior' in s:return 'Robotique au lycée'
    if 'projet covid' in s:return 'Projet STI2D'
    if 'projet perso' in s:return 'Projets personnels'
    if 'debut ecole' in s:return 'École d’ingénieurs · microcontrôleurs'
    if 'stage labaa' in s or 'labaa' in s:return 'LABAA · électronique et outils'
    if 'subatech' in s:return 'SUBATECH · XEMIS2'
    if any(x in s for x in ['voiture autonome','sae5','sae6','f1tenth']):return 'Voiture autonome · F1Tenth'
    if 'robot_leo' in s or 'super_cendensateur' in s:return 'Robot à balises et supercondensateurs'
    if 'passage a niveau' in s:return 'Détection de passage à niveau'
    if 'panneau solaire' in s:return 'Conversion d’énergie · solaire'
    if 'hanoi' in s:return 'Tour de Hanoï'
    if 'modelisation' in s:return 'Modélisation 3D'
    if 'cachan' in s:return 'Association · robotique à Cachan'
    if '/ros/' in s or 'ros' in Path(s).name:return 'BUT · ROS et robotique'
    if '/reseau/' in s or 'multicor' in s:return 'BUT · programmation et réseaux'
    if '/maintenance/' in s:return 'BUT · maintenance industrielle'
    if 'portfolio_save' in s:return 'Archives du portfolio'
    return 'BUT · cours, TP et projets'

def role(rel,kind):
    s=norm(rel)
    if any(x in s for x in ['rapport','rappor','compte rendu','koloussa']):return 'Travail ou rapport'
    if any(x in s for x in ['cours','chapitre','sujet','enonce','datasheet','livret','poly','memento','pn-but','cahier des charges','cdc ','offre de stage']):return 'Support pédagogique / contexte'
    return {'image':'Photographie / illustration','video':'Vidéo de travail','audio':'Enregistrement','source':'Code / fichier de travail','archive':'Archive de fichiers'}.get(kind,'Document de travail')

inventory=[]; candidates=[]; archive_members=[]; errors=[]
files=sorted(p for p in SOURCE.rglob('*') if p.is_file() and not p.is_symlink())
print(f'Inventaire : {len(files)} fichiers',flush=True)
for i,p in enumerate(files):
    rel=p.relative_to(SOURCE).as_posix(); kind=classify(rel)
    entry={'path':rel,'bytes':p.stat().st_size,'classification':kind}
    inventory.append(entry)
    if kind in {'image','video','audio','document','source','archive','autre-fichier'}:
        entry['sha256']=digest(p)
        if kind!='autre-fichier':candidates.append({'path':p,'relative':rel,'kind':kind,'sha':entry['sha256'],'size':entry['bytes']})
    if i and i%8000==0:print(f'  {i} fichiers parcourus',flush=True)
HASH_CACHE.write_text(json.dumps(hash_cache))
print(f'Fichiers exploitables avant dédoublonnage : {len(candidates)}',flush=True)
# Inspecter toutes les archives de travail, sans extraction de chemins arbitraires.
for item in list(candidates):
    if item['kind']!='archive':continue
    try:
        with zipfile.ZipFile(item['path']) as archive:
            for member in archive.infolist():
                if member.is_dir():continue
                kind=classify(member.filename)
                rec={'archive':item['relative'],'member':member.filename,'bytes':member.file_size,'classification':kind}
                archive_members.append(rec)
                # Les gros fichiers restent accessibles dans le ZIP original.
                if kind not in {'image','video','audio','document','source'} or member.file_size>512*1024*1024 or member.flag_bits&1:continue
                if member.compress_size and member.file_size/member.compress_size>500:continue
                data=archive.read(member); sha=hashlib.sha256(data).hexdigest(); rec['sha256']=sha
                suffix=Path(member.filename).suffix.lower()
                target=CACHE/'extraits'/f'{sha}{suffix}';target.parent.mkdir(exist_ok=True)
                if not target.exists():target.write_bytes(data)
                candidates.append({'path':target,'relative':item['relative']+' :: '+member.filename,'kind':kind,'sha':sha,'size':len(data)})
    except Exception as e:errors.append({'path':item['relative'],'error':str(e)[:180]})
print(f'Membres ZIP inventoriés : {len(archive_members)}',flush=True)
# Un seul identifiant par contenu binaire ; toutes les provenances sont conservées.
unique={}
for item in candidates:
    if item['sha'] not in unique:unique[item['sha']]={'item':item,'origins':[]}
    unique[item['sha']]['origins'].append(item['relative'])
registry={}; resources=[]
for index,(sha,bundle) in enumerate(unique.items()):
    item=bundle['item'];p=item['path'];rel=item['relative'];kind=item['kind'];rid=sha[:24]
    text='';thumbnail=None
    try:
        target=PREVIEWS/f'{rid}.webp'
        if kind=='image':
            if not target.exists():
                im=ImageOps.exif_transpose(Image.open(p)).convert('RGB');im.thumbnail((1400,1400));im.save(target,'WEBP',quality=82)
            thumbnail=f'/ressources-apercus/{rid}.webp'
        elif kind=='video':
            if not target.exists():
                proc=subprocess.run(['ffmpeg','-v','error','-ss','0.1','-i',str(p),'-frames:v','1','-vf','scale=800:800:force_original_aspect_ratio=decrease','-y',str(target)],capture_output=True,timeout=35)
            if target.exists():thumbnail=f'/ressources-apercus/{rid}.webp'
        elif (CACHE/'textes'/f'{rid}.txt').exists():
            text=(CACHE/'textes'/f'{rid}.txt').read_text()
        elif p.suffix.lower()=='.pdf':
            proc=subprocess.run(['pdftotext',str(p),'-'],capture_output=True,text=True,timeout=30);text=proc.stdout
        elif p.suffix.lower() in {'.docx','.pptx','.xlsx','.odt','.ods','.odp'}:
            with zipfile.ZipFile(p) as z:
                entries=[n for n in z.namelist() if n in ['word/document.xml','xl/sharedStrings.xml','content.xml'] or re.match(r'ppt/slides/slide\d+\.xml$',n)]
                from xml.etree import ElementTree
                text='\n'.join(' '.join(ElementTree.fromstring(z.read(n)).itertext()) for n in entries)
        elif kind=='source' and item['size']<2*1024*1024:
            text=p.read_text(errors='replace')
    except Exception as e:errors.append({'path':rel,'error':str(e)[:180]})
    if text:
        (CACHE/'textes').mkdir(exist_ok=True);(CACHE/'textes'/f'{rid}.txt').write_text(text)
    # Descriptions documentaires, jamais de responsabilité personnelle déduite du nom.
    topics=sorted(set(theme(origin) for origin in bundle['origins']))
    name=p.name if ' :: ' not in rel else rel.split(' :: ')[-1].split('/')[-1]
    record={'id':rid,'name':name,'kind':kind,'extension':p.suffix.lower().lstrip('.'),'bytes':item['size'],'theme':topics[0],'themes':topics,'role':role(rel,kind),'thumbnail':thumbnail,'copies':len(bundle['origins']),'excerpt':re.sub(r'\s+',' ',text)[:550] if kind=='document' else ''}
    resources.append(record)
    registry[rid]={'path':str(p.relative_to(ROOT)),'kind':kind,'name':name,'bytes':item['size'],'sha256':sha,'origins':bundle['origins']}
    if index and index%100==0:print(f'  {index}/{len(unique)} ressources préparées',flush=True)
counts=Counter(r['kind'] for r in resources)
summary={'filesScanned':len(files),'archiveMembers':len(archive_members),'uniqueResources':len(resources),'duplicatesCollapsed':len(candidates)-len(unique),'types':dict(counts),'classifications':dict(Counter(e['classification'] for e in inventory)),'errors':len(errors)}
(CACHE/'registry.json').write_text(json.dumps(registry,ensure_ascii=False,indent=2))
(CACHE/'inventory.json').write_text(json.dumps({'summary':summary,'files':inventory,'archiveMembers':archive_members,'errors':errors},ensure_ascii=False,indent=2))
(ROOT/'src/content/generated/resources.json').write_text(json.dumps(resources,ensure_ascii=False,separators=(',',':'))+'\n')
(ROOT/'src/content/generated/resource-summary.json').write_text(json.dumps(summary,ensure_ascii=False,indent=2)+'\n')
print(json.dumps(summary,ensure_ascii=False,indent=2),flush=True)
