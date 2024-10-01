<template></template>

<script setup lang="ts">
  import { defineComponent, toRefs } from 'vue';
  import { lineProps, lineInstance } from './types';
  import { useCode } from './use-line';

  const props = defineProps(lineProps());

  defineComponent<lineInstance>({
    name: 'Line',
    props: lineProps(),
    setup(props: lineProps) {
      useCode(toRefs(props));
    }
  });
</script>
