<script setup lang="ts">
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  modelValue: Boolean, 
  onClick: {
    type: Function,
    default: null, 
  },
});

const emit = defineEmits(["update:modelValue"]);

const handleInput = (event: Event) => {
  const input = event.target as HTMLInputElement;
  emit("update:modelValue", input.checked); // Emit the checked state
};
</script>

<template>
    <div class="bit-form-check">
      <input
        class="bit-form-check-input"
        type="checkbox"
        :checked="modelValue"
        @input="handleInput"
        @click="onClick && onClick($event)"
      />
    </div>
  </template>
  

<style lang="scss">
.bit-form-check {
  display: block;
  min-height: 1.434375rem;
  padding-left: 1.7em;
  margin-bottom: 0.125rem;
  border-radius: 0.25em;
}

.bit-form-check .bit-form-check-input {
  float: left;
  margin-left: -1.7em;
}
.bit-form-check-input {
  width: 1.2em;
  height: 1.2em;
  margin-top: 0.165em;
  vertical-align: top;
  background-color: transparent;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  border: 1px solid #d9dee3;
    border-top-color: rgb(217, 222, 227);
    border-right-color: rgb(217, 222, 227);
    border-bottom-color: rgb(217, 222, 227);
    border-left-color: rgb(217, 222, 227);
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border-radius: 0.25em;
  -webkit-print-color-adjust: exact;
  color-adjust: exact;
}

.bit-form-check-input:checked[type="checkbox"] {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M6 10l3 3l6-6'/%3e%3c/svg%3e");
}

.bit-form-check-input:checked {
  background-color: var(--bs-primary);
  border-color: var(--bs-primary);
  box-shadow: 0 2px 4px 0 rgba(105, 108, 255, 0.4);
  border-radius: 0.25em;
}

</style>