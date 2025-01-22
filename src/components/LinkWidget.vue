<script setup lang="ts">
import { computed } from "vue";

const { title, color, link, margin } = defineProps({
  title: {
    type: String,
    default: "sign up here",
  },
  color: {
    type: String,
    default: "#164fe8",
  },
  link: {
    type: String,
    default: "https://google.com",  
  },
  margin: {
    type: String,
    default: "0 1.5rem 0 0", 
  },
});
</script>

<template>
  <a 
    :href="link"
    :style="{ color, margin }"> 
    {{ title }}
  </a>
</template>
