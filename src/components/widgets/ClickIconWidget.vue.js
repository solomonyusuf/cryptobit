const props = defineProps({
    icon: { type: String, default: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02LjAwMjUyIDAuNzE5OTcxQzYuMTkyODMgMC43MTk5NzEgNi4zNjY2NCAwLjgyODAwNyA2LjQ1MDg3IDAuOTk4NjU5TDcuODc5NjUgMy44OTMyTDExLjA3NDggNC4zNjAyM0MxMS4yNjMxIDQuMzg3NzUgMTEuNDE5NSA0LjUxOTc1IDExLjQ3ODEgNC43MDA3NUMxMS41MzY4IDQuODgxNzYgMTEuNDg3NyA1LjA4MDM4IDExLjM1MTQgNS4yMTMxNUw5LjAzOTc4IDcuNDY0NjVMOS41ODUzMiAxMC42NDU1QzkuNjE3NSAxMC44MzMgOS41NDAzNyAxMS4wMjI2IDkuMzg2MzggMTEuMTM0NUM5LjIzMjQgMTEuMjQ2NCA5LjAyODI1IDExLjI2MTEgOC44NTk3OSAxMS4xNzI1TDYuMDAyNTIgOS42Njk5TDMuMTQ1MjQgMTEuMTcyNUMyLjk3Njc4IDExLjI2MTEgMi43NzI2NCAxMS4yNDY0IDIuNjE4NjUgMTEuMTM0NUMyLjQ2NDY2IDExLjAyMjYgMi4zODc1NCAxMC44MzMgMi40MTk3MSAxMC42NDU1TDIuOTY1MjYgNy40NjQ2NUwwLjY1MzY1MSA1LjIxMzE1QzAuNTE3MzQyIDUuMDgwMzggMC40NjgyMDUgNC44ODE3NiAwLjUyNjg5NCA0LjcwMDc1QzAuNTg1NTgzIDQuNTE5NzUgMC43NDE5MjMgNC4zODc3NSAwLjkzMDIwMyA0LjM2MDIzTDQuMTI1MzkgMy44OTMyTDUuNTU0MTYgMC45OTg2NTlDNS42Mzg0IDAuODI4MDA3IDUuODEyMjEgMC43MTk5NzEgNi4wMDI1MiAwLjcxOTk3MVoiIGZpbGw9IiNENURBRTAiLz4KPC9zdmc+Cg==" },
    iconStyle: { type: String, default: "height:24px;" },
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
        ...{ class: ("border-0 bg-transparent") },
        onclick: ((__VLS_ctx.onClick)),
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)({
        src: ((__VLS_ctx.icon)),
        ...{ style: ((__VLS_ctx.iconStyle)) },
        ...{ class: ("") },
    });
    ['', 'border-0', 'bg-transparent',];
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
        icon: { type: String, default: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02LjAwMjUyIDAuNzE5OTcxQzYuMTkyODMgMC43MTk5NzEgNi4zNjY2NCAwLjgyODAwNyA2LjQ1MDg3IDAuOTk4NjU5TDcuODc5NjUgMy44OTMyTDExLjA3NDggNC4zNjAyM0MxMS4yNjMxIDQuMzg3NzUgMTEuNDE5NSA0LjUxOTc1IDExLjQ3ODEgNC43MDA3NUMxMS41MzY4IDQuODgxNzYgMTEuNDg3NyA1LjA4MDM4IDExLjM1MTQgNS4yMTMxNUw5LjAzOTc4IDcuNDY0NjVMOS41ODUzMiAxMC42NDU1QzkuNjE3NSAxMC44MzMgOS41NDAzNyAxMS4wMjI2IDkuMzg2MzggMTEuMTM0NUM5LjIzMjQgMTEuMjQ2NCA5LjAyODI1IDExLjI2MTEgOC44NTk3OSAxMS4xNzI1TDYuMDAyNTIgOS42Njk5TDMuMTQ1MjQgMTEuMTcyNUMyLjk3Njc4IDExLjI2MTEgMi43NzI2NCAxMS4yNDY0IDIuNjE4NjUgMTEuMTM0NUMyLjQ2NDY2IDExLjAyMjYgMi4zODc1NCAxMC44MzMgMi40MTk3MSAxMC42NDU1TDIuOTY1MjYgNy40NjQ2NUwwLjY1MzY1MSA1LjIxMzE1QzAuNTE3MzQyIDUuMDgwMzggMC40NjgyMDUgNC44ODE3NiAwLjUyNjg5NCA0LjcwMDc1QzAuNTg1NTgzIDQuNTE5NzUgMC43NDE5MjMgNC4zODc3NSAwLjkzMDIwMyA0LjM2MDIzTDQuMTI1MzkgMy44OTMyTDUuNTU0MTYgMC45OTg2NTlDNS42Mzg0IDAuODI4MDA3IDUuODEyMjEgMC43MTk5NzEgNi4wMDI1MiAwLjcxOTk3MVoiIGZpbGw9IiNENURBRTAiLz4KPC9zdmc+Cg==" },
        iconStyle: { type: String, default: "height:24px;" },
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
        icon: { type: String, default: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02LjAwMjUyIDAuNzE5OTcxQzYuMTkyODMgMC43MTk5NzEgNi4zNjY2NCAwLjgyODAwNyA2LjQ1MDg3IDAuOTk4NjU5TDcuODc5NjUgMy44OTMyTDExLjA3NDggNC4zNjAyM0MxMS4yNjMxIDQuMzg3NzUgMTEuNDE5NSA0LjUxOTc1IDExLjQ3ODEgNC43MDA3NUMxMS41MzY4IDQuODgxNzYgMTEuNDg3NyA1LjA4MDM4IDExLjM1MTQgNS4yMTMxNUw5LjAzOTc4IDcuNDY0NjVMOS41ODUzMiAxMC42NDU1QzkuNjE3NSAxMC44MzMgOS41NDAzNyAxMS4wMjI2IDkuMzg2MzggMTEuMTM0NUM5LjIzMjQgMTEuMjQ2NCA5LjAyODI1IDExLjI2MTEgOC44NTk3OSAxMS4xNzI1TDYuMDAyNTIgOS42Njk5TDMuMTQ1MjQgMTEuMTcyNUMyLjk3Njc4IDExLjI2MTEgMi43NzI2NCAxMS4yNDY0IDIuNjE4NjUgMTEuMTM0NUMyLjQ2NDY2IDExLjAyMjYgMi4zODc1NCAxMC44MzMgMi40MTk3MSAxMC42NDU1TDIuOTY1MjYgNy40NjQ2NUwwLjY1MzY1MSA1LjIxMzE1QzAuNTE3MzQyIDUuMDgwMzggMC40NjgyMDUgNC44ODE3NiAwLjUyNjg5NCA0LjcwMDc1QzAuNTg1NTgzIDQuNTE5NzUgMC43NDE5MjMgNC4zODc3NSAwLjkzMDIwMyA0LjM2MDIzTDQuMTI1MzkgMy44OTMyTDUuNTU0MTYgMC45OTg2NTlDNS42Mzg0IDAuODI4MDA3IDUuODEyMjEgMC43MTk5NzEgNi4wMDI1MiAwLjcxOTk3MVoiIGZpbGw9IiNENURBRTAiLz4KPC9zdmc+Cg==" },
        iconStyle: { type: String, default: "height:24px;" },
        onClick: {
            type: Function,
            default: null,
        },
    },
    __typeEl: {},
});
; /* PartiallyEnd: #4569/main.vue */
