<script setup lang="ts">

const props = defineProps({
  title: { type: String, default: "Cryptocurrency" },
  background: { type: String, default: 'rgba(67, 89, 113, 0.8)' },
});

</script>
<template>
    <span class="badge rounded-pill text-capitalize fw-bold" :style="{background}">{{ title }}</span>
</template> 