<script setup>
import { ref, onMounted, watch } from "vue";

const props = defineProps({
  priceData: { type: Array, required: true }, // [{ time, open, high, low, close }]
  theme: { type: String, default: "dark" }, // Theme support
});

const chartRef = ref(null);

const loadChartScripts = (callback) => {
  if (window.Plotly) {
    callback();
    return;
  }

  const script = document.createElement("script");
  script.src = "https://cdn.plot.ly/plotly-latest.min.js"; // Load Plotly
  script.async = true;
  script.onload = callback;
  document.head.appendChild(script);
};

const initializeChart = () => {
  if (!chartRef.value || !window.Plotly) return;

  const timeSeries = props.priceData.map((d) => new Date(d.time * 1000));
  const open = props.priceData.map((d) => d.open);
  const high = props.priceData.map((d) => d.high);
  const low = props.priceData.map((d) => d.low);
  const close = props.priceData.map((d) => d.close);

  const candlestickTrace = {
    x: timeSeries,
    close: close,
    high: high,
    low: low,
    open: open,
    type: "candlestick",
    name: "Price",
    increasing: { 
      line: { color: "#00C853" }, // Solid Green Border
      fillcolor: "#00C853" // Solid Green Fill
    },
    decreasing: { 
      line: { color: "#D50000" }, // Solid Red Border
      fillcolor: "#D50000" // Solid Red Fill
    }
  };

  const layout = {
    title: "Candlestick Chart",
    xaxis: { rangeslider: { visible: false } },
    yaxis: { title: "Price" },
    plot_bgcolor: props.theme === "dark" ? "#222" : "#fff",
    paper_bgcolor: props.theme === "dark" ? "#222" : "#fff",
    font: { color: props.theme === "dark" ? "#fff" : "#222" },
  };

  Plotly.newPlot(chartRef.value, [candlestickTrace], layout);
};

watch(() => props.priceData, initializeChart, { deep: true });
onMounted(() => loadChartScripts(initializeChart));
</script>

<template>
  <div ref="chartRef" style="height: 700px; width: 100%;"></div>
</template>
