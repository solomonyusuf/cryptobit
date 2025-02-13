<script setup>
import { ref } from "vue";

const selectedTime = ref("trending:m5");

const setActive = (value) => {
  selectedTime.value = value;
};
</script>

<template>
  <div class="custom-widget">
    <!-- Trending Header -->
    <div class="custom-header">
      <div class="custom-title">
        <svg
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
        </svg>
        <span>Trending</span>
        <a
          target="_blank"
          class="custom-link"
          href="https://docs.dexscreener.com/trending"
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 512 512"
            class="custom-icon"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"
            ></path>
          </svg>
        </a>
      </div>

      <!-- Time Selection Buttons -->
      <div class="custom-buttons">
        <button
          v-for="(time, value) in { '5M': 'm5', '1H': 'h1', '6H': 'h6', '24H': 'h24' }"
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
}

/* Icons */
.custom-icon {
  width: 18px;
  height: 18px;
}

/* Link Styling */
.custom-link {
  color: white;
  text-decoration: none;
  transition: opacity 0.3s ease;
}

.custom-link:hover {
  opacity: 0.7;
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
