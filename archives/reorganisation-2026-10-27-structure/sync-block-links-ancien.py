#!/usr/bin/env python3
"""Recrée les accès locaux depuis les listes éditoriales, sans déplacer/supprimer les originaux.
Après une nouvelle indexation, affecter les nouveaux identifiants au bloc souhaité
avant de lancer ce script. Les anciennes entrées restent conservées sur disque.
"""
from pathlib import Path
import json
import os

ROOT = Path(__file__).resolve().parents[1]
registry = json.loads((ROOT / '.cache/ressources/registry.json').read_text())
catalog = {item['id']: item for item in json.loads((ROOT / 'src/content/generated/resources.json').read_text())}
folders = {'image': 'images', 'video': 'videos', 'document': 'documents', 'source': 'sources', 'archive': 'archives', 'audio': 'audio'}
count = 0
for manifest in (ROOT / 'contenus').glob('*/ressources.json'):
    block = manifest.parent
    # LABAA est désormais piloté par le dossier : respecter les retraits manuels.
    if block.name == 'labaa':
        continue
    entries = []
    for rid in json.loads(manifest.read_text())['ids']:
        item = catalog[rid]
        target = ROOT / registry[rid]['path']
        if not target.is_file():
            raise FileNotFoundError(target)
        link = block / 'ressources' / folders[item['kind']] / (rid[:8] + '--' + item['name'].replace('/', '-')[:170])
        link.parent.mkdir(parents=True, exist_ok=True)
        if not link.exists() and not link.is_symlink():
            link.symlink_to(os.path.relpath(target, link.parent))
        if link.resolve() != target.resolve():
            raise ValueError(f'Lien déjà occupé par une autre cible : {link}')
        entries.append({'id': rid, 'nom': item['name'], 'type': item['kind'], 'lien': str(link.relative_to(block)), 'original': registry[rid]['path']})
        count += 1
    inventory = block / 'inventaire-local.json'
    # Conserver le précédent inventaire lorsqu'il change.
    content = json.dumps(entries, ensure_ascii=False, indent=2) + '\n'
    if inventory.exists() and inventory.read_text() != content:
        import time
        inventory.rename(block / f'inventaire-local-{time.time_ns()}.json')
    inventory.write_text(content)
print(f'{count} accès locaux vérifiés ; aucun original supprimé.')
