<template>
  <!-- Code Block Component -->
  <component
    :id="props.id"
    :class="props.class"
    :is="props.asElement || 'pre'"
    v-bind="$attrs"
    class="code">
    <!-- Line Component -->
    <slot>
      <template
        v-for="(line, i) in code"
        :key="i">
        <div class="line">
          <div
            class="line-number"
            v-if="props.numbered">
            {{ i + 1 }}
          </div>
          <div class="code-line">
            <div v-html="line"></div>
          </div>
        </div>
      </template>
    </slot>
  </component>
</template>

<script setup lang="ts">
  import { defineComponent, ref, toRefs } from 'vue';
  import {
    codeBlockProps,
    codeBlockPropsTypes,
    codeBlockInstance
  } from './types';
  import { useCodeBlock } from './use-code-block';
  import { parseCodeIntoLines } from '../utils';

  const props = defineProps(codeBlockProps());
  const code = ref<string[]>(parseCodeIntoLines(props.code, props.language));

  defineComponent<codeBlockInstance>({
    name: 'CodeBlock',
    props: codeBlockProps(),
    setup(props: codeBlockPropsTypes) {
      useCodeBlock(toRefs(props));
    },
    slots: { default: 'Default' }
  });
</script>

<style>
  .code {
    padding: 1rem;
    border-radius: 0.25rem;
    background-color: #121212;
    color: #fff;
    border: 1px solid #888;
  }

  .line {
    display: flex;
    align-items: center;
  }

  .line-number {
    color: #888;
    user-select: none;
    font-size: 0.85rem;
    padding: 0.1rem 1rem 0.1rem 0;
  }
</style>
