<script setup lang="ts">

const props = defineProps({
  content: { type: String, default: "500" },
  color: { type: String, default: '#ebb50b' },
});

</script>
<template>
    <span class="text-capitalize fw-bold" :style="{color}">
        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" focusable="false" class="chakra-icon custom-180tifu" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M349.4 44.6c5.9-13.7 1.5-29.7-10.6-38.5s-28.6-8-39.9 1.8l-256 224c-10 8.8-13.6 22.9-8.9 35.3S50.7 288 64 288H175.5L98.6 467.4c-5.9 13.7-1.5 29.7 10.6 38.5s28.6 8 39.9-1.8l256-224c10-8.8 13.6-22.9 8.9-35.3s-16.6-20.7-30-20.7H272.5L349.4 44.6z"></path>
        </svg>{{ content }}
        </span>
</template> 