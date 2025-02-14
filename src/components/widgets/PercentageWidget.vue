<script setup lang="ts">

const props = defineProps({
  amount: { type: String, default: "10" },
  color: { type: String, default: 'green' },
});

</script>
<template>
    <strong :style="{color, fontSize:'17px'}">{{ amount }}%</strong>
</template> 