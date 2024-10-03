<template>
  Test:
  <CodeBlock
    theme="none"
    :code="code"
    language="python"
    :numbered="true"
    file-name="">
  </CodeBlock>
  <!-- :lines-highlighted="[1, 2]"
  :words-highlighted="['log']" -->
  End of App.vue
  <!-- <pre>
    {{ langs }}
  </pre> -->
</template>

<script setup lang="ts">
  import { CodeBlock } from './components/code-block';

  // import { Prism } from './components/prism-langs';
  // const langs = ref(Object.keys(Prism.languages));

  const code = `print("Hello, World!")
  s = 2
  sdsd = 3
`;
</script>

<style>
  body {
    /* background-color: #000; */
  }
</style>
