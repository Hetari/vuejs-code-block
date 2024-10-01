<template>
  <div v-html="line"></div>
</template>

<script setup lang="ts">
  import { defineComponent, onBeforeMount, toRefs } from 'vue';
  import { lineProps, lineInstance } from './types';
  import { useCode } from './use-line';
  import { highlightedCode } from '../utils';

  const props = defineProps(lineProps());
  // onBeforeMount(()=> {
  //   highlightedCode(props.line);
  // })
  defineComponent<lineInstance>({
    name: 'Line',
    props: lineProps(),
    setup(props: lineProps) {
      useCode(toRefs(props));
    }
  });
</script>
