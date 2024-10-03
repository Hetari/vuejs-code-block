<template>
  <!-- Code Block Component -->
  <component
    :id="props.id"
    :class="`${props.class} vuejs-code-block-${props.theme}`"
    :is="props.asElement || 'pre'"
    v-bind="$attrs"
    class="vuejs-code-block">
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
  .vuejs-code-block {
    padding: 1rem;
    border-radius: 0.25rem;
    border: 1px solid #888;
  }

  .vuejs-code-block-dark {
    background-color: #121212;
    color: #fff;
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

<!-- light -->
<style>
  .vuejs-code-block-light {
    code[class*='language-'],
    pre[class*='language-'] {
      color: #000;
      background: 0 0;
      text-shadow: 0 1px #fff;
      font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
      font-size: 1em;
      text-align: left;
      white-space: pre;
      word-spacing: normal;
      word-break: normal;
      word-wrap: normal;
      line-height: 1.5;
      -moz-tab-size: 4;
      -o-tab-size: 4;
      tab-size: 4;
      -webkit-hyphens: none;
      -moz-hyphens: none;
      -ms-hyphens: none;
      hyphens: none;
    }
    code[class*='language-'] ::-moz-selection,
    code[class*='language-']::-moz-selection,
    pre[class*='language-'] ::-moz-selection,
    pre[class*='language-']::-moz-selection {
      text-shadow: none;
      background: #b3d4fc;
    }
    code[class*='language-'] ::selection,
    code[class*='language-']::selection,
    pre[class*='language-'] ::selection,
    pre[class*='language-']::selection {
      text-shadow: none;
      background: #b3d4fc;
    }
    @media print {
      code[class*='language-'],
      pre[class*='language-'] {
        text-shadow: none;
      }
    }
    pre[class*='language-'] {
      padding: 1em;
      margin: 0.5em 0;
      overflow: auto;
    }
    :not(pre) > code[class*='language-'],
    pre[class*='language-'] {
      background: #f5f2f0;
    }
    :not(pre) > code[class*='language-'] {
      padding: 0.1em;
      border-radius: 0.3em;
      white-space: normal;
    }
    .token.cdata,
    .token.comment,
    .token.doctype,
    .token.prolog {
      color: #708090;
    }
    .token.punctuation {
      color: #999;
    }
    .token.namespace {
      opacity: 0.7;
    }
    .token.boolean,
    .token.constant,
    .token.deleted,
    .token.number,
    .token.property,
    .token.symbol,
    .token.tag {
      color: #905;
    }
    .token.attr-name,
    .token.builtin,
    .token.char,
    .token.inserted,
    .token.selector,
    .token.string {
      color: #690;
    }
    .language-css .token.string,
    .style .token.string,
    .token.entity,
    .token.operator,
    .token.url {
      color: #9a6e3a;
      background: hsla(0, 0%, 100%, 0.5);
    }
    .token.atrule,
    .token.attr-value,
    .token.keyword {
      color: #07a;
    }
    .token.class-name,
    .token.function {
      color: #dd4a68;
    }
    .token.important,
    .token.regex,
    .token.variable {
      color: #e90;
    }
    .token.bold,
    .token.important {
      font-weight: 700;
    }
    .token.italic {
      font-style: italic;
    }
    .token.entity {
      cursor: help;
    }
  }
</style>

<!-- dark -->
<style>
  .vuejs-code-block-dark {
    code[class*='language-'],
    pre[class*='language-'] {
      color: white;
      background: none;
      text-shadow: 0 -0.1em 0.2em black;
      font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
      font-size: 1em;
      text-align: left;
      white-space: pre;
      word-spacing: normal;
      word-break: normal;
      word-wrap: normal;
      line-height: 1.5;

      -moz-tab-size: 4;
      -o-tab-size: 4;
      tab-size: 4;

      -webkit-hyphens: none;
      -moz-hyphens: none;
      -ms-hyphens: none;
      hyphens: none;
    }

    @media print {
      code[class*='language-'],
      pre[class*='language-'] {
        text-shadow: none;
      }
    }

    pre[class*='language-'],
    :not(pre) > code[class*='language-'] {
      background: hsl(30, 20%, 25%);
    }

    /* Code blocks */
    pre[class*='language-'] {
      padding: 1em;
      margin: 0.5em 0;
      overflow: auto;
      border: 0.3em solid hsl(30, 20%, 40%);
      border-radius: 0.5em;
      box-shadow: 1px 1px 0.5em black inset;
    }

    /* Inline code */
    :not(pre) > code[class*='language-'] {
      padding: 0.15em 0.2em 0.05em;
      border-radius: 0.3em;
      border: 0.13em solid hsl(30, 20%, 40%);
      box-shadow: 1px 1px 0.3em -0.1em black inset;
      white-space: normal;
    }

    .token.comment,
    .token.prolog,
    .token.doctype,
    .token.cdata {
      color: hsl(30, 20%, 50%);
    }

    .token.punctuation {
      opacity: 0.7;
    }

    .token.namespace {
      opacity: 0.7;
    }

    .token.property,
    .token.tag,
    .token.boolean,
    .token.number,
    .token.constant,
    .token.symbol {
      color: hsl(350, 40%, 70%);
    }

    .token.selector,
    .token.attr-name,
    .token.string,
    .token.char,
    .token.builtin,
    .token.inserted {
      color: hsl(75, 70%, 60%);
    }

    .token.operator,
    .token.entity,
    .token.url,
    .language-css .token.string,
    .style .token.string,
    .token.variable {
      color: hsl(40, 90%, 60%);
    }

    .token.atrule,
    .token.attr-value,
    .token.keyword {
      color: hsl(350, 40%, 70%);
    }

    .token.regex,
    .token.important {
      color: #e90;
    }

    .token.important,
    .token.bold {
      font-weight: bold;
    }
    .token.italic {
      font-style: italic;
    }

    .token.entity {
      cursor: help;
    }

    .token.deleted {
      color: red;
    }
  }
</style>
