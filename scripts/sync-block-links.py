#!/usr/bin/env python3
"""Les galeries sont pilotées par les dossiers. Aucun lien retiré ne doit être recréé."""
import subprocess
from pathlib import Path
subprocess.run(['node', 'scripts/check-blocks.mjs'], cwd=Path(__file__).resolve().parents[1], check=True)
print('Contrôle terminé. Les sélections de fichiers n’ont pas été modifiées.')
