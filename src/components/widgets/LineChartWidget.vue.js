import { onMounted, ref, defineProps } from 'vue';
const props = defineProps({
    labels: { type: Array, default: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] }, // Labels for x-axis
    data: { type: Array, default: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] }, // Data points
    width: { type: String, default: "20vh" },
    height: { type: String, default: "60px" },
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
                            label: '',
                            data: props.data,
                            borderColor: props.lineColor,
                            borderWidth: 2,
                            fill: false,
                            pointBackgroundColor: 'transparent',
                            pointBorderColor: 'transparent',
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
; /* PartiallyEnd: #3632/scriptSetup.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    let __VLS_components;
    let __VLS_directives;
    // CSS variable injection 
    // CSS variable injection end 
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.canvas, __VLS_intrinsicElements.canvas)({
        ref: ("chartRef"),
        ...{ style: (({ maxWidth: __VLS_ctx.width, height: __VLS_ctx.height })) },
    });
    // @ts-ignore navigation for `const chartRef = ref()`
    /** @type { typeof __VLS_ctx.chartRef } */ ;
    var __VLS_slots;
    var $slots;
    let __VLS_inheritedAttrs;
    var $attrs;
    const __VLS_refs = {
        'chartRef': __VLS_nativeElements['canvas'],
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
