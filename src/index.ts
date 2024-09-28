// import VuejsCodeBlock from './components/vuejs-code-block/VuejsCodeBlock.vue';

// export * from './components/vuejs-code-block';

// export { default as VuejsCodeBlock } from './components/vuejs-code-block/VuejsCodeBlock.vue'; // Ensure you have this line for default export

import VuejsCodeBlock from './components/vuejs-code-block/VuejsCodeBlock.vue';

// Export the VuejsCodeBlock as the default export
export default VuejsCodeBlock;

// Re-export the install function as a named export
export { install } from './components/';

// Re-export everything from vuejs-code-block
export * from './components/vuejs-code-block';
