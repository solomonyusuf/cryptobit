<script setup lang="ts">
import { ref, computed } from "vue";

const { src, height, width, margin } = defineProps({
  src: {
    type: String,
    default: "https://via.placeholder.com/800x600",
  },
  height: {
    type: String,
    default: "auto",
  },
  width: {
    type: String,
    default: "100%",
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

const responsive = computed(() => {
  return {
    height,
    width,
    margin,
  };
});
</script>

<template>
  <img :src="src"  
      @click="onClick && onClick($event)" 
      :style="responsive" class="responsive-img" />
</template>

<style lang="scss">

.responsive-img {
  display: block;
  max-width: 100%;
  height: auto;

  @media (min-width: 1200px) {
    width: 70%;
    height: 55vh;
  }

  @media (min-width: 992px) and (max-width: 1199px) {
    width: 80%;
    height: 50vh;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    width: 90%;
    height: 45vh;
  }

  @media (max-width: 767px) {
    width: 100%;
    height: auto;
  }
}
</style>
