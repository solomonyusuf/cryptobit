<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
  images: { type: Array as () => string[], default: () => [] },
});

const gridColumns = computed(() => {
  const length = props.images.length;
  if (length <= 3) return "grid-cols-3";
  if (length <= 6) return "grid-cols-3 md:grid-cols-4";
  return "grid-cols-3 md:grid-cols-5";
});
</script>

<template>
  <div class="grid gap-2" :class="gridColumns">
    <img
      v-for="(image, index) in images"
      :key="index"
      :src="image"
      alt="Image"
      style="border-radius:13px"
      class="w-full h-auto rounded-md object-cover"
    />
  </div>
</template>

<style scoped>
img {
  max-height: 30px;
}
</style>
