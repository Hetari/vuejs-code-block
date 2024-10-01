declare module 'code' {
  import { DefineComponent } from 'vue';

  // Props goes here
  interface LineProps {
    line: string;
  }

  const LineType: DefineComponent<LineProps>;
  export { LineType };
}
