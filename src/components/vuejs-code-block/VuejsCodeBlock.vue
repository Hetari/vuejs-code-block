<template>
  <div>Vuejs Code Block</div>
  ss code: {{ code }}
</template>

<script lang="ts">
  import { defineComponent, toRefs } from 'vue';
  import { vuejsCodeBlockProps } from './types';
  import { useVuejsCodeBlock } from './use-vuejs-code-block';

  export default defineComponent({
    name: 'VuejsCodeBlock',
    props: vuejsCodeBlockProps(),
    setup(props) {
      // const codeBlockProps =
      useVuejsCodeBlock(toRefs(props));
    }
  });
</script>
