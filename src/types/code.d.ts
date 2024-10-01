declare module 'code' {
  import { DefineComponent } from 'vue';

  // Props goes here
  interface CodeProps {
    value: object;
  }

  const CodeType: DefineComponent<CodeProps>;
  export { CodeType };
}
