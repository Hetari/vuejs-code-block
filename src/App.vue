<template>
  <h1 class="">Vuejs Code Block UI Component</h1>

  <CodeBlock
    theme="prismSolarizedLight"
    :code="code"
    language="ts"
    :numbered="true"
    :show-header="true"
    file-name="codeBlock.ts">
  </CodeBlock>
</template>

<script setup lang="ts">
  import { CodeBlock } from './components/code-block';
  const code = `const name =  'Vuejs Code Block';
const author = 'Ebraheem Alhetari';
let version = '1.0.0';
const usrls = {
  github: 'https://github.com/hetari/vuejs-code-block',
  docs: 'https://hetari.github.io/vuejs-code-block/'
};`;

  // import { CodeBlock } from '../dist';
  // import { Prism } from './components/prism-langs';
  // const langs = ref(Object.keys(Prism.languages));
</script>
