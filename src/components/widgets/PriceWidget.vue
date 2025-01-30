<script setup lang="ts">

const props = defineProps({
  amount: { type: String, default: "100,328.99" },
  symbol: { type: String, default: '$' },
});

</script>
<template>
    <strong>{{ symbol }}{{ amount }}</strong>
</template> 