<template>
  <div
    :class="class"
    :id="id">
    Vuejs Code Block
  </div>
  {{ code }}

  Slot here default:
  <slot name="default"></slot>

  Slot here trigger:
  <slot name="trigger"></slot>
</template>

<script setup lang="ts">
  import { defineComponent, toRefs } from 'vue';
  import { codeBlockProps, codeBlockInstance } from './types';
  import { useCodeBlock } from './use-code-block';

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
