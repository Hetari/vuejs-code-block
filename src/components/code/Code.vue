<template>
  <component
    :is="value.asElement || 'pre'"
    v-bind="$attrs">
    <template></template>
    {{ value }}
  </component>
</template>

<script setup lang="ts">
  import { computed, defineComponent, toRefs } from 'vue';
  import { codeProps, codeInstance } from './types';
  import { useCode } from './use-code';
  import { highlightedCode } from '../code-block/utils';

  const props = defineProps(codeProps());

  // Create a computed property for userCode
  // const userCode = computed(() => {
  //   return highlightedCode(props.value.code, props.value.language);
  // });

  defineComponent<codeInstance>({
    name: 'Code',
    props: codeProps(),
    setup(props: codeProps) {
      useCode(toRefs(props));
    }
  });
</script>
