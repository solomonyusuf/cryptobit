<script setup>
import { ref } from "vue";

const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  }, 
  background: {
    type: String,
    required: true,
  },
  border: {
    type: String,
    required: true,
  },
  options: {
    type: Array,
    required: true,
  },
});

const selected = ref("");
</script>

<template>
  <div class="dropdown-wrapper" :style="{ background, border }" style="border-radius: 0.575rem;">
      <img :src="image" alt="icon" class="dropdown-icon" />
      <select v-model="selected" class="form-control  dropdown">
        <option value="" disabled>{{ label }}</option>
        <option v-for="(option, index) in options" :key="index" :value="option">
          {{ option }}
        </option>
      </select>
    </div>
</template>

<style scoped>
.form-control {
  display: block;
  width: 100%;
  padding: 0.4375rem 0.875rem;
  font-size: 0.9375rem;
  font-weight: 400;
  line-height: 1.53;
  color: #fff;
  background-color: transparent;
  background-clip: padding-box;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border:0;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.dropdown-container {
  display: flex;
  align-items: center;
}

.dropdown-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-width: 200px; /* Ensures enough space for the image */
  padding: 5px;
  border-radius: 5px;
}

.dropdown-icon {
  position: absolute;
  left: 10px;
  width: 25px;
  height: 25px;
  top: 50%;
  transform: translateY(-50%); /* Keeps it centered vertically */
  z-index: 1; /* Ensures the image stays above */
}

.dropdown {
  flex-grow: 1;
  padding-left: 50px; /* Space for the image */
  border-radius: 5px;
  background-color: transparent !important; /* Prevents color issues */
}
</style>
