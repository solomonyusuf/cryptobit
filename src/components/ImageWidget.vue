<script setup lang="ts">
import { computed } from "vue";

const { src, height, width, margin } = defineProps({
  src: {
    type: String,
    default: "Start Your Journey With a Secured Trading Ways!",
  },
  height: {
    type: String,
    default: "55vh",
  },
  width: {
    type: String,
    default: "70.66666667%",
  },
  margin: {
    type: String,
    default: "0, 1.5rem, 0, 0",
  },
});
</script>

<template>
  <img :src="src" :style="{height, width, margin }" class="bit-sm-col bit-lg-col" />
</template>

<style lang="scss">
 
@mixin size{
    flex: 0 0 auto;
    width: 70.666666%;
    height: 55vh;
}
@media (min-width: 992px) {
  .bit-lg-col {
     @include size;
  }
}
@media (min-width: 768px) {
  .bit-md-col {
    @include size;
  }
}
</style>
