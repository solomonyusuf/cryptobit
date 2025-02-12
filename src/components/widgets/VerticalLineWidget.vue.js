const props = defineProps({
    color: { type: String, default: 'rgba(67, 89, 113, 0.8)' },
    height: { type: String, default: '40px' },
});
; /* PartiallyEnd: #3632/scriptSetup.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    let __VLS_components;
    let __VLS_directives;
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
        ...{ class: ("fw-bold px-2") },
        ...{ style: (({ color: __VLS_ctx.color, height: __VLS_ctx.height })) },
    });
    ['fw-bold', 'px-2',];
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
        color: { type: String, default: 'rgba(67, 89, 113, 0.8)' },
        height: { type: String, default: '40px' },
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    props: {
        color: { type: String, default: 'rgba(67, 89, 113, 0.8)' },
        height: { type: String, default: '40px' },
    },
    __typeEl: {},
});
; /* PartiallyEnd: #4569/main.vue */
