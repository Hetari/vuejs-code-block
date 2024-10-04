import { SupportedLanguageTypes } from 'code-block';

const iconModules = import.meta.glob('./*.svg', { eager: true });

const aliasMap: Record<string, string> = {
  DFS: 'svg',
  coffeescript: 'coffee',
  clike: 'c',
  extend: 'markdown',
  js: 'javascript',
  jsx: 'typescript',
  kts: 'kotlin',
  kt: 'kotlin',
  markup: 'html',
  mathml: 'xml',
  md: 'markdown',
  objc: 'c',
  objectivec: 'c',
  plain: 'document',
  plaintext: 'document',
  py: 'python',
  ssml: 'xml',
  ts: 'typescript',
  tsx: 'typescript',
  txt: 'document',
  text: 'document',
  webmanifest: 'json',
  xml: 'markup',
  yml: 'yaml'
};

export const icons = Object.fromEntries(
  Object.entries(iconModules).flatMap(([key, value]) => {
    // remove './' prefix and '.svg' suffix
    const name = key.slice(2, -4);

    const defaultExport = (value as { default: any }).default;
    const entries = [[name, defaultExport]];

    // Check if the name has an alias
    const aliases = Object.entries(aliasMap).filter(
      ([aliasKey, originalKey]) => originalKey === name
    );

    aliases.forEach(([aliasKey]) => {
      entries.push([aliasKey, defaultExport]);
    });

    return entries;
  })
);
