<script setup lang="ts">

const props = defineProps({
 
  firstColor: { type: String, default: ["green"] },
  lastColor: { type: String, default: ["green"] },
  amounts: { type: Array, default: [] },
});

</script>
<template>
    <div style="display: flex; flex-direction: column; align-items: center;">
        <strong :style="{color:firstColor}" style="text-align:center;">
        {{ amounts[0] }}
    </strong>
    
    <strong :style="{color:lastColor}" style="text-align:center;">
        {{ amounts[1] }}
    </strong>
    </div>

</template> 