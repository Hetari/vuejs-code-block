declare module 'code-block' {
  import { DefineComponent } from 'vue';

  // Define the expected props interface
  interface CodeBlockProps {
    code: string;
  }

  const CodeBlockType: DefineComponent<CodeBlockProps>;
  export { CodeBlockType };
}
