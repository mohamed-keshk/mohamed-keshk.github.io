// Hugo 0.161.1 reads package-manager wrappers to locate the JavaScript CLI.
// Newer pnpm Windows wrappers put NODE_PATH before the entry point, which
// confuses that parser. A comment provides the real relative entry point first.
import { readFileSync, writeFileSync, lstatSync } from 'node:fs';
const windows = process.platform === 'win32';
const path = new URL('../node_modules/.bin/tailwindcss' + (windows ? '.cmd' : ''), import.meta.url);
if (!lstatSync(path).isSymbolicLink()) {
  const text = readFileSync(path, 'utf8');
  const hint = windows
    ? '@rem Hugo entry: "%~dp0\\..\\@tailwindcss\\cli\\dist\\index.mjs"'
    : '# Hugo entry: "$basedir/../@tailwindcss/cli/dist/index.mjs"';
  if (!text.includes(hint)) {
    const insertion = text.startsWith('#!') ? text.indexOf('\n') + 1 : 0;
    writeFileSync(path, text.slice(0, insertion) + hint + '\n' + text.slice(insertion));
  }
}
