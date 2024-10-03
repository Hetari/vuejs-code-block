<template>
  <!-- Code Block Component -->
  <div
    :id="props.id"
    :class="`vuejs-code-block ${props.class} ${props.theme}`">
    <component
      ref="codeBlock"
      :is="props.asElement || 'pre'"
      v-bind="$attrs">
      <!-- Filename Component  -->
      <div class=""></div>

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
  </div>
</template>

<script setup lang="ts">
  import { defineComponent, onMounted, Ref, ref, toRefs, watch } from 'vue';
  // @ts-ignore

  import {
    codeBlockProps,
    codeBlockPropsTypes,
    codeBlockInstance
  } from './types';
  import { useCodeBlock } from './use-code-block';
  import { parseCodeIntoLines } from '../utils';

  import { addThemeToCodeBlock, themes } from '../themes';

  const props = defineProps(codeBlockProps());
  const code = ref<string[]>(parseCodeIntoLines(props.code, props.language));
  const codeBlock: Ref<HTMLDivElement | null> = ref(null);

  onMounted(() => {
    addThemeToCodeBlock(codeBlock.value, themes[props.theme]);
  });

  watch(props, () => {
    code.value = parseCodeIntoLines(props.code, props.language);
    addThemeToCodeBlock(codeBlock.value, themes[props.theme]);
  });
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
  .vuejs-code-block pre {
    padding: 1rem;
    border-radius: 0.25rem;
    border: 0.5px solid #888;
  }

  .vuejs-code-block pre .line {
    display: flex;
    align-items: center;
  }

  .vuejs-code-block pre .line-number {
    color: #888;
    user-select: none;
    font-size: 0.8rem;
    padding: 0.1rem 1rem 0.1rem 0;
  }
</style>
