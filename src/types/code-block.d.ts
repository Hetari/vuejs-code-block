declare module 'code-block' {
  import { DefineComponent } from 'vue';

  // Define the expected props interface
  // Props goes here
  interface CodeBlockProps {
    class: string;
    id: string;
    code: string;
  }

  const CodeBlockType: DefineComponent<CodeBlockProps>;
  export { CodeBlockType };
}
