<template>
  <h1 class="">Vuejs Code Block UI Component</h1>

  <CodeBlock
    theme="ultramin"
    :code="code"
    language="python"
    :numbered="true"
    :show-header="true"
    file-name="ss">
  </CodeBlock>
</template>

<script setup lang="ts">
  import { CodeBlock } from './components/code-block';
  const code = `print("Hello, World!")
s = "lorem ipsum dolor sit amet consect etur adipiscing elit"
def add(a, b):
const ant = 1`;

  // import { CodeBlock } from '../dist';
  // import { Prism } from './components/prism-langs';
  // const langs = ref(Object.keys(Prism.languages));
</script>
