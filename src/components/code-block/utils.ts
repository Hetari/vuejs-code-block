import 'prismjs/themes/prism.css';

import { computed } from 'vue';
import { highlight, languages } from 'prismjs';

export function highlightedCode(code: String, language: String) {
  return computed(() => {
    if (code === null || code === undefined) {
      throw new Error('Code is null or undefined');
    }

    if (typeof code !== 'string') {
      throw new Error('Code is not a string');
    }

    const prismLanguage = languages[language as string] || languages.markup;

    if (!prismLanguage) {
      throw new Error(
        `Prism component for language "${language}" was not found. Did you forget to register it?`
      );
    }

    return highlight(code, prismLanguage, language as string);
  });
}
