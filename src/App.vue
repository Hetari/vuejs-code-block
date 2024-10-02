<template>
  Test:
  <CodeBlock
    class="my-class"
    id="my-id"
    :code="code"
    language="py"
    code-class="codeClass"
    :lines-highlighted="[1, 2]"
    :words-highlighted="['log']"
    as-element="" />
  End of App.vue
</template>

<script setup lang="ts">
  import { CodeBlock } from './components/code-block';
  const code = `console.log('Hello');
  const name = 'World';
  def greet(name) {
     console.log('Hello, ' + name);
  }
  `;
</script>

<style>
  .my-class {
    color: rgb(65, 24, 24);
    border: 1px solid red;
    border-radius: 10px;
    font-size: 16px;
  }
  #my-id {
    /* background-color: rgb(0, 0, 0); */
    padding: 25px;
  }
</style>
