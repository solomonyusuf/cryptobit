<script setup lang="ts">

const props = defineProps({
  title: { type: String, default: "Cryptocurrency" },
  rounded: { type: Boolean, default: true },
  background: { type: String, default: 'rgba(67, 89, 113, 0.8)' },
  margin: { type: String, default: '' },

});

</script>
<template>
    <span :class="{
      'rounded-pill':rounded
    }" class="badge text-capitalize fw-bold" :style="{background, margin}">{{ title }}</span>
</template> 