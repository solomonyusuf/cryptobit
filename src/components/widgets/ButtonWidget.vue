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
    default: "",
  },
  margin: {
    type: String,
    default: "0 1.5rem 0 0",
  },
  output: {
    type: String as () => "button" | "submit" | "reset",
    default: "button",
  },
  weight: {
    type: String,
    default: "400",
  },
  onClick: {
    type: Function,
    required: false,
  },
});
</script>

<template>
  <button
    v-if="image"
    :type="output"
    :style="{
      color,
      background,
      borderColor,
      fontWeight: weight,
      boxShadow: shadow,
      margin,
    }"
    @click="onClick && onClick()"
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
  <button
    v-if="!image"
    :type="output"
    :style="{
      color,
      background,
      borderColor,
      fontWeight: weight,
      boxShadow: shadow,
      margin,
    }"
     @click="onClick && onClick()"
    class="bit-btn bit-w-100"
  >
    {{ title }}
  </button>
</template>

<style lang="scss">
.bit-btn {
  display: inline-flex;
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
  justify-content: center;
  align-items: center;
  font-weight: 700;
  text-transform: none;
  gap: 0.5rem;

  /* Add responsive font size and padding */
  @media (max-width: 576px) {
    font-size: 0.8rem;
    padding: 0.375rem 1rem;
    gap: 0.3rem;
  }

  @media (min-width: 577px) and (max-width: 768px) {
    font-size: 0.875rem;
    padding: 0.4rem 1.125rem;
  }

  @media (min-width: 769px) {
    font-size: 1rem;
    padding: 0.4375rem 1.25rem;
  }
}

.rounded-pill {
  border-radius: 50rem !important;
}

.bit-w-100 {
  width: 100% !important;
}

.bit-gap-2 {
  gap: 0.5rem !important;

  @media (max-width: 576px) {
    gap: 0.3rem !important;
  }
}

.button-image {
  height: 25px;
  width: auto;

  @media (max-width: 576px) {
    height: 20px;
  }

  @media (min-width: 577px) and (max-width: 768px) {
    height: 22px;
  }
}

</style>
