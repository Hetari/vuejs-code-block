<template></template>

<script setup lang="ts">
  import { computed, defineComponent, toRefs } from 'vue';
  import { codeProps, codeInstance } from './types';
  import { useCode } from './use-code';

  const props = defineProps(codeProps());

  defineComponent<codeInstance>({
    name: 'Code',
    props: codeProps(),
    setup(props: codeProps) {
      useCode(toRefs(props));
    },
    slots: { default: 'Default' }
  });
</script>
