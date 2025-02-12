const props = defineProps({
    amount: { type: String, default: "10" },
    color: { type: String, default: 'green' },
});
; /* PartiallyEnd: #3632/scriptSetup.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    let __VLS_components;
    let __VLS_directives;
    __VLS_elementAsFunction(__VLS_intrinsicElements.strong, __VLS_intrinsicElements.strong)({
        ...{ style: (({ color: __VLS_ctx.color })) },
    });
    (__VLS_ctx.amount);
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
        amount: { type: String, default: "10" },
        color: { type: String, default: 'green' },
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    props: {
        amount: { type: String, default: "10" },
        color: { type: String, default: 'green' },
    },
    __typeEl: {},
});
; /* PartiallyEnd: #4569/main.vue */
