<template>
  <!-- Code Block Component -->
  <div
    :id="props.id"
    :class="`vuejs-code-block ${props.class} ${props.theme}`">
    <component
      ref="codeBlock"
      :is="props.asElement || 'pre'"
      v-bind="$attrs"
      :style="props.showHeader ? '' : 'padding-top: 1rem'">
      <!-- Header Component  -->
      <div
        v-if="props.showHeader"
        class="header">
        <div class="file-name">
          <img
            width="18"
            :src="icons[props.language]"
            alt="" />
          <p>{{ props.fileName }}</p>
        </div>
        <div class="copy"></div>
      </div>

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
  import { icons } from '../icons';
  import {
    computed,
    defineComponent,
    onMounted,
    Ref,
    ref,
    toRefs,
    watch
  } from 'vue';
  import {
    codeBlockProps,
    codeBlockPropsTypes,
    codeBlockInstance
  } from './types';
  import { useCodeBlock } from './use-code-block';
  import { parseCodeIntoLines } from '../utils';

  import { addThemeToCodeBlock, themes } from '../themes';

  const props = defineProps(codeBlockProps());

  const codeBlock: Ref<HTMLDivElement | null> = ref(null);

  const code = computed(() => parseCodeIntoLines(props.code, props.language));
  const currentTheme = computed(() => themes[props.theme]);

  onMounted(() => {
    addThemeToCodeBlock(codeBlock.value, currentTheme.value);
  });

  watch(
    () => props.theme,
    () => {
      addThemeToCodeBlock(codeBlock.value, currentTheme.value);
    }
  );

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
  *,
  *::after,
  *::before {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  body {
    padding: 15px;
  }

  .vuejs-code-block pre {
    padding-bottom: 1rem;
    border-radius: 0.25rem;
    border: 0.5px solid #888;
  }

  .vuejs-code-block pre .header {
    padding: 0.5rem 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;
    background-color: rgba(0, 0, 0, 0.001);
    backdrop-filter: brightness(0.9);
  }

  .vuejs-code-block pre .header .file-name {
    border-radius: 0.25rem;
    display: flex;
    gap: 0.5rem;
    padding: 0.5rem 5rem;
    padding-left: 0.25rem;
  }

  .vuejs-code-block pre .header .file-name p {
    font-size: 1rem;
  }

  .vuejs-code-block pre .line {
    padding: 0 1rem;
    display: flex;
    align-items: start;
    font-size: 1rem;
  }

  .vuejs-code-block pre .line span {
    white-space: pre-wrap;
    word-break: break-word;
  }

  .vuejs-code-block pre .line-number {
    color: #888;
    user-select: none;
    font-size: 0.9rem;
    padding: 0.1rem 1rem 0.1rem 0;
  }
</style>
