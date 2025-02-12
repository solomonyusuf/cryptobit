import { defineProps, defineEmits } from "vue";
const __VLS_props = defineProps({
    placeholder: {
        type: String,
        default: "Enter ....",
    },
    output: {
        type: String,
        default: "Enter ....",
    },
    height: {
        type: String,
        default: "",
    },
    width: {
        type: String,
        default: "",
    },
    margin: {
        type: String,
        default: "0, 1.5rem, 0, 0",
    },
    background: {
        type: String,
        default: "",
    },
    corner: {
        type: String,
        default: "",
    },
    onClick: {
        type: Function,
        default: null,
    },
});
const { placeholder, output, height, width, margin } = __VLS_props;
const emit = defineEmits(["update:modelValue"]);
const handleInput = (event) => {
    const input = event.target;
    emit("update:modelValue", input.value);
};
; /* PartiallyEnd: #3632/scriptSetup.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    let __VLS_components;
    let __VLS_directives;
    // CSS variable injection 
    // CSS variable injection end 
    __VLS_elementAsFunction(__VLS_intrinsicElements.input, __VLS_intrinsicElements.input)({
        ...{ onClick: (...[$event]) => {
                __VLS_ctx.onClick && __VLS_ctx.onClick($event);
            } },
        ...{ onInput: (__VLS_ctx.handleInput) },
        type: ((output)),
        ...{ style: (({ margin: margin, width: width, height: height, background: __VLS_ctx.background, borderRadius: __VLS_ctx.corner })) },
        ...{ class: ("bit-form-control") },
        placeholder: ((placeholder)),
    });
    ['bit-form-control',];
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
            handleInput: handleInput,
        };
    },
    emits: {},
    props: {
        placeholder: {
            type: String,
            default: "Enter ....",
        },
        output: {
            type: String,
            default: "Enter ....",
        },
        height: {
            type: String,
            default: "",
        },
        width: {
            type: String,
            default: "",
        },
        margin: {
            type: String,
            default: "0, 1.5rem, 0, 0",
        },
        background: {
            type: String,
            default: "",
        },
        corner: {
            type: String,
            default: "",
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
    emits: {},
    props: {
        placeholder: {
            type: String,
            default: "Enter ....",
        },
        output: {
            type: String,
            default: "Enter ....",
        },
        height: {
            type: String,
            default: "",
        },
        width: {
            type: String,
            default: "",
        },
        margin: {
            type: String,
            default: "0, 1.5rem, 0, 0",
        },
        background: {
            type: String,
            default: "",
        },
        corner: {
            type: String,
            default: "",
        },
        onClick: {
            type: Function,
            default: null,
        },
    },
    __typeEl: {},
});
; /* PartiallyEnd: #4569/main.vue */
