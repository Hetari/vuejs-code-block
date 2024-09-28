import VuejsCodeBlock from './components/vuejs-code-block/VuejsCodeBlock.vue';

export * from './components/vuejs-code-block';

export { default as VuejsCodeBlock } from './components/vuejs-code-block/VuejsCodeBlock.vue'; // Ensure you have this line for default export

// Export install as a named export
export { install } from './components/';
