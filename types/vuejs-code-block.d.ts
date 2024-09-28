declare module 'vuejs-code-block' {
  import { DefineComponent } from 'vue';

  // Define the expected props interface
  interface VuejsCodeBlockProps {
    code: string;
  }

  const VuejsCodeBlock: DefineComponent<VuejsCodeBlockProps>;
  export default VuejsCodeBlock;
}
