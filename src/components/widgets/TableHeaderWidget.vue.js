const props = defineProps({
    image: { type: String, default: 'https://img.icons8.com/?size=100&id=63192&format=png&color=000000' },
    image2: { type: String, default: '' },
    title: { type: String, default: 'Bitcoin' },
    subTitle: { type: String, default: '' },
    symbol: { type: String, default: 'BTC' },
    margin: { type: String, default: '' },
    color: { type: String, default: 'white' },
});
; /* PartiallyEnd: #3632/scriptSetup.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    let __VLS_components;
    let __VLS_directives;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ style: (({ margin: __VLS_ctx.margin })) },
    });
    if (__VLS_ctx.image2) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.img)({
            ...{ class: ("") },
            src: ((__VLS_ctx.image2)),
            ...{ style: ({}) },
        });
    }
    if (__VLS_ctx.image) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.img)({
            ...{ class: (" ") },
            src: ((__VLS_ctx.image)),
            ...{ style: ({}) },
        });
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.strong, __VLS_intrinsicElements.strong)({
        ...{ style: (({ color: __VLS_ctx.color })) },
        ...{ style: ({}) },
        ...{ class: ("px-1") },
    });
    (__VLS_ctx.title);
    __VLS_elementAsFunction(__VLS_intrinsicElements.br)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
        ...{ class: ("text-gray") },
    });
    (__VLS_ctx.subTitle);
    ['', 'px-1', 'text-gray',];
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
        image: { type: String, default: 'https://img.icons8.com/?size=100&id=63192&format=png&color=000000' },
        image2: { type: String, default: '' },
        title: { type: String, default: 'Bitcoin' },
        subTitle: { type: String, default: '' },
        symbol: { type: String, default: 'BTC' },
        margin: { type: String, default: '' },
        color: { type: String, default: 'white' },
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    props: {
        image: { type: String, default: 'https://img.icons8.com/?size=100&id=63192&format=png&color=000000' },
        image2: { type: String, default: '' },
        title: { type: String, default: 'Bitcoin' },
        subTitle: { type: String, default: '' },
        symbol: { type: String, default: 'BTC' },
        margin: { type: String, default: '' },
        color: { type: String, default: 'white' },
    },
    __typeEl: {},
});
; /* PartiallyEnd: #4569/main.vue */
