import 'prismjs/themes/prism.min.css';
import { Prism } from './prism-langs';
// import 'prismjs/themes/prism-con.min.css';

export type AllLanguagesSupported =
  'markup' |
  'jsx' |
  'tsx' |
  'swift' |
  'kotlin' |
  'objectivec' |
  'js-extras' |
  'reason' |
  'rust' |
  'graphql' |
  'yaml' |
  'go' |
  'cpp' |
  'markdown' |
  'python' |
  'json';


export function highlightedCode(code: string, language: string) {
  if (code === null || code === undefined) {
    throw new Error('Code is null or undefined');
  }

  if (typeof code !== 'string') {
    throw new Error('Code is not a string');
  }

  // Check if the language is registered, fallback to 'markup' if not found
  const prismLanguage = Prism.languages[language];

  if (!prismLanguage) {
    console.log("Prism component for language '" + language + "' was not found.");
    throw new Error(
      `Prism component for language "${language}" was not found. Report this issue at https://github.com/hetari/vuejs-code-block`
    );
  }

  return Prism.highlight(code, prismLanguage, language);
}

export function parseCodeIntoLines(
  code: string,
  language: string = 'markup'
): string[] {
  if (typeof code !== 'string') {
    throw new Error('Provided code must be a string');
  }

  code = highlightedCode(code, language);

  return code
    .split(/\r?\n/)
    .map((line) => line.trimEnd())
    .filter((l) => l.length > 0);
}
