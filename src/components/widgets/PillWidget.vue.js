const props = defineProps({
    title: { type: String, default: "Cryptocurrency" },
    rounded: { type: Boolean, default: true },
    background: { type: String, default: 'rgba(67, 89, 113, 0.8)' },
    margin: { type: String, default: '' },
});
; /* PartiallyEnd: #3632/scriptSetup.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    let __VLS_components;
    let __VLS_directives;
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
        ...{ class: (({
                'rounded-pill': __VLS_ctx.rounded
            })) },
        ...{ class: ("badge text-capitalize fw-bold") },
        ...{ style: (({ background: __VLS_ctx.background, margin: __VLS_ctx.margin })) },
    });
    (__VLS_ctx.title);
    ['rounded-pill', 'badge', 'text-capitalize', 'fw-bold',];
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
        title: { type: String, default: "Cryptocurrency" },
        rounded: { type: Boolean, default: true },
        background: { type: String, default: 'rgba(67, 89, 113, 0.8)' },
        margin: { type: String, default: '' },
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    props: {
        title: { type: String, default: "Cryptocurrency" },
        rounded: { type: Boolean, default: true },
        background: { type: String, default: 'rgba(67, 89, 113, 0.8)' },
        margin: { type: String, default: '' },
    },
    __typeEl: {},
});
; /* PartiallyEnd: #4569/main.vue */
