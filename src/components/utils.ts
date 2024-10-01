import { highlight, languages } from 'prismjs';
import 'prismjs/themes/prism-tomorrow.min.css';

export function highlightedCode(code: string, language: string) {
  if (code === null || code === undefined) {
    throw new Error('Code is null or undefined');
  }

  if (typeof code !== 'string') {
    throw new Error('Code is not a string');
  }

  // Check if the language is registered, fallback to 'markup' if not found
  const prismLanguage = languages[language] || languages.markup;

  if (!prismLanguage) {
    throw new Error(
      `Prism component for language "${language}" was not found.`
    );
  }

  return highlight(code, prismLanguage, language);
}

export function parseCodeIntoLines(
  code: string,
  language: string = 'markup'
): string[] {
  if (typeof code !== 'string') {
    throw new Error('Provided code must be a string');
  }

  return code
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter((l) => l.length > 0)
    .map((line) => {
      return highlightedCode(line, language);
    });
}
