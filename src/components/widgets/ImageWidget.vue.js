import { computed } from "vue";
const __VLS_props = defineProps({
    src: {
        type: String,
        default: "https://via.placeholder.com/800x600",
    },
    height: {
        type: String,
        default: "auto",
    },
    width: {
        type: String,
        default: "100%",
    },
    margin: {
        type: String,
        default: "0 1.5rem 0 0",
    },
    onClick: {
        type: Function,
        default: null,
    },
});
const { src, height, width, margin } = __VLS_props;
const responsive = computed(() => {
    return {
        height,
        width,
        margin,
    };
});
; /* PartiallyEnd: #3632/scriptSetup.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    let __VLS_components;
    let __VLS_directives;
    // CSS variable injection 
    // CSS variable injection end 
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({
        ...{ onClick: (...[$event]) => {
                __VLS_ctx.onClick && __VLS_ctx.onClick($event);
            } },
        src: ((src)),
        ...{ style: ((__VLS_ctx.responsive)) },
        ...{ class: ("responsive-img") },
    });
    ['responsive-img',];
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
            responsive: responsive,
        };
    },
    props: {
        src: {
            type: String,
            default: "https://via.placeholder.com/800x600",
        },
        height: {
            type: String,
            default: "auto",
        },
        width: {
            type: String,
            default: "100%",
        },
        margin: {
            type: String,
            default: "0 1.5rem 0 0",
        },
        onClick: {
            type: Function,
            default: null,
        },
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    props: {
        src: {
            type: String,
            default: "https://via.placeholder.com/800x600",
        },
        height: {
            type: String,
            default: "auto",
        },
        width: {
            type: String,
            default: "100%",
        },
        margin: {
            type: String,
            default: "0 1.5rem 0 0",
        },
        onClick: {
            type: Function,
            default: null,
        },
    },
    __typeEl: {},
});
; /* PartiallyEnd: #4569/main.vue */
