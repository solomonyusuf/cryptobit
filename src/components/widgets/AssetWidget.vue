<script setup lang="ts">

const props = defineProps({
  image: { type: String, default: 'https://img.icons8.com/?size=100&id=63192&format=png&color=000000' },
  title: { type: String, default: 'Bitcoin' },
  symbol: { type: String, default: 'BTC' },
});

</script>
<template>
    <img v-if="image" class="px-2" :src="image" style="height:30px;border-radius:15px;" />
    <strong>{{ title }}</strong>({{ symbol }})
</template> 