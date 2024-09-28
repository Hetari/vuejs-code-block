declare module 'vuejs-code-block' {
  import { DefineComponent } from 'vue';

  interface VuejsCodeBlockProps {
    code: string;
  }

  const VuejsCodeBlock: DefineComponent<VuejsCodeBlockProps>;

  export default VuejsCodeBlock;
}
