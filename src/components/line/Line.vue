<template>
  <div class="line">
    <div class="number-container">
      <span
        class="number"
        v-if="numbered"
        >{{ number }}</span
      >
    </div>
    <div v-html="line"></div>
  </div>
</template>

<script setup lang="ts">
  import { defineComponent, onBeforeMount, toRefs } from 'vue';
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

<style>
  .line {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  .number-container {
    color: #666;
  }

  .number {
    font-size: 0.8rem;
    user-select: none;
  }
</style>
