<template>
  Test:
  <CodeBlock
    code="print('Hello, ' + name)"
    language="py" />
  End of App.vue
</template>

<script setup lang="ts">
  import { CodeBlock } from '../dist';
</script>

<style>
  .my-class {
    color: rgb(65, 24, 24) !important;
    border: 1px solid red !important;
  }
  #my-id {
    background-color: rgb(107, 194, 126) !important;
  }
</style>
