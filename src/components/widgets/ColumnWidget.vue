<script setup lang="ts">
import { computed, ref, onMounted } from 'vue';

const props = defineProps({
  minWidth : { type: String, default: "100px" },
  maxWidth : { type: String, default: "120px" }
});
</script>

<template>
    <td :style="{ minWidth, maxWidth }">
      <div :class="{'d-flex':true}" class="scrollable-content">
        <slot></slot>
      </div>
    </td>
</template>  
<style scoped>
.scrollable-content {
  overflow-x: auto;
  
  max-width: 100%;
  
  /* Custom Scrollbar */
  scrollbar-width: thin; /* For Firefox */
  scrollbar-color: #ccc transparent; /* Track color */
}

/* Webkit Browsers (Chrome, Edge, Safari) */
.scrollable-content::-webkit-scrollbar {
  height: 2px; /* Thin scrollbar */
}

.scrollable-content::-webkit-scrollbar-thumb {
  background: #888; /* Scroll thumb color */
  border-radius: 3px;
}

.scrollable-content::-webkit-scrollbar-thumb:hover {
  background: #555; /* Darker color on hover */
}
</style>