<script setup lang="ts">
import { computed } from "vue";

const { title, color, weight, variation, margin } = defineProps({
  title: {
    type: String,
    default: "Start Your Journey With a Secured Trading Ways!",
  },
  color: {
    type: String,
    default: "white",
  },
  weight: {
    type: String,
    default: "900",
  },
  variation: {
    type: String,
    default: "h1",
  },
  margin: {
    type: String,
    default: "0, 0, 0, 0",
  },
});

const validTags = ["h1", "h2", "h3", "h4", "h5", "h6" , "p", "span"];
const headerTag = computed(() => (validTags.includes(variation) ? variation : "h1"));
</script>

<template>
  <component
 
    :is="headerTag" 
    :style="{ color, margin, fontWeight: weight }"> 
    {{ title }}
  </component>
</template>
