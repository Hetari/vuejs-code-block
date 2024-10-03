<template>
  Test:
  <CodeBlock
    :code="code"
    language="javascript"
    code-class="codeClass"
    :numbered="true"
    :lines-highlighted="[1, 2]"
    :words-highlighted="['log']">
  </CodeBlock>
  End of App.vue
  <!-- <pre>
    {{ langs }}
  </pre> -->
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import { CodeBlock } from './components/code-block';

  // import { Prism } from './components/prism-langs';
  // const langs = ref(Object.keys(Prism.languages));

  const code = `
console.log('Hello');
const name = 'World';
def greet(name) {
    console.log('Hello, ' + name);
}
`;
</script>
