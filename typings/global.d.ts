declare module 'vue' {
  export interface GlobalComponents {
    VuejsCodeBlock: typeof import('../src/components/vuejs-code-block')['VuejsCodeBlock'];
  }
}

export {};
