<script setup lang="ts">

const props = defineProps({
  amount: { type: String, default: "100,328.99" },
  symbol: { type: String, default: '$' },
  color: { type: String, default: 'white' },
});

</script>
<template>
    <strong :style="{color,  fontSize:'17px'}" style="text-align:center;">{{ symbol }}{{ amount }}</strong>
</template> 