"""Préparer des copies H.264/AAC sans modifier les vidéos originales (FFmpeg requis).
Exécuter depuis la racine : python3 scripts/prepare-labaa-videos.py.
Une copie existante est validée, jamais écrasée.
"""
import pathlib,subprocess,json
base=pathlib.Path('contenus/stages/labaa')
out=base/'ressources/videos-web';out.mkdir(exist_ok=True)
for p in sorted((base/'ressources/videos').glob('*.mp4')):
 target=out/p.name
 if target.exists():
  continue  # La validation complète ci-dessous contrôle aussi les copies existantes.
 print('Encodage',p.name,flush=True)
 # Deux exports LABAA partagent les mêmes images, mais pas le même son.
 # Vérifier les pistes avant de réutiliser la vidéo encodée et garder le son propre.
 peer=out/'20250617_141035.mp4'
 reuse=False
 if p.name=='20250617_141035_1.mp4' and peer.exists():
  def video_hash(source):
   return subprocess.check_output(['ffmpeg','-v','error','-i',str(source),'-map','0:v:0','-c','copy','-f','hash','-hash','sha256','-'])
  reuse=video_hash(p)==video_hash(base/'ressources/videos'/peer.name)
 if reuse:
  subprocess.run(['ffmpeg','-nostdin','-v','error','-n','-i',str(peer),'-i',str(p),'-map','0:v:0','-map','1:a?','-c:v','copy','-c:a','aac','-b:a','128k','-movflags','+faststart',str(target)],check=True)
 else:
  subprocess.run(['ffmpeg','-nostdin','-v','error','-n','-threads','2','-i',str(p),'-map','0:v:0','-map','0:a?','-vf','scale=1280:720:force_original_aspect_ratio=decrease:force_divisible_by=2','-c:v','libx264','-threads','2','-preset','veryfast','-crf','23','-maxrate','2500k','-bufsize','5000k','-pix_fmt','yuv420p','-g','60','-c:a','aac','-b:a','128k','-movflags','+faststart',str(target)],check=True)
 print('Terminé',p.name,target.stat().st_size,flush=True)

# Décoder jusqu’à la dernière image et comparer la durée avant exposition au site.
for source in sorted((base/'ressources/videos').glob('*.mp4')):
 target=out/source.name
 def probe(p):
  return json.loads(subprocess.check_output(['ffprobe','-v','error','-show_format','-show_streams','-of','json',str(p)]))
 original,web=probe(source),probe(target)
 assert abs(float(original['format']['duration'])-float(web['format']['duration']))<0.5, source.name
 assert next(s for s in web['streams'] if s['codec_type']=='video')['codec_name']=='h264'
 subprocess.run(['ffmpeg','-nostdin','-v','error','-xerror','-threads','2','-i',str(target),'-f','null','-'],check=True)
 target.with_suffix('.mp4.ready').write_text('Durée et décodage intégral validés.\n')
 print('Validé',source.name,flush=True)
