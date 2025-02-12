const props = defineProps({
    content: { type: String, default: "4h" },
    color: { type: String, default: 'green' },
});
; /* PartiallyEnd: #3632/scriptSetup.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    let __VLS_components;
    let __VLS_directives;
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
        ...{ class: ("text-capitalize px-1 fw-bold") },
        ...{ style: (({ color: __VLS_ctx.color })) },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.svg, __VLS_intrinsicElements.svg)({
        stroke: ("currentColor"),
        fill: ("currentColor"),
        'stroke-width': ("0"),
        viewBox: ("0 0 512 512"),
        focusable: ("false"),
        ...{ class: ("chakra-icon custom-1lqc8qe") },
        height: ("1em"),
        width: ("1em"),
        xmlns: ("http://www.w3.org/2000/svg"),
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.path, __VLS_intrinsicElements.path)({
        d: ("M64 96H0c0 123.7 100.3 224 224 224v144c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V320C288 196.3 187.7 96 64 96zm384-64c-84.2 0-157.4 46.5-195.7 115.2 27.7 30.2 48.2 66.9 59 107.6C424 243.1 512 147.9 512 32h-64z"),
    });
    (__VLS_ctx.content);
    ['text-capitalize', 'px-1', 'fw-bold', 'chakra-icon', 'custom-1lqc8qe',];
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
        return {};
    },
    props: {
        content: { type: String, default: "4h" },
        color: { type: String, default: 'green' },
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    props: {
        content: { type: String, default: "4h" },
        color: { type: String, default: 'green' },
    },
    __typeEl: {},
});
; /* PartiallyEnd: #4569/main.vue */
