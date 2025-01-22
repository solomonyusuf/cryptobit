<script setup lang="ts">
import { computed } from "vue";

const { src, height, width, margin } = defineProps({
  src: {
    type: String,
    default: "Start Your Journey With a Secured Trading Ways!",
  },
  height: {
    type: Number,
    default: 400,
  },
  width: {
    type: String,
    default: "76.66666667%",
  },
  margin: {
    type: String,
    default: "0, 1.5rem, 0, 0",
  },
});
</script>

<template>
  <img :src="src" :height="height" :width="width" :style="{width, margin }" class="image-widget" />
</template>

<style lang="scss">
 .image-widget{
    flex: 0 0 auto;
  }
</style>
