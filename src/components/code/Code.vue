<template>
  <component
    :is="value.asElement || 'pre'"
    v-bind="$attrs">
    <template
      v-for="(line, i) in value.code"
      :key="i">
      <Line :line="line"></Line>
    </template>
  </component>
</template>

<script setup lang="ts">
  import { defineComponent, toRefs } from 'vue';
  import { codeProps, codeInstance } from './types';
  import { useCode } from './use-code';
  import Line from '../line/Line.vue';

  const props = defineProps(codeProps());

  defineComponent<codeInstance>({
    name: 'Code',
    props: codeProps(),
    setup(props: codeProps) {
      useCode(toRefs(props));
    }
  });
</script>
