<template>
  <div>Vuejs Code Block</div>
  ss code: {{ code }}
</template>

<script setup lang="ts">
  import { defineComponent, toRefs } from 'vue';
  import { vuejsCodeBlockProps } from './types';
  import { useVuejsCodeBlock } from './use-vuejs-code-block';

  defineProps(vuejsCodeBlockProps());
  defineComponent({
    name: 'VuejsCodeBlock',
    props: vuejsCodeBlockProps(),
    setup(props) {
      // const codeBlockProps =
      useVuejsCodeBlock(toRefs(props));
    }
  });
</script>
