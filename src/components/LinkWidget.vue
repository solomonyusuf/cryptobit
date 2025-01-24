<script setup lang="ts">
 
const { title, color, link, margin, onClick } = defineProps({
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
  onClick: {
    type: Function,
    default: null, 
  },
});
</script>

<template>
  <a 
    :href="link"
    :style="{ color, margin }"
    @click="onClick && onClick($event)">  
    {{ title }}
  </a>
</template>
