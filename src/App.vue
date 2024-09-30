ٍSlot here

<template>
  Test:
  <code>
    <pre>
  <CodeBlock
    class="my-class"
    code="'sss'" />
  <CodeBlock code="'123'" />
  <CodeBlock code="'123sds'"> ٍSlot here </CodeBlock>
  </pre>
  </code>
  End of App.vue
</template>

<script setup lang="ts">
  import { CodeBlock } from '../dist';
</script>

<style>
  .my-class {
    color: red !important;
    background-color: blue !important;
    border: 1px solid red !important;
  }
</style>
