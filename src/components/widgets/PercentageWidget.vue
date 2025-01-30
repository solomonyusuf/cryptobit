<script setup lang="ts">

const props = defineProps({
  amount: { type: String, default: "10" },
  color: { type: String, default: 'green' },
});

</script>
<template>
    <strong :style="{color}">{{ amount }}%</strong>
</template> 