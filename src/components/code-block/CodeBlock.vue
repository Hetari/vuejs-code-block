<template>
  <div
    :class="class"
    :id="id"
    :value="rootContext"></div>
</template>

<script setup lang="ts">
  import { computed, defineComponent, toRefs } from 'vue';
  import { codeBlockProps, codeBlockInstance } from './types';
  import { useCodeBlock } from './use-code-block';

  const props = defineProps(codeBlockProps());

  const rootContext = computed(() => ({
    code: props.code.trim(),
    language: props.language,
    words: props.wordsHighlighted || [],
    lines: props.linesHighlighted || []
  }));

  // Create a computed property for userCode
  // const userCode = computed(() => {
  //   return highlightedCode(props.code, props.language);
  // });

  defineComponent<codeBlockInstance>({
    name: 'CodeBlock',
    props: codeBlockProps(),
    setup(props: codeBlockProps) {
      useCodeBlock(toRefs(props));
    },
    slots: { default: 'Default' }
  });
</script>
