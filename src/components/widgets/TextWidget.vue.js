import { computed } from "vue";
const __VLS_props = defineProps({
    title: {
        type: String,
        default: "Start Your Journey With a Secured Trading Ways!",
    },
    color: {
        type: String,
        default: "white",
    },
    weight: {
        type: String,
        default: "900",
    },
    variation: {
        type: String,
        default: "h1",
    },
    margin: {
        type: String,
        default: "0, 0, 0, 0",
    },
});
const { title, color, weight, variation, margin } = __VLS_props;
const validTags = ["h1", "h2", "h3", "h4", "h5", "h6", "p", "span"];
const headerTag = computed(() => (validTags.includes(variation) ? variation : "h1"));
; /* PartiallyEnd: #3632/scriptSetup.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    let __VLS_components;
    let __VLS_directives;
    const __VLS_0 = ((__VLS_ctx.headerTag));
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
        ...{ style: (({ color: color, margin: margin, fontWeight: weight })) },
    }));
    const __VLS_2 = __VLS_1({
        ...{ style: (({ color: color, margin: margin, fontWeight: weight })) },
    }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    var __VLS_6 = {};
    (title);
    __VLS_5.slots.default;
    var __VLS_5;
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
            headerTag: headerTag,
        };
    },
    props: {
        title: {
            type: String,
            default: "Start Your Journey With a Secured Trading Ways!",
        },
        color: {
            type: String,
            default: "white",
        },
        weight: {
            type: String,
            default: "900",
        },
        variation: {
            type: String,
            default: "h1",
        },
        margin: {
            type: String,
            default: "0, 0, 0, 0",
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
            default: "Start Your Journey With a Secured Trading Ways!",
        },
        color: {
            type: String,
            default: "white",
        },
        weight: {
            type: String,
            default: "900",
        },
        variation: {
            type: String,
            default: "h1",
        },
        margin: {
            type: String,
            default: "0, 0, 0, 0",
        },
    },
    __typeEl: {},
});
; /* PartiallyEnd: #4569/main.vue */
