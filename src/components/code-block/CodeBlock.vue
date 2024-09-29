<template>
  <div>Vuejs Code Block</div>
  ss code: {{ code }}
</template>

<script setup lang="ts">
  import { defineComponent, toRefs } from 'vue';
  import { codeBlockProps } from './types';
  import { useCodeBlock } from './use-code-block';

  defineProps(codeBlockProps());
  defineComponent({
    name: 'CodeBlock',
    props: codeBlockProps(),
    setup(props) {
      // const codeBlockProps =
      useCodeBlock(toRefs(props));
    }
  });
</script>
