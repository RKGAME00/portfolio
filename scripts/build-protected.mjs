import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

// Les compilations précédentes ont saturé la RAM et fermé l'application hôte.
// Un groupe systemd séparé limite TOUTE la compilation (Node et code natif).
// La limite du tas JavaScript seule ne suffit pas pour Turbopack.
const root = fileURLToPath(new URL('../', import.meta.url));
const checkOnly = process.argv.includes('--check');
const probe = `
  const fs = require('node:fs');
  const group = fs.readFileSync('/proc/self/cgroup', 'utf8').trim().split(':').at(-1);
  console.log('Groupe isolé :', group);
  for (const name of ['memory.high', 'memory.max', 'memory.swap.max']) {
    console.log(name, fs.readFileSync('/sys/fs/cgroup' + group + '/' + name, 'utf8').trim());
  }
`;

// Un nom fixe empêche deux compilations protégées de démarrer en parallèle.
// Si systemd est indisponible, on échoue : aucun repli vers un build sans limite.
const result = spawnSync(
  'systemd-run',
  [
    '--user',
    '--scope',
    '--unit=portfolio-build',
    '--slice=portfolio-work.slice',
    '--property=MemoryHigh=3G',
    '--property=MemoryMax=4G',
    '--property=MemorySwapMax=512M',
    '--',
    process.execPath,
    '--max-old-space-size=2560',
    ...(checkOnly
      ? ['-e', probe]
      : [
          'node_modules/next/dist/bin/next',
          'build',
          '--webpack',
          ...process.argv.slice(2),
        ]),
  ],
  { cwd: root, stdio: 'inherit' },
);

if (result.error || result.status !== 0) {
  console.error(
    'Compilation protégée non aboutie. Ne pas relancer next build sans limite.',
  );
  if (result.error) console.error(result.error.message);
}
process.exit(result.status ?? 1);
