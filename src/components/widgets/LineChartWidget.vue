<template>
    <div>
      <canvas ref="chartRef" :style="{width, height}"></canvas>
    </div>
  </template>
  
  <script setup>
  import { onMounted, ref, defineProps } from 'vue';
  
  const props = defineProps({
    labels: Array, // Labels for x-axis
    data: Array, // Data points
    width:{ type: String, default: "200px" },
    height:{ type: String, default: "60px" },
    lineColor: { type: String, default: "rgba(75, 192, 192, 1)" },  
    showGrid: { type: Boolean, default: false },  
    gridColor: { type: String, default: "rgba(200, 200, 200, 0.2)" }  
  });
  
  // Reference for the canvas
  const chartRef = ref(null);
  
  onMounted(() => {
    
    const script = document.createElement('script');
    script.src = "https://cdn.jsdelivr.net/npm/chart.js";
    script.onload = () => {
      if (chartRef.value) {
        const ctx = chartRef.value.getContext('2d');
  
        // Initialize Chart.js
        new Chart(ctx, {
        type: 'line',
        data: {
          labels: props.labels,
          datasets: [
            {
              label: 'Dynamic Dataset',
              data: props.data,
              borderColor: props.lineColor,
              borderWidth: 2,
              fill: false,
              pointBackgroundColor: 'transparent',
              pointBorderColor:  'transparent',  
              pointRadius: 5,  
              pointHoverRadius: 7
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false, // ❌ Hide dataset label (legend)
            },
          },
          scales: {
            x: {
              grid: {
                display: false, // Hide x-axis grid lines (optional)
              },
              ticks: {
                display: false, // ❌ Hide x-axis labels
              },
              border: {
                display: false, // ❌ Hide x-axis line
              },
            },
            y: {
              grid: {
                display: false, // Hide y-axis grid lines (optional)
              },
              ticks: {
                display: false, // ❌ Hide y-axis labels
              },
              border: {
                display: false, // ❌ Hide x-axis line
              },
            },
          },
        },
      });
    }
  };
  
    document.head.appendChild(script);
  });
  </script>
  
  <style scoped>
  canvas {
    background-color: #12161e;
    border: 0;
  }
  </style>
  