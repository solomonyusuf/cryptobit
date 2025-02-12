import { defineProps, defineEmits } from "vue";
const props = defineProps({
    modelValue: Boolean,
    onClick: {
        type: Function,
        default: null,
    },
});
const emit = defineEmits(["update:modelValue"]);
const handleInput = (event) => {
    const input = event.target;
    emit("update:modelValue", input.checked); // Emit the checked state
};
; /* PartiallyEnd: #3632/scriptSetup.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    let __VLS_components;
    let __VLS_directives;
    // CSS variable injection 
    // CSS variable injection end 
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("bit-form-check") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({
        ...{ onInput: (__VLS_ctx.handleInput) },
        ...{ onClick: (...[$event]) => {
                __VLS_ctx.onClick && __VLS_ctx.onClick($event);
            } },
        ...{ class: ("bit-form-check-input") },
        type: ("checkbox"),
        checked: ((__VLS_ctx.modelValue)),
    });
    ['bit-form-check', 'bit-form-check-input',];
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
        modelValue: Boolean,
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
        modelValue: Boolean,
        onClick: {
            type: Function,
            default: null,
        },
    },
    __typeEl: {},
});
; /* PartiallyEnd: #4569/main.vue */
