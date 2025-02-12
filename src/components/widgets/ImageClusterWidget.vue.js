import { computed } from "vue";
const props = defineProps({
    images: { type: Array, default: () => [] },
});
const gridColumns = computed(() => {
    const length = props.images.length;
    if (length <= 3)
        return "grid-cols-3";
    if (length <= 6)
        return "grid-cols-3 md:grid-cols-4";
    return "grid-cols-3 md:grid-cols-5";
});
; /* PartiallyEnd: #3632/scriptSetup.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    let __VLS_components;
    let __VLS_directives;
    // CSS variable injection 
    // CSS variable injection end 
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("grid gap-2") },
        ...{ class: ((__VLS_ctx.gridColumns)) },
    });
    for (const [image, index] of __VLS_getVForSourceType((__VLS_ctx.images))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.img)({
            key: ((index)),
            src: ((image)),
            alt: ("Image"),
            ...{ style: ({}) },
            ...{ class: ("w-full h-auto rounded-md object-cover") },
        });
    }
    ['grid', 'gap-2', 'w-full', 'h-auto', 'rounded-md', 'object-cover',];
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
            gridColumns: gridColumns,
        };
    },
    props: {
        images: { type: Array, default: () => [] },
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    props: {
        images: { type: Array, default: () => [] },
    },
    __typeEl: {},
});
; /* PartiallyEnd: #4569/main.vue */
