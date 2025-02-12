const __VLS_props = defineProps({
    title: {
        type: String,
        default: "sign up here",
    },
    color: {
        type: String,
        default: "#164fe8",
    },
    link: {
        type: String,
        default: "https://google.com",
    },
    margin: {
        type: String,
        default: "0, 0, 0, 0",
    },
    onClick: {
        type: Function,
        default: null,
    },
});
const { title, color, link, margin, onClick } = __VLS_props;
; /* PartiallyEnd: #3632/scriptSetup.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    let __VLS_components;
    let __VLS_directives;
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({
        ...{ onClick: (...[$event]) => {
                onClick && onClick($event);
            } },
        href: ((link)),
        ...{ style: (({ color: color, margin: margin })) },
    });
    (title);
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
        title: {
            type: String,
            default: "sign up here",
        },
        color: {
            type: String,
            default: "#164fe8",
        },
        link: {
            type: String,
            default: "https://google.com",
        },
        margin: {
            type: String,
            default: "0, 0, 0, 0",
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
        title: {
            type: String,
            default: "sign up here",
        },
        color: {
            type: String,
            default: "#164fe8",
        },
        link: {
            type: String,
            default: "https://google.com",
        },
        margin: {
            type: String,
            default: "0, 0, 0, 0",
        },
        onClick: {
            type: Function,
            default: null,
        },
    },
    __typeEl: {},
});
; /* PartiallyEnd: #4569/main.vue */
