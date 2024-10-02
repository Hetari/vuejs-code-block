<template>
  <component 
    :is="value.asElement || 'pre'" 
    v-bind="$attrs" 
    class="code"
  >
    <template v-for="(line, i) in value.code" :key="i">
      <Line :number="i + 1" :numbered="value.numbered" :line="line"></Line>
    </template>
  </component>
</template>

<script setup lang="ts">
  import { defineComponent, toRefs } from 'vue';
  import { codeProps, codeInstance } from './types';
  import { useCode } from './use-code';
  import Line from '../line/Line.vue';

  defineProps(codeProps());

  defineComponent<codeInstance>({
    name: 'Code',
    props: codeProps(),
    setup(props: codeProps) {
      useCode(toRefs(props));
    }
  });
</script>

<style>
.code {
  padding: 1rem 1.5rem;
  border-radius: 0.25rem;
  background-color: #f5f5f5;
}
</style>