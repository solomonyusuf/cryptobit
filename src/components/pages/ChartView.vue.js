import { ref, onMounted } from "vue";
import CurrencyPairWidget from "../widgets/CurrencyPairWidget.vue";
const sampleData = [
    { time: 1707067200, open: 100, high: 110, low: 95, close: 105 }, // Bullish (Green)
    { time: 1707068100, open: 105, high: 115, low: 102, close: 98 }, // Bearish (Red)
    { time: 1707069000, open: 98, high: 105, low: 90, close: 102 }, // Bullish (Green)
    { time: 1707069900, open: 102, high: 108, low: 95, close: 97 }, // Bearish (Red)
    { time: 1707070800, open: 97, high: 103, low: 92, close: 101 }, // Bullish (Green)
    { time: 1707071700, open: 101, high: 106, low: 96, close: 94 }, // Bearish (Red)
    { time: 1707072600, open: 94, high: 99, low: 90, close: 98 }, // Bullish (Green)
    { time: 1707073500, open: 98, high: 104, low: 95, close: 100 }, // Bullish (Green)
    { time: 1707074400, open: 100, high: 107, low: 98, close: 105 }, // Bullish (Green)
    { time: 1707075300, open: 105, high: 110, low: 100, close: 108 }, // Bullish (Green)
    { time: 1707076200, open: 108, high: 112, low: 106, close: 104 }, // Bearish (Red)
    { time: 1707077100, open: 104, high: 109, low: 102, close: 107 }, // Bullish (Green)
    { time: 1707078000, open: 107, high: 115, low: 105, close: 113 }, // Bullish (Green)
    { time: 1707078900, open: 113, high: 120, low: 110, close: 118 }, // Bullish (Green)
    { time: 1707079800, open: 118, high: 125, low: 115, close: 122 }, // Bullish (Green)
    { time: 1707080700, open: 122, high: 128, low: 120, close: 124 }, // Bullish (Green)
    { time: 1707081600, open: 124, high: 130, low: 122, close: 119 }, // Bearish (Red)
    { time: 1707082500, open: 119, high: 123, low: 115, close: 117 }, // Bearish (Red)
    { time: 1707083400, open: 117, high: 122, low: 113, close: 120 }, // Bullish (Green)
    { time: 1707084300, open: 120, high: 127, low: 119, close: 125 }, // Bullish (Green)
    { time: 1707085200, open: 125, high: 130, low: 120, close: 128 }, // Bullish (Green)
    { time: 1707086100, open: 128, high: 135, low: 125, close: 133 }, // Bullish (Green)
    { time: 1707087000, open: 133, high: 140, low: 130, close: 138 }, // Bullish (Green)
    { time: 1707087900, open: 138, high: 145, low: 135, close: 142 }, // Bullish (Green)
    { time: 1707088800, open: 142, high: 150, low: 140, close: 148 }, // Bullish (Green)
    { time: 1707089700, open: 148, high: 155, low: 145, close: 150 }, // Bullish (Green)
    { time: 1707090600, open: 150, high: 157, low: 148, close: 153 }, // Bullish (Green)
    { time: 1707091500, open: 153, high: 160, low: 150, close: 155 }, // Bullish (Green)
    { time: 1707092400, open: 155, high: 165, low: 152, close: 162 }, // Bullish (Green)
    { time: 1707093300, open: 162, high: 170, low: 160, close: 167 }, // Bullish (Green)
    { time: 1707094200, open: 167, high: 175, low: 165, close: 170 }, // Bullish (Green)
    { time: 1707095100, open: 170, high: 180, low: 168, close: 172 }, // Bullish (Green)
    { time: 1707096000, open: 172, high: 185, low: 170, close: 180 }, // Bullish (Green)
    { time: 1707096900, open: 180, high: 190, low: 175, close: 185 }, // Bullish (Green)
    { time: 1707097800, open: 185, high: 195, low: 180, close: 190 }, // Bullish (Green)
    { time: 1707098700, open: 190, high: 200, low: 185, close: 195 }, // Bullish (Green)
    { time: 1707099600, open: 195, high: 205, low: 190, close: 200 }, // Bullish (Green)
    { time: 1707100500, open: 200, high: 210, low: 195, close: 205 }, // Bullish (Green)
    { time: 1707101400, open: 205, high: 220, low: 200, close: 215 }, // Bullish (Green)
    { time: 1707102300, open: 215, high: 225, low: 210, close: 220 }, // Bullish (Green)
    { time: 1707103200, open: 220, high: 230, low: 215, close: 225 }, // Bullish (Green)
    { time: 1707104100, open: 225, high: 235, low: 220, close: 230 }, // Bullish (Green)
    { time: 1707105000, open: 230, high: 240, low: 225, close: 235 }, // Bullish (Green)
    { time: 1707105900, open: 235, high: 245, low: 230, close: 240 }, // Bullish (Green)
    { time: 1707106800, open: 240, high: 250, low: 235, close: 245 }, // Bullish (Green)
    { time: 1707107700, open: 245, high: 255, low: 240, close: 250 }, // Bullish (Green)
    { time: 1707108600, open: 250, high: 260, low: 245, close: 255 }, // Bullish (Green)
    { time: 1707109500, open: 255, high: 265, low: 250, close: 260 }, // Bullish (Green)
];
; /* PartiallyEnd: #3632/scriptSetup.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    let __VLS_components;
    let __VLS_directives;
    // CSS variable injection 
    // CSS variable injection end 
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
    // @ts-ignore
    /** @type { [typeof CurrencyPairWidget, ] } */ ;
    // @ts-ignore
    const __VLS_0 = __VLS_asFunctionalComponent(CurrencyPairWidget, new CurrencyPairWidget({
        ...{ class: ("bit-md-12") },
        priceData: ((__VLS_ctx.sampleData)),
        theme: ("dark"),
        height: ((500)),
    }));
    const __VLS_1 = __VLS_0({
        ...{ class: ("bit-md-12") },
        priceData: ((__VLS_ctx.sampleData)),
        theme: ("dark"),
        height: ((500)),
    }, ...__VLS_functionalComponentArgsRest(__VLS_0));
    ['bit-md-12',];
    var __VLS_slots;
    var $slots;
    let __VLS_inheritedAttrs;
    var $attrs;
    const __VLS_refs = {};
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
            CurrencyPairWidget: CurrencyPairWidget,
            sampleData: sampleData,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    __typeEl: {},
});
; /* PartiallyEnd: #4569/main.vue */
