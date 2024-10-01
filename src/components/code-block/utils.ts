import 'prismjs/themes/prism.css';
import { highlight, languages } from 'prismjs';
import 'prismjs-components-importer/esm';

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
