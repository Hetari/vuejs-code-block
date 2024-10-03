import { toValue } from 'vue';
import { PublicCodeBlockProps } from './types';

/**
 * The default props in Vue are set within vuejs-code-block too.
 */
// NOTE: https://github.com/Microsoft/TypeScript/issues/23812
// eslint-disable-next-line @typescript-eslint/no-unused-vars

// Props goes here
const defaultProps = {
  class: '',
  id: '',
  code: '',
  language: '',
  codeClass: '',
  linesHighlighted: [],
  wordsHighlighted: [],
  asElement: '',
  numbered: false,
  number: 0
};

export function useCodeBlock(props: PublicCodeBlockProps) {
  props = { ...defaultProps, ...props };

  // Extract reactive values if necessary using toValue (for Vue's reactivity)
  const code = toValue(props.code);

  // Log messages with appropriate log level based on styled
  const logMessages = (
    messages: unknown[],
    level: 'error' | 'warning' | 'debug' = 'error'
  ) => {
    if (!code) {
      if (level === 'error') {
        console.error(...messages); // eslint-disable-line no-console
      } else if (level === 'warning') {
        console.warn(...messages); // eslint-disable-line no-console
      } else if (level === 'debug') {
        console.debug(...messages); // eslint-disable-line no-console
      }
    }
  };

  // Suppress errors if the user requested it
  if (code) {
    try {
      // Your main logic that might throw errors
    } catch (err) {
      logMessages([err], 'error'); // Log suppressed error
    }
  } else {
    // Add logic here if no error suppression is active
  }

  return {
    logMessages, // Return logMessages for external use if needed
    props // Return props if they need to be accessed elsewhere
  };
}
