declare module 'code-block' {
  import { DefineComponent } from 'vue';

  // Define the expected props interface
  // Props goes here
  interface CodeBlockProps {
    class: string;
    id: string;
    code: string;
    language: string;
    codeClass: string;
    linesHighlighted: string[] | number[];
    wordsHighlighted: string[];
  }

  const CodeBlockType: DefineComponent<CodeBlockProps>;
  export { CodeBlockType };
}
