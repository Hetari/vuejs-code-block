<template>
  Test:
  <CodeBlock
    class="my-class"
    id="my-id"
    :code="code"
    language="js"
    code-class="codeClass"
    :lines-highlighted="[1, 2]"
    :words-highlighted="['log']"
    as-element="" />
  End of App.vue
</template>

<script setup lang="ts">
  import { CodeBlock } from '../dist';
  const code = `console.log('Hello');
                const name = 'World';
`;
</script>

<style>
  .my-class {
    color: rgb(65, 24, 24);
    border: 1px solid red;
    border-radius: 10px;
  }
  #my-id {
    background-color: rgb(107, 194, 126);
    padding: 25px;
  }
</style>
