<script setup lang="ts">
import { computed, ref, onMounted } from 'vue';

const props = defineProps({
  minWidth : { type: String, default: "100px" },
  maxWidth : { type: String, default: "120px" }
});
</script>

<template>
    <td :style="{ minWidth, maxWidth}">
      <slot></slot>
    </td>
</template>  