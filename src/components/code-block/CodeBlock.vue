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
          <span>{{ props.fileName }}</span>
        </div>
        <div
          @click="copyCode"
          class="actions">
          <button
            type="button"
            class="copy-button">
            <svg
              v-if="!copied"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
              class="copy-icon">
              <path
                d="M13 10.75h-1.25a2 2 0 0 0-2 2v8.5a2 2 0 0 0 2 2h8.5a2 2 0 0 0 2-2v-8.5a2 2 0 0 0-2-2H19"></path>
              <path
                d="M18 12.25h-4a1 1 0 0 1-1-1v-1.5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1.5a1 1 0 0 1-1 1ZM13.75 16.25h4.5M13.75 19.25h4.5"></path>
            </svg>
            <svg
              v-else
              fill="currentColor"
              class="check-icon"
              viewBox="0 0 36 36">
              <path
                d="M29.28 6.362a2.502 2.502 0 0 0-3.458.736L14.936 23.877l-5.029-4.65a2.5 2.5 0 1 0-3.394 3.671l7.209 6.666c.48.445 1.09.665 1.696.665c.673 0 1.534-.282 2.099-1.139c.332-.506 12.5-19.27 12.5-19.27a2.5 2.5 0 0 0-.737-3.458z"></path>
            </svg>
          </button>
        </div>
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
  import { copyCodeToClipboard, parseCodeIntoLines } from '../utils';
  import { addThemeToCodeBlock, themes } from '../themes';

  const props = defineProps(codeBlockProps());

  const codeBlock: Ref<HTMLDivElement | null> = ref(null);
  const code = computed(() => parseCodeIntoLines(props.code, props.language));
  const currentTheme = computed(() => themes[props.theme]);
  const copied = ref(false);

  const copyCode = () => {
    copied.value = true;
    copyCodeToClipboard(props.code);

    setTimeout(() => {
      copied.value = false;
    }, 2000);
  };

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
  .vuejs-code-block pre {
    padding-bottom: 1rem;
    border-radius: 0.3rem;
    border: 0.5px solid #888;
  }

  .vuejs-code-block pre .header {
    padding: 0.5rem 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: rgba(0, 0, 0, 0.001);
    backdrop-filter: brightness(0.9);
  }

  .vuejs-code-block pre .header .file-name {
    border-radius: 0.25rem;
    display: flex;
    gap: 0.5rem;
    /* padding: 0.5rem 1.5rem; */
    /* padding-left: 0.25rem; */
  }

  .vuejs-code-block pre .header .file-name p {
    font-size: 1rem;
  }

  .vuejs-code-block pre .header .actions {
    display: flex;
    align-items: center;
  }

  .vuejs-code-block pre .header .actions .copy-button {
    background: none;
    border: none;
    margin: 0;
    padding: 0;
    cursor: pointer;
    color: #64748b;
    background: rgba(127.5, 127.5, 127.5, 0.15);
    border-radius: 0.5rem;
    transition: color 150ms ease-in-out;
  }

  .vuejs-code-block pre .header .actions .copy-button:hover {
    color: #94a3b8;
  }

  .vuejs-code-block pre .header .actions .copy-icon {
    width: 2rem;
    height: 2rem;
  }

  .vuejs-code-block pre .header .actions .check-icon {
    width: 2rem;
    height: 2rem;
    scale: 0.8;
    object-position: center;
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
