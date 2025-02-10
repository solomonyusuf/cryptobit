<script setup lang="ts">

const props = defineProps({
  image: { type: String, default: 'https://img.icons8.com/?size=100&id=63192&format=png&color=000000' },
  image2: { type: String, default: '' },
  title: { type: String, default: 'Bitcoin' },
  symbol: { type: String, default: 'BTC' },

});

</script>
<template class="d-none">
    <img v-if="image2" class="" :src="image2" style="height:30px;border-radius:15px;" />
    <img v-if="image" class=" " :src="image" style="height:30px;border-radius:15px;" />
    <strong class="px-2">{{ title }}</strong> <span class="text-gray">{{ symbol }}</span>
</template> 