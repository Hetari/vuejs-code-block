<template>
  <div
    :class="class"
    :id="id">
    <code
      :class="codeClass"
      v-html="highlightedCode"></code>
    <slot name="default"></slot>
  </div>
</template>

<script setup lang="ts">
  import { defineComponent, ref, toRefs } from 'vue';
  import { codeBlockProps, codeBlockInstance } from './types';
  import { useCodeBlock } from './use-code-block';
  import { highlightedCode } from './utils';

  defineProps(codeBlockProps());
  defineComponent<codeBlockInstance>({
    name: 'CodeBlock',
    props: codeBlockProps(),
    setup(props: codeBlockProps) {
      useCodeBlock(toRefs(props));
    },
    slots: { default: 'Default' }
  });
</script>
