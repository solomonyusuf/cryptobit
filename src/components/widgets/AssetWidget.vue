<script setup lang="ts">

const props = defineProps({
  image: { type: String, default: 'https://img.icons8.com/?size=100&id=63192&format=png&color=000000' },
  image2: { type: String, default: '' },
  imageHeight: { type: String, default: '40px' },
  title: { type: String, default: '' },
  symbol: { type: String, default: '' },
  margin: { type: String, default: '' },
  color: { type: String, default: 'white' },
  
});

</script>
<template>
  <div :style="{margin}">
    <img v-if="image2" class="" :src="image2" :style="{height:imageHeight}" style="border-radius:15px;" />
    <img v-if="image" class=" " :src="image" :style="{height:imageHeight}" style="border-radius:20px;" />
    <strong class="px-1" :style="{color, fontSize:'17px',}">{{ title }}</strong> <span class="text-gray">{{ symbol }}</span>
  </div>
 </template> 