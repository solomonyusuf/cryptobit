import { computed, ref, onMounted, } from 'vue';
import ColumnWidget from './ColumnWidget.vue';
import RowWidget from './RowWidget.vue';
const props = defineProps({
    showTableNumbering: { type: Boolean, default: true },
    showTableBorder: { type: Boolean, default: false },
    showRowBorder: { type: Boolean, default: false },
    showColumnBorder: { type: Boolean, default: true },
    ItemsPerPage: { type: Number, default: 10 },
    title: { type: String, default: 'Assets' },
    width: { type: String, default: '100%' },
    headerColor: { type: String, default: 'white' },
    tableBgColor: { type: String, default: '#12161e' },
    accentBgColor: { type: String, default: 'transparent' },
    stripedColor: { type: String, default: '#697a8d' },
    stripedBg: { type: String, default: '#f9fafb' },
    activeColor: { type: String, default: '#697a8d' },
    activeBg: { type: String, default: 'rgba(67, 89, 113, 0.1)' },
    hoverColor: { type: String, default: '#697a8d' },
    hoverBg: { type: String, default: 'rgba(67, 89, 113, 0.06)' },
    borderColor: { type: String, default: '#fffff' },
    subHeadingColor: { type: String, default: 'gray' },
    border: { type: String, default: '1px solid #1D2330' },
    fontColor: { type: String, default: 'white' },
    onClick: {
        type: Function,
        default: null,
    },
    onGroupAsset: {
        type: Function,
        default: null,
    },
    onDownload: {
        type: Function,
        default: null,
    },
    onSearch: {
        type: Function,
        default: null,
    },
    onDropdown: {
        type: Function,
        default: null,
    },
    activeTab: { type: String, default: 'overview' },
    tabHeader: {
        type: Array,
        default: []
    },
    filters: {
        type: Array,
        default: []
    },
});
const emit = defineEmits([
    "update:activeTab",
    "update:clickedTab",
    "update:currentPage"
]);
const currentTab = ref(props.activeTab);
const clickedTab = computed(() => {
    return props.tabHeader.find(x => x.id === currentTab.value);
});
let tabCount = props.tabHeader.length ?? 0;
const currentPage = ref(1);
let assetCount = computed(() => props.tabHeader[0]?.content?.length ?? 0);
let totalItems = assetCount.value;
const totalPages = computed(() => Math.ceil(totalItems / props.ItemsPerPage));
let startItem = computed(() => (currentPage.value - 1) * props.ItemsPerPage + 1);
let endItem = computed(() => Math.min(currentPage.value * props.ItemsPerPage, assetCount.value));
const activateTab = (tabId) => {
    currentTab.value = tabId;
    let temp = props.tabHeader.find(x => x.id === tabId);
    assetCount = computed(() => temp?.content.length ?? 0);
    emit("update:activeTab", tabId);
    emit("update:clickedTab", temp);
    emit("update:currentPage", 1);
    currentPage.value = 1;
};
const scrollContainer = ref();
const scrollLeft = () => {
    if (scrollContainer.value) {
        scrollContainer.value.scrollBy({ left: -150, behavior: "smooth" });
    }
};
const scrollRight = () => {
    if (scrollContainer.value) {
        scrollContainer.value.scrollBy({ left: 150, behavior: "smooth" });
    }
};
const paginatedItems = computed(() => {
    const start = (currentPage.value - 1) * props.ItemsPerPage;
    return props.tabHeader.find(x => x.id === currentTab.value)?.content.slice(start, start + props.ItemsPerPage) ?? [];
});
const changePage = (page) => {
    if (page > 0 && page <= totalPages.value) {
        currentPage.value = page;
        emit("update:currentPage", page);
    }
};
const tableStyles = computed(() => ({
    title: props.title,
    '--bs-table-bg': props.tableBgColor,
    '--bs-table-accent-bg': props.accentBgColor,
    '--bs-table-striped-color': props.stripedColor,
    '--bs-table-striped-bg': props.stripedBg,
    '--bs-table-active-color': props.activeColor,
    '--bs-table-active-bg': props.activeBg,
    '--bs-table-hover-color': props.hoverColor,
    '--bs-table-hover-bg': props.hoverBg,
    width: props.width,
    marginBottom: '1rem',
    color: props.fontColor,
    verticalAlign: 'middle',
    borderColor: props.borderColor,
}));
onMounted(() => {
    const fontLink = document.createElement("link");
    fontLink.href = "https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap";
    fontLink.rel = "stylesheet";
    document.head.appendChild(fontLink);
});
; /* PartiallyEnd: #3632/scriptSetup.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    let __VLS_components;
    let __VLS_directives;
    // CSS variable injection 
    // CSS variable injection end 
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("px-3 border-1") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({
        ...{ class: ("card-header fw-bold") },
        ...{ style: (({ color: __VLS_ctx.headerColor })) },
    });
    (__VLS_ctx.title);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("mb-3") },
        ...{ style: ({}) },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("row flex-nowrap mb-2  justify-content-start") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("col-md-3 col-sm-6 d-flex align-items-center") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("input-group input-group-merge border-0") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
        ...{ style: (({ background: __VLS_ctx.tableBgColor })) },
        ...{ class: ("input-group-text border-0") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.svg, __VLS_intrinsicElements.svg)({
        xmlns: ("http://www.w3.org/2000/svg"),
        viewBox: ("0 0 24 24"),
        width: ("24"),
        height: ("24"),
        fill: ("currentColor"),
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.circle)({
        cx: ("11"),
        cy: ("11"),
        r: ("8"),
        stroke: ("currentColor"),
        'stroke-width': ("2"),
        fill: ("none"),
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.line)({
        x1: ("16.5"),
        y1: ("16.5"),
        x2: ("22"),
        y2: ("22"),
        stroke: ("currentColor"),
        'stroke-width': ("2"),
        'stroke-linecap': ("round"),
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({
        ...{ onInput: (...[$event]) => {
                __VLS_ctx.onSearch($event);
            } },
        type: ("search"),
        'aria-controls': ("Table"),
        ...{ style: (({ background: __VLS_ctx.tableBgColor })) },
        ...{ class: ("form-control border-0") },
        placeholder: ("Search Assets..."),
    });
    for (const [filter, index] of __VLS_getVForSourceType((__VLS_ctx.filters))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            key: ((index)),
            ...{ class: ("col d-none d-md-block") },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.select, __VLS_intrinsicElements.select)({
            ...{ onChange: (...[$event]) => {
                    __VLS_ctx.onDropdown($event, filter.key);
                } },
            ...{ class: ("form-select border-0") },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({});
        (filter.label);
        for (const [option] of __VLS_getVForSourceType((filter.options))) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({
                key: ((option.value)),
                value: ((option.value)),
            });
            (option.label);
        }
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("card rounded-1 tab-container") },
        ...{ class: (({ 'border': __VLS_ctx.showTableBorder })) },
        ...{ style: (({ border: __VLS_ctx.border, background: __VLS_ctx.tableBgColor })) },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ style: ({}) },
        ...{ class: (" mt-0 d-flex justify-content-between align-items-center") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({
        ref: ("scrollContainer"),
        ...{ class: ("scroll-container nav") },
        ...{ style: (({ color: __VLS_ctx.fontColor })) },
        role: ("tablist"),
    });
    // @ts-ignore navigation for `const scrollContainer = ref()`
    /** @type { typeof __VLS_ctx.scrollContainer } */ ;
    for (const [tab] of __VLS_getVForSourceType((props.tabHeader))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({
            key: ((tab.id)),
            ...{ class: ("nav-item scroll-item") },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({
            ...{ onClick: (...[$event]) => {
                    __VLS_ctx.activateTab(tab.id);
                } },
            href: ("#"),
            ...{ class: ("nav-link mt-3 mb-0 px-0") },
            ...{ style: (({ color: __VLS_ctx.fontColor })) },
            ...{ class: (({ active: __VLS_ctx.currentTab === tab.id })) },
        });
        (tab.label);
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("d-block d-sm-none mt-2 mb-0 d-flex justify-content-between") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
        ...{ onClick: (__VLS_ctx.scrollLeft) },
        ...{ class: ("btn btn-sm btn-primary border rounded-pill") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
        ...{ onClick: (__VLS_ctx.scrollRight) },
        ...{ class: ("btn btn-sm btn-primary border rounded-pill") },
    });
    if (__VLS_ctx.tabCount > 6) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("d-flex d-none d-md-block mb-0 justify-content-between") },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
            ...{ onClick: (__VLS_ctx.scrollLeft) },
            ...{ class: ("btn btn-sm btn-primary border rounded-pill") },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
            ...{ onClick: (__VLS_ctx.scrollRight) },
            ...{ class: ("btn btn-sm btn-primary border rounded-pill") },
        });
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("d-flex gap-2 px-3") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("box px-2 py-3 d-none d-md-block") },
    });
    (__VLS_ctx.assetCount);
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
        ...{ class: ("py-3 d-none d-md-block") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("form-check form-switch py-3 d-none d-md-block") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input, __VLS_intrinsicElements.input)({
        ...{ onInput: (...[$event]) => {
                __VLS_ctx.onGroupAsset($event);
            } },
        ...{ class: ("form-check-input") },
        type: ("checkbox"),
        id: ("flexSwitchCheckDefault"),
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("box2 px-2 py-3") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
        ...{ class: ("border-0 bg-transparent") },
        onclick: ((__VLS_ctx.onDownload)),
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)({
        src: ("/images/download.png"),
        ...{ style: ({}) },
        ...{ class: ("") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("tab-content px-0 py-0") },
    });
    for (const [tab] of __VLS_getVForSourceType((props.tabHeader))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            key: ((tab.id)),
            ...{ class: ("tab-pane") },
            ...{ class: (({ active: __VLS_ctx.currentTab === tab.id })) },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("table-responsive  text-nowrap") },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.table, __VLS_intrinsicElements.table)({
            id: ("Table"),
            ...{ class: ("table table-hover mb-5") },
            ...{ style: ({}) },
            ...{ style: ((__VLS_ctx.tableStyles)) },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.thead, __VLS_intrinsicElements.thead)({
            ...{ class: ("sticky-header") },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.tr, __VLS_intrinsicElements.tr)({
            ...{ style: ({}) },
        });
        if (__VLS_ctx.showTableNumbering) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({});
        }
        for (const [col, index] of __VLS_getVForSourceType((tab.header.columns))) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({
                key: ((index)),
                ...{ style: ({}) },
                ...{ class: (({
                        'sticky-column': col.title.props.title === tab.header.subject,
                        'fw-bold': true,
                        'px-4': true,
                        'py-2': true,
                        'text-capitalize': true,
                        'text-left': true,
                    })) },
            });
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
                ...{ class: ("border-0") },
                ...{ class: (({ 'mb-3': col.title.props.subTitle === '' })) },
            });
            const __VLS_0 = ((col.title.is));
            // @ts-ignore
            const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
                ...(col.title.props),
            }));
            const __VLS_2 = __VLS_1({
                ...(col.title.props),
            }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        }
        __VLS_elementAsFunction(__VLS_intrinsicElements.tbody, __VLS_intrinsicElements.tbody)({});
        for (const [row, index] of __VLS_getVForSourceType((__VLS_ctx.paginatedItems))) {
            // @ts-ignore
            /** @type { [typeof RowWidget, typeof RowWidget, ] } */ ;
            // @ts-ignore
            const __VLS_6 = __VLS_asFunctionalComponent(RowWidget, new RowWidget({
                ...{ class: (({ 'hide-row': !__VLS_ctx.showRowBorder })) },
                key: ((index)),
            }));
            const __VLS_7 = __VLS_6({
                ...{ class: (({ 'hide-row': !__VLS_ctx.showRowBorder })) },
                key: ((index)),
            }, ...__VLS_functionalComponentArgsRest(__VLS_6));
            if (__VLS_ctx.showTableNumbering) {
                // @ts-ignore
                /** @type { [typeof ColumnWidget, typeof ColumnWidget, ] } */ ;
                // @ts-ignore
                const __VLS_11 = __VLS_asFunctionalComponent(ColumnWidget, new ColumnWidget({
                    minWidth: (('50px')),
                    ...{ class: (({
                            'hide-row': !__VLS_ctx.showRowBorder,
                        })) },
                }));
                const __VLS_12 = __VLS_11({
                    minWidth: (('50px')),
                    ...{ class: (({
                            'hide-row': !__VLS_ctx.showRowBorder,
                        })) },
                }, ...__VLS_functionalComponentArgsRest(__VLS_11));
                ((__VLS_ctx.startItem - 1) + index + 1);
                __VLS_15.slots.default;
                var __VLS_15;
            }
            for (const [widget_list, innerkey] of __VLS_getVForSourceType((row))) {
                // @ts-ignore
                /** @type { [typeof ColumnWidget, typeof ColumnWidget, ] } */ ;
                // @ts-ignore
                const __VLS_16 = __VLS_asFunctionalComponent(ColumnWidget, new ColumnWidget({
                    minWidth: ((tab.header.minColumnWidth)),
                    maxWidth: ((tab.header.maxColumnWidth)),
                    ...{ class: (({ 'sticky-column': tab.header?.columns[innerkey]?.title.props.title == tab.header.subject, 'hide-row': !__VLS_ctx.showRowBorder, 'show-side': __VLS_ctx.showColumnBorder })) },
                }));
                const __VLS_17 = __VLS_16({
                    minWidth: ((tab.header.minColumnWidth)),
                    maxWidth: ((tab.header.maxColumnWidth)),
                    ...{ class: (({ 'sticky-column': tab.header?.columns[innerkey]?.title.props.title == tab.header.subject, 'hide-row': !__VLS_ctx.showRowBorder, 'show-side': __VLS_ctx.showColumnBorder })) },
                }, ...__VLS_functionalComponentArgsRest(__VLS_16));
                for (const [widget, colkey] of __VLS_getVForSourceType((widget_list))) {
                    const __VLS_21 = ((widget.is));
                    // @ts-ignore
                    const __VLS_22 = __VLS_asFunctionalComponent(__VLS_21, new __VLS_21({
                        ...(widget.props),
                    }));
                    const __VLS_23 = __VLS_22({
                        ...(widget.props),
                    }, ...__VLS_functionalComponentArgsRest(__VLS_22));
                }
                __VLS_20.slots.default;
                var __VLS_20;
            }
            __VLS_10.slots.default;
            var __VLS_10;
        }
        if (tab.content.length > __VLS_ctx.ItemsPerPage) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
                ...{ class: ("card rounded-1 px-3 py-3") },
                ...{ style: (({ background: __VLS_ctx.tableBgColor })) },
            });
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
                ...{ class: ("pagination-container") },
            });
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
                ...{ class: ("pagination-info") },
            });
            (__VLS_ctx.startItem);
            (__VLS_ctx.endItem);
            (__VLS_ctx.assetCount);
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
                ...{ class: ("pagination-buttons") },
            });
            __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
                ...{ onClick: (...[$event]) => {
                        if (!((tab.content.length > __VLS_ctx.ItemsPerPage)))
                            return;
                        __VLS_ctx.changePage(__VLS_ctx.currentPage - 1);
                    } },
                disabled: ((__VLS_ctx.currentPage === 1)),
            });
            for (const [page] of __VLS_getVForSourceType((__VLS_ctx.totalPages))) {
                __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
                    key: ((page)),
                });
                __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
                    ...{ onClick: (...[$event]) => {
                            if (!((tab.content.length > __VLS_ctx.ItemsPerPage)))
                                return;
                            __VLS_ctx.changePage(page);
                        } },
                    ...{ class: (({ active: __VLS_ctx.currentPage === page })) },
                });
                (page);
            }
            __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
                ...{ onClick: (...[$event]) => {
                        if (!((tab.content.length > __VLS_ctx.ItemsPerPage)))
                            return;
                        __VLS_ctx.changePage(__VLS_ctx.currentPage + 1);
                    } },
                disabled: ((__VLS_ctx.currentPage === __VLS_ctx.totalPages)),
            });
        }
    }
    ['', 'px-3', 'border-1', 'card-header', 'fw-bold', 'mb-3', 'row', 'flex-nowrap', 'mb-2', 'justify-content-start', 'col-md-3', 'col-sm-6', 'd-flex', 'align-items-center', 'input-group', 'input-group-merge', 'border-0', 'input-group-text', 'border-0', 'form-control', 'border-0', 'col', 'd-none', 'd-md-block', 'form-select', 'border-0', 'card', 'rounded-1', 'tab-container', 'border', 'mt-0', 'd-flex', 'justify-content-between', 'align-items-center', 'scroll-container', 'nav', 'nav-item', 'scroll-item', 'nav-link', 'mt-3', 'mb-0', 'px-0', 'active', 'd-block', 'd-sm-none', 'mt-2', 'mb-0', 'd-flex', 'justify-content-between', 'btn', 'btn-sm', 'btn-primary', 'border', 'rounded-pill', 'btn', 'btn-sm', 'btn-primary', 'border', 'rounded-pill', 'd-flex', 'd-none', 'd-md-block', 'mb-0', 'justify-content-between', 'btn', 'btn-sm', 'btn-primary', 'border', 'rounded-pill', 'btn', 'btn-sm', 'btn-primary', 'border', 'rounded-pill', 'd-flex', 'gap-2', 'px-3', 'box', 'px-2', 'py-3', 'd-none', 'd-md-block', 'py-3', 'd-none', 'd-md-block', 'form-check', 'form-switch', 'py-3', 'd-none', 'd-md-block', 'form-check-input', 'box2', 'px-2', 'py-3', 'border-0', 'bg-transparent', 'tab-content', 'px-0', 'py-0', 'tab-pane', 'active', 'table-responsive', 'text-nowrap', 'table', 'table-hover', 'mb-5', 'sticky-header', 'sticky-column', 'fw-bold', 'px-4', 'py-2', 'text-capitalize', 'text-left', 'border-0', 'mb-3', 'hide-row', 'hide-row', 'sticky-column', 'hide-row', 'show-side', 'card', 'rounded-1', 'px-3', 'py-3', 'pagination-container', 'pagination-info', 'pagination-buttons', 'active',];
    var __VLS_slots;
    var $slots;
    let __VLS_inheritedAttrs;
    var $attrs;
    const __VLS_refs = {
        'scrollContainer': __VLS_nativeElements['ul'],
    };
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
            ColumnWidget: ColumnWidget,
            RowWidget: RowWidget,
            currentTab: currentTab,
            tabCount: tabCount,
            currentPage: currentPage,
            assetCount: assetCount,
            totalPages: totalPages,
            startItem: startItem,
            endItem: endItem,
            activateTab: activateTab,
            scrollContainer: scrollContainer,
            scrollLeft: scrollLeft,
            scrollRight: scrollRight,
            paginatedItems: paginatedItems,
            changePage: changePage,
            tableStyles: tableStyles,
        };
    },
    emits: {},
    props: {
        showTableNumbering: { type: Boolean, default: true },
        showTableBorder: { type: Boolean, default: false },
        showRowBorder: { type: Boolean, default: false },
        showColumnBorder: { type: Boolean, default: true },
        ItemsPerPage: { type: Number, default: 10 },
        title: { type: String, default: 'Assets' },
        width: { type: String, default: '100%' },
        headerColor: { type: String, default: 'white' },
        tableBgColor: { type: String, default: '#12161e' },
        accentBgColor: { type: String, default: 'transparent' },
        stripedColor: { type: String, default: '#697a8d' },
        stripedBg: { type: String, default: '#f9fafb' },
        activeColor: { type: String, default: '#697a8d' },
        activeBg: { type: String, default: 'rgba(67, 89, 113, 0.1)' },
        hoverColor: { type: String, default: '#697a8d' },
        hoverBg: { type: String, default: 'rgba(67, 89, 113, 0.06)' },
        borderColor: { type: String, default: '#fffff' },
        subHeadingColor: { type: String, default: 'gray' },
        border: { type: String, default: '1px solid #1D2330' },
        fontColor: { type: String, default: 'white' },
        onClick: {
            type: Function,
            default: null,
        },
        onGroupAsset: {
            type: Function,
            default: null,
        },
        onDownload: {
            type: Function,
            default: null,
        },
        onSearch: {
            type: Function,
            default: null,
        },
        onDropdown: {
            type: Function,
            default: null,
        },
        activeTab: { type: String, default: 'overview' },
        tabHeader: {
            type: Array,
            default: []
        },
        filters: {
            type: Array,
            default: []
        },
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    emits: {},
    props: {
        showTableNumbering: { type: Boolean, default: true },
        showTableBorder: { type: Boolean, default: false },
        showRowBorder: { type: Boolean, default: false },
        showColumnBorder: { type: Boolean, default: true },
        ItemsPerPage: { type: Number, default: 10 },
        title: { type: String, default: 'Assets' },
        width: { type: String, default: '100%' },
        headerColor: { type: String, default: 'white' },
        tableBgColor: { type: String, default: '#12161e' },
        accentBgColor: { type: String, default: 'transparent' },
        stripedColor: { type: String, default: '#697a8d' },
        stripedBg: { type: String, default: '#f9fafb' },
        activeColor: { type: String, default: '#697a8d' },
        activeBg: { type: String, default: 'rgba(67, 89, 113, 0.1)' },
        hoverColor: { type: String, default: '#697a8d' },
        hoverBg: { type: String, default: 'rgba(67, 89, 113, 0.06)' },
        borderColor: { type: String, default: '#fffff' },
        subHeadingColor: { type: String, default: 'gray' },
        border: { type: String, default: '1px solid #1D2330' },
        fontColor: { type: String, default: 'white' },
        onClick: {
            type: Function,
            default: null,
        },
        onGroupAsset: {
            type: Function,
            default: null,
        },
        onDownload: {
            type: Function,
            default: null,
        },
        onSearch: {
            type: Function,
            default: null,
        },
        onDropdown: {
            type: Function,
            default: null,
        },
        activeTab: { type: String, default: 'overview' },
        tabHeader: {
            type: Array,
            default: []
        },
        filters: {
            type: Array,
            default: []
        },
    },
    __typeRefs: {},
    __typeEl: {},
});
; /* PartiallyEnd: #4569/main.vue */
