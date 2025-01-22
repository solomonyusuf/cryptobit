<script setup lang="ts">
import { computed } from "vue";
import ImageWidget from "./ImageWidget.vue";

const { title, color, image, margin, output, background, shadow, borderColor } = defineProps({
  title: {
    type: String,
    default: "Google Account",
  },
  background: {
    type: String,
    default: "#164fe8",
  },
  color: {
    type: String,
    default: "white",
  },
  shadow: {
    type: String,
    default: "0 0.125rem 0.25rem 0 rgba(66, 70, 74, 0.4)",
  },
  borderColor: {
    type: String,
    default: "#164fe8",
  },
  image: {
    type: String,
    default: "/images/google.png",
  },
  margin: {
    type: String,
    default: "0 1.5rem 0 0",
  },
  output: {
    type: String as () => "button" | "submit" | "reset",
    default: "button",
  },
});
</script>

<template>
  <button
    :type="output"
    :style="{
      color,
      background,
      borderColor,
      boxShadow: shadow,
      margin,
    }"
    class="bit-btn bit-w-100 d-flex bit-gap-2"
  >
    <ImageWidget
      :src="image"
      height="25px"
      width="25px"
      class="rounded-pill button-image"
    />
    {{ title }}
  </button>
</template>

<style lang="scss">
.bit-btn {
  display: inline-block;
  font-weight: 400;
  line-height: 1.53;
  color: white;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  user-select: none;
  border: 1px solid transparent;
  padding: 0.4375rem 1.25rem;
  font-size: 0.9375rem;
  border-radius: 0.575rem;
  transition: all 0.2s ease-in-out;
}

.bit-w-100 {
  width: 100% !important;
}

.bit-gap-2 {
  gap: 0.5rem !important;
}

.button-image {
  height: 25px;
}
</style>
