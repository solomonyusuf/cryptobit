<script setup>
import { ref, onMounted } from "vue";
import CurrencyPairWidget from "../widgets/CurrencyPairWidget.vue";

const sampleData = [
  { time: 1707067200, open: 100, high: 110, low: 95, close: 105 },
  { time: 1707068100, open: 105, high: 115, low: 102, close: 110 },
  { time: 1707069000, open: 110, high: 120, low: 108, close: 118 },
];


</script>

<template>
  <div>
    <h2>Live Trading Chart</h2>
    <CurrencyPairWidget :priceData="sampleData" theme="dark" :width="800" :height="500" />
  </div>
</template>
