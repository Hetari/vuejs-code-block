<template>
  <div>App.vue</div>
  Test:
  <pre>
    <CodeBlock code="'sss'" />
    <CodeBlock code="'123'" />
    <CodeBlock code="'123sds'" />
  </pre>
  End of Test
  <br />
  End of App.vue
</template>

<script setup lang="ts">
  import { CodeBlock } from '../dist';
</script>
