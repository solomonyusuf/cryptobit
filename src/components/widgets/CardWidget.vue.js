import TextWidget from './TextWidget.vue';
import ImageWidget from './ImageWidget.vue';
const __VLS_props = defineProps({
    background: {
        type: String,
        default: "#164fe8",
    },
    corner: {
        type: String,
        default: "0.5rem",
    },
    height: {
        type: String,
        default: "100vh",
    },
    onClick: {
        type: Function,
        default: null,
    },
});
; /* PartiallyEnd: #3632/scriptSetup.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    let __VLS_components;
    let __VLS_directives;
    // CSS variable injection 
    // CSS variable injection end 
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ onClick: (...[$event]) => {
                __VLS_ctx.onClick && __VLS_ctx.onClick($event);
            } },
        ...{ style: (({ background: __VLS_ctx.background, height: __VLS_ctx.height, borderRadius: __VLS_ctx.corner })) },
        ...{ class: ("bit-card bit-col-md-7 bit-col-lg-7 bit-col-sm-12 d-none d-md-block") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("bit-card-body") },
    });
    // @ts-ignore
    /** @type { [typeof TextWidget, ] } */ ;
    // @ts-ignore
    const __VLS_0 = __VLS_asFunctionalComponent(TextWidget, new TextWidget({
        title: ("Start Your Journey With a Secured Trading Ways!"),
        color: ("white"),
        variation: ("h1"),
        margin: (""),
        weight: ("600"),
    }));
    const __VLS_1 = __VLS_0({
        title: ("Start Your Journey With a Secured Trading Ways!"),
        color: ("white"),
        variation: ("h1"),
        margin: (""),
        weight: ("600"),
    }, ...__VLS_functionalComponentArgsRest(__VLS_0));
    // @ts-ignore
    /** @type { [typeof TextWidget, ] } */ ;
    // @ts-ignore
    const __VLS_5 = __VLS_asFunctionalComponent(TextWidget, new TextWidget({
        title: ("Enter the information to know more"),
        color: ("#a39c9c;"),
        variation: ("h3"),
        margin: (""),
        weight: ("500"),
    }));
    const __VLS_6 = __VLS_5({
        title: ("Enter the information to know more"),
        color: ("#a39c9c;"),
        variation: ("h3"),
        margin: (""),
        weight: ("500"),
    }, ...__VLS_functionalComponentArgsRest(__VLS_5));
    // @ts-ignore
    /** @type { [typeof ImageWidget, ] } */ ;
    // @ts-ignore
    const __VLS_10 = __VLS_asFunctionalComponent(ImageWidget, new ImageWidget({
        width: ("75%"),
        src: ("/images/bg1.png"),
    }));
    const __VLS_11 = __VLS_10({
        width: ("75%"),
        src: ("/images/bg1.png"),
    }, ...__VLS_functionalComponentArgsRest(__VLS_10));
    ['bit-card', 'bit-col-md-7', 'bit-col-lg-7', 'bit-col-sm-12', 'd-none', 'd-md-block', 'bit-card-body',];
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
            TextWidget: TextWidget,
            ImageWidget: ImageWidget,
        };
    },
    props: {
        background: {
            type: String,
            default: "#164fe8",
        },
        corner: {
            type: String,
            default: "0.5rem",
        },
        height: {
            type: String,
            default: "100vh",
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
        background: {
            type: String,
            default: "#164fe8",
        },
        corner: {
            type: String,
            default: "0.5rem",
        },
        height: {
            type: String,
            default: "100vh",
        },
        onClick: {
            type: Function,
            default: null,
        },
    },
    __typeEl: {},
});
; /* PartiallyEnd: #4569/main.vue */
