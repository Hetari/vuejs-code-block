<template>
  <div>Vuejs Code Block</div>
  ss code: {{ code }}
</template>

<script setup lang="ts">
  import { defineComponent, toRefs } from 'vue';
  import { codeBlockProps, codeBlockInstance } from './types';
  import { useCodeBlock } from './use-code-block';
  import { CodeBlockType } from 'code-block';

  defineProps(codeBlockProps());
  defineComponent<codeBlockInstance>({
    name: 'CodeBlock',
    props: codeBlockProps(),
    setup(props: codeBlockProps) {
      useCodeBlock(toRefs(props));
    }
  });
</script>
