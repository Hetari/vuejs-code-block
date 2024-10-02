<template>
  <Code
    :id="id"
    :class="class"
    :value="rootContext"></Code>
</template>

<script setup lang="ts">
  import Code from '../code/Code.vue';
  import { computed, defineComponent, toRefs } from 'vue';
  import { codeBlockProps, codeBlockInstance } from './types';
  import { useCodeBlock } from './use-code-block';
  import { parseCodeIntoLines } from '../utils';

  const props = defineProps(codeBlockProps());

  // TODO: add theme
  // codeClass: props.codeClass,
  const rootContext = computed(() => ({
    code: parseCodeIntoLines(props.code, props.language),
    numbered: props.numbered,
    language: props.language,
    linesHighlighted: props.linesHighlighted,
    wordsHighlighted: props.wordsHighlighted,
    asElement: props.asElement
  }));

  defineComponent<codeBlockInstance>({
    name: 'CodeBlock',
    props: codeBlockProps(),
    setup(props: codeBlockProps) {
      useCodeBlock(toRefs(props));
    },
    slots: { default: 'Default' }
  });
</script>
