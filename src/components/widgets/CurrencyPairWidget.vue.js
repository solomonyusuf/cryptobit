import { ref, onMounted, watch } from "vue";
// Props for price data and chart customization
const props = defineProps({
    priceData: { type: Array, required: true },
    theme: { type: String, default: "dark" },
});
const chartRef = ref(null);
// Load Lightweight Charts script dynamically from CDN
const loadChartScript = () => {
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/lightweight-charts@3.6.0/dist/lightweight-charts.standalone.production.min.js"; // CDN URL
    script.async = true;
    document.head.appendChild(script);
    script.onload = () => initializeChart();
};
// Initialize the chart after script load
const initializeChart = () => {
    if (!chartRef.value || !window.LightweightCharts)
        return;
    // Create the chart
    const chart = window.LightweightCharts.createChart(chartRef.value, {
        width: chartRef.value.clientWidth,
        height: chartRef.value.clientHeight,
        layout: {
            backgroundColor: props.theme === "dark" ? "#222" : "#fff",
            textColor: props.theme === "dark" ? "#fff" : "#222",
        },
        grid: {
            vertLines: { color: props.theme === "dark" ? "#444" : "#eee" },
            horzLines: { color: props.theme === "dark" ? "#444" : "#eee" },
        },
    });
    // Create Candlestick series
    const candlestickSeries = chart.addCandlestickSeries({
        upColor: '#00C853',
        downColor: '#D50000',
        borderUpColor: '#00C853',
        borderDownColor: '#D50000',
        wickUpColor: '#00C853',
        wickDownColor: '#D50000',
    });
    candlestickSeries.setData(props.priceData);
};
// Watch for priceData prop changes and re-initialize chart
watch(() => props.priceData, initializeChart, { deep: true });
onMounted(() => loadChartScript());
; /* PartiallyEnd: #3632/scriptSetup.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    let __VLS_components;
    let __VLS_directives;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ref: ("chartRef"),
        ...{ style: ({}) },
    });
    // @ts-ignore navigation for `const chartRef = ref()`
    /** @type { typeof __VLS_ctx.chartRef } */ ;
    var __VLS_slots;
    var $slots;
    let __VLS_inheritedAttrs;
    var $attrs;
    const __VLS_refs = {
        'chartRef': __VLS_nativeElements['div'],
    };
    var $refs;
    var $el;
    return {
        attrs: {},
        slots: __VLS_slots,
        refs: $refs,
        rootEl: $el,
    };
}
;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            $props: __VLS_makeOptional(props),
            ...props,
            chartRef: chartRef,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {
            $props: __VLS_makeOptional(props),
            ...props,
        };
    },
    __typeRefs: {},
    __typeEl: {},
});
; /* PartiallyEnd: #4569/main.vue */
