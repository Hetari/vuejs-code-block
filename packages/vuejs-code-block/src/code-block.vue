<template>
  <div>test</div>
  {{ code }}
</template>

<script setup lang="ts">
  // @ts-nocheck
  import { ref } from 'vue';

  defineProps({
    code: {
      type: String,
      required: true
    }
  });
</script>
