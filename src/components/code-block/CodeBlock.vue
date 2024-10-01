<template>
  <div
    :class="class"
    :id="id">
    userCode: <br />
    {{ userCode }}
    <br />
    <br />
    <code
      :class="codeClass"
      v-html="userCode"></code>
    <slot name="default"></slot>
  </div>
</template>

<script setup lang="ts">
  import { computed, defineComponent, toRefs } from 'vue';
  import { codeBlockProps, codeBlockInstance } from './types';
  import { useCodeBlock } from './use-code-block';
  import { highlightedCode } from './utils';

  const props = defineProps(codeBlockProps());

  // Create a computed property for userCode
  const userCode = computed(() => {
    return highlightedCode(props.code, props.language);
  });

  defineComponent<codeBlockInstance>({
    name: 'CodeBlock',
    props: codeBlockProps(),
    setup(props: codeBlockProps) {
      useCodeBlock(toRefs(props));
    },
    slots: { default: 'Default' }
  });
</script>
