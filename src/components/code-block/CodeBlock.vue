<template>
  <!-- Code Block Component -->
  <component
    :id="props.id"
    :class="props.class"
    :is="props.asElement || 'pre'"
    v-bind="$attrs"
    class="code">
    <!-- Line Component -->
    <template
      v-for="(line, i) in code"
      :key="i">
      <div class="line">
        <div class="number-container">
          <span
            class="number"
            v-if="!props.numbered"
            >{{ props.number }}</span
          >
        </div>
        <div v-html="line"></div>
      </div>
    </template>
  </component>
</template>

<script setup lang="ts">
  import { defineComponent, ref, toRefs } from 'vue';
  import { codeBlockProps, codeBlockInstance } from './types';
  import { useCodeBlock } from './use-code-block';
  import { parseCodeIntoLines } from '../utils';

  const props = defineProps(codeBlockProps());
  const code = ref<string[]>(parseCodeIntoLines(props.code, props.language));

  defineComponent<codeBlockInstance>({
    name: 'CodeBlock',
    props: codeBlockProps(),
    setup(props: codeBlockProps) {
      useCodeBlock(toRefs(props));
    },
    slots: { default: 'Default' }
  });
</script>

<style>
  .code {
    padding: 1rem 1.5rem;
    border-radius: 0.25rem;
    background-color: #f5f5f5;
  }
  /*
  .line {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  .number-container {
    color: #666;
  }

  .number {
    font-size: 0.8rem;
    user-select: none;
  } */
</style>
