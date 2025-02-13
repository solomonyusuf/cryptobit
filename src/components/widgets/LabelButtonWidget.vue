<script setup>
import { ref } from "vue";

const selectedTime = ref("5M");
const clicked = ref(false);

const setActive = (value) => {
  selectedTime.value = value;
};

const handleClicked = () => {
  clicked.value = !clicked.value;
};

const props = defineProps({
  image: { type: String, default: "" },
  title: { type: String, default: "" },
  buttons: { type: Array, default: [] },
});
</script>

<template>
  <div class="custom-widget">
    <!-- Trending Header -->
    <div class="custom-header">
       <!-- <svg
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 384 512"
          class="custom-icon"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M216 23.86c0-23.8-30.65-32.77-44.15-13.04C48 191.85 224 200 224 288c0 35.63-29.11 64.46-64.85 63.99-35.17-.45-63.15-29.77-63.15-64.94v-85.51c0-21.7-26.47-32.23-41.43-16.5C27.8 213.16 0 261.33 0 320c0 105.87 86.13 192 192 192s192-86.13 192-192c0-170.29-168-193-168-296.14z"
          ></path>
        </svg> -->
      <a @click="handleClicked" class="custom-title">
        <img :src="props.image" style="height:30px;" />
        <span>{{ props.title }}</span>
      </a>

      <!-- Time Selection Buttons -->
      <div v-if="clicked" class="custom-buttons">
        <button
          v-for="(time, value) in  buttons"
          :key="value"
          :class="{ active: selectedTime === value }"
          @click="setActive(value)"
        >
          {{ time }}
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.d-flex {
  display: flex !important;
}
/* Widget Container */
.custom-widget {
  display: flex;
  align-items: center;
  background: #1a1a1a;
  color: white;
  padding: 10px;
  border-radius: 8px;
  max-width: fit-content;
}

/* Header Section */
.custom-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
  width: 100%;
}

/* Title Section */
.custom-title {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
}

/* Buttons */
.custom-buttons {
  display: flex;
  gap: 8px;
}

.custom-buttons button {
  background: #333;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s;
}

.custom-buttons button.active {
  background: #ff9900;
}

.custom-buttons button:hover {
  background: #555;
}
</style>
