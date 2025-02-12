import ImageWidget from "./ImageWidget.vue";
const __VLS_props = defineProps({
    title: {
        type: String,
        default: "Google Account",
    },
    background: {
        type: String,
        default: "#164fe8",
    },
    color: {
        type: String,
        default: "white",
    },
    shadow: {
        type: String,
        default: "0 0.125rem 0.25rem 0 rgba(66, 70, 74, 0.4)",
    },
    borderColor: {
        type: String,
        default: "#164fe8",
    },
    image: {
        type: String,
        default: "",
    },
    margin: {
        type: String,
        default: "0 1.5rem 0 0",
    },
    output: {
        type: String,
        default: "button",
    },
    weight: {
        type: String,
        default: "400",
    },
    onClick: {
        type: Function,
        required: false,
    },
});
const { title, color, image, margin, output, background, shadow, borderColor } = __VLS_props;
; /* PartiallyEnd: #3632/scriptSetup.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    let __VLS_components;
    let __VLS_directives;
    // CSS variable injection 
    // CSS variable injection end 
    if (image) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
            ...{ onClick: (...[$event]) => {
                    if (!((image)))
                        return;
                    __VLS_ctx.onClick && __VLS_ctx.onClick();
                } },
            type: ((output)),
            ...{ style: (({
                    color: color,
                    background: background,
                    borderColor: borderColor,
                    fontWeight: __VLS_ctx.weight,
                    boxShadow: shadow,
                    margin: margin,
                })) },
            ...{ class: ("bit-btn bit-w-100 d-flex bit-gap-2") },
        });
        // @ts-ignore
        /** @type { [typeof ImageWidget, ] } */ ;
        // @ts-ignore
        const __VLS_0 = __VLS_asFunctionalComponent(ImageWidget, new ImageWidget({
            src: ((image)),
            height: ("25px"),
            width: ("25px"),
            ...{ class: ("rounded-pill button-image") },
        }));
        const __VLS_1 = __VLS_0({
            src: ((image)),
            height: ("25px"),
            width: ("25px"),
            ...{ class: ("rounded-pill button-image") },
        }, ...__VLS_functionalComponentArgsRest(__VLS_0));
        (title);
    }
    if (!image) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
            ...{ onClick: (...[$event]) => {
                    if (!((!image)))
                        return;
                    __VLS_ctx.onClick && __VLS_ctx.onClick();
                } },
            type: ((output)),
            ...{ style: (({
                    color: color,
                    background: background,
                    borderColor: borderColor,
                    fontWeight: __VLS_ctx.weight,
                    boxShadow: shadow,
                    margin: margin,
                })) },
            ...{ class: ("bit-btn bit-w-100") },
        });
        (title);
    }
    ['bit-btn', 'bit-w-100', 'd-flex', 'bit-gap-2', 'rounded-pill', 'button-image', 'bit-btn', 'bit-w-100',];
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
            ImageWidget: ImageWidget,
        };
    },
    props: {
        title: {
            type: String,
            default: "Google Account",
        },
        background: {
            type: String,
            default: "#164fe8",
        },
        color: {
            type: String,
            default: "white",
        },
        shadow: {
            type: String,
            default: "0 0.125rem 0.25rem 0 rgba(66, 70, 74, 0.4)",
        },
        borderColor: {
            type: String,
            default: "#164fe8",
        },
        image: {
            type: String,
            default: "",
        },
        margin: {
            type: String,
            default: "0 1.5rem 0 0",
        },
        output: {
            type: String,
            default: "button",
        },
        weight: {
            type: String,
            default: "400",
        },
        onClick: {
            type: Function,
            required: false,
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
            default: "Google Account",
        },
        background: {
            type: String,
            default: "#164fe8",
        },
        color: {
            type: String,
            default: "white",
        },
        shadow: {
            type: String,
            default: "0 0.125rem 0.25rem 0 rgba(66, 70, 74, 0.4)",
        },
        borderColor: {
            type: String,
            default: "#164fe8",
        },
        image: {
            type: String,
            default: "",
        },
        margin: {
            type: String,
            default: "0 1.5rem 0 0",
        },
        output: {
            type: String,
            default: "button",
        },
        weight: {
            type: String,
            default: "400",
        },
        onClick: {
            type: Function,
            required: false,
        },
    },
});
; /* PartiallyEnd: #4569/main.vue */
