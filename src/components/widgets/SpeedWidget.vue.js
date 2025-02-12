const props = defineProps({
    content: { type: String, default: "500" },
    color: { type: String, default: '#ebb50b' },
});
; /* PartiallyEnd: #3632/scriptSetup.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    let __VLS_components;
    let __VLS_directives;
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
        ...{ class: ("text-capitalize fw-bold") },
        ...{ style: (({ color: __VLS_ctx.color })) },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.svg, __VLS_intrinsicElements.svg)({
        stroke: ("currentColor"),
        fill: ("currentColor"),
        'stroke-width': ("0"),
        viewBox: ("0 0 448 512"),
        focusable: ("false"),
        ...{ class: ("chakra-icon custom-180tifu") },
        height: ("1em"),
        width: ("1em"),
        xmlns: ("http://www.w3.org/2000/svg"),
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.path, __VLS_intrinsicElements.path)({
        d: ("M349.4 44.6c5.9-13.7 1.5-29.7-10.6-38.5s-28.6-8-39.9 1.8l-256 224c-10 8.8-13.6 22.9-8.9 35.3S50.7 288 64 288H175.5L98.6 467.4c-5.9 13.7-1.5 29.7 10.6 38.5s28.6 8 39.9-1.8l256-224c10-8.8 13.6-22.9 8.9-35.3s-16.6-20.7-30-20.7H272.5L349.4 44.6z"),
    });
    (__VLS_ctx.content);
    ['text-capitalize', 'fw-bold', 'chakra-icon', 'custom-180tifu',];
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
        content: { type: String, default: "500" },
        color: { type: String, default: '#ebb50b' },
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    props: {
        content: { type: String, default: "500" },
        color: { type: String, default: '#ebb50b' },
    },
    __typeEl: {},
});
; /* PartiallyEnd: #4569/main.vue */
