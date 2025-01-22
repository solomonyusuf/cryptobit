<script setup lang="ts">
import { defineProps, defineEmits } from "vue";

const { placeholder, output, height, width, margin } = defineProps({
  placeholder: {
    type: String,
    default: "Enter ....",
  },
  output: {
    type: String,
    default: "Enter ....",
  },
  height: {
    type: String,
    default: "",
  },
  width: {
    type: String,
    default: "",
  },
  margin: {
    type: String,
    default: "0, 1.5rem, 0, 0",
  },
  background: {
    type: String,
    default: "",
  },
  corner: {
    type: String,
    default: "",
  },
   
});
const emit = defineEmits(["update:modelValue"]);

const handleInput = (event: Event) => {
  const input = event.target as HTMLInputElement;
  emit("update:modelValue", input.value);
};
</script>

<template>
    <input  @input="handleInput" :type="output" :style="{ margin, width, height, background, borderRadius:corner}" class="bit-form-control" :placeholder="placeholder">
</template>
<style lang="scss">

.bit-form-control {
    display: block;
    width: 100%;
    padding: 0.4375rem 0.875rem;
    font-size: 0.9375rem;
    font-weight: 400;
    line-height: 1.53;
    color: rgb(251, 249, 249);
    background-color: transparent;
    background-clip: padding-box;
    border: 1px solid #868888;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border-radius: 0.575rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }
</style>