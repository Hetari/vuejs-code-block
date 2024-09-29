declare module 'code-block' {
  import { DefineComponent } from 'vue';

  // Define the expected props interface
  interface CodeBlockProps {
    code: string;
  }

  const CodeBlock: DefineComponent<CodeBlockProps>;
  export { CodeBlock };
}
