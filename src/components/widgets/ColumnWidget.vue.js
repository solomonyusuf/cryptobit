const props = defineProps({
    minWidth: { type: String, default: "100px" },
    maxWidth: { type: String, default: "120px" }
});
; /* PartiallyEnd: #3632/scriptSetup.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    let __VLS_components;
    let __VLS_directives;
    ['scrollable-content', 'scrollable-content', 'scrollable-content',];
    // CSS variable injection 
    // CSS variable injection end 
    __VLS_elementAsFunction(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({
        ...{ style: (({ minWidth: __VLS_ctx.minWidth, maxWidth: __VLS_ctx.maxWidth })) },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: (({ 'd-flex': true })) },
        ...{ class: ("scrollable-content") },
    });
    var __VLS_0 = {};
    ['d-flex', 'scrollable-content',];
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
        minWidth: { type: String, default: "100px" },
        maxWidth: { type: String, default: "120px" }
    },
});
const __VLS_component = (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    props: {
        minWidth: { type: String, default: "100px" },
        maxWidth: { type: String, default: "120px" }
    },
    __typeEl: {},
});
export default {};
; /* PartiallyEnd: #4569/main.vue */
