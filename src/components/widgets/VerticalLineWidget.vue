<script setup lang="ts">

const props = defineProps({
  color: { type: String, default: 'rgba(67, 89, 113, 0.8)' },
  height: { type: String, default: '40px' },
});

</script>
<template>
    <span class="fw-bold px-2" :style="{color, height}">|</span>
</template> 