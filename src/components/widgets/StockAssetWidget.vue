<script setup lang="ts">

const props = defineProps({
  image: { type: String, default: 'https://img.icons8.com/?size=100&id=63192&format=png&color=000000' },
  title: { type: String, default: 'Bitcoin' },
  imageHeight: { type: String, default: '30px' },
  subTitle: { type: String, default: '' },
  margin: { type: String, default: '' },
  color: { type: String, default: 'white' },
  subTitleColor: { type: String, default: 'gray' },

  
});

</script>
<template>
  <div :style="{margin}">
    <img v-if="image" class=" " :src="image" :style="{height:imageHeight}" style="border-radius:15px;" />
    <strong :style={color} style="font-size:20px;" class="px-1">{{ title }}</strong> <br/>
    <span :style="{color:subTitleColor}">{{subTitle}}</span>
  </div>
 </template> 