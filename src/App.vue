<template>
  Test:
  <CodeBlock
    class="my-class"
    id="my-id"
    :code="code"
    language="js"
    code-class="codeClass"
    :numbered="true"
    :lines-highlighted="[1, 2]"
    :words-highlighted="['log']"
    as-element="" />
  End of App.vue
</template>

<script setup lang="ts">
  import { CodeBlock } from './components/code-block';
  const code = `
console.log('Hello');
const name = 'World';
def greet(name) {
    console.log('Hello, ' + name);
}
`;
</script>
