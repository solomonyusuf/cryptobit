import ButtonWidget from '../widgets/ButtonWidget.vue';
import CardWidget from '../widgets/CardWidget.vue';
import InputCheckbox from '../widgets/InputCheckbox.vue';
import InputWidget from '../widgets/InputWidget.vue';
import LinkWidget from '../widgets/LinkWidget.vue';
import TextWidget from '../widgets/TextWidget.vue';
import { ref } from "vue";
const checkbox = ref(false);
const password = ref("");
const handleSubmit = () => {
    console.log("Password entered:", password.value);
    console.log("Checkbox clicked:", checkbox.value);
};
const handleCard = () => {
    alert("Card clicked!");
};
const handleGoogle = () => {
    alert("Button clicked!");
};
const handleMetamask = () => {
    alert("Button clicked!");
};
const handleCoinbase = () => {
    alert("Button clicked!");
};
; /* PartiallyEnd: #3632/scriptSetup.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    let __VLS_components;
    let __VLS_directives;
    // CSS variable injection 
    // CSS variable injection end 
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("layout-container") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("content-wrapper") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("container-xxl bit-mt-4 bit-mb-4") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("bit-row bit-justify-content-center") },
    });
    // @ts-ignore
    /** @type { [typeof CardWidget, ] } */ ;
    // @ts-ignore
    const __VLS_0 = __VLS_asFunctionalComponent(CardWidget, new CardWidget({
        height: ("100vh"),
        background: ("#164fe8"),
        onClick: ((__VLS_ctx.handleCard)),
    }));
    const __VLS_1 = __VLS_0({
        height: ("100vh"),
        background: ("#164fe8"),
        onClick: ((__VLS_ctx.handleCard)),
    }, ...__VLS_functionalComponentArgsRest(__VLS_0));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("bit-col-md-5 bit-col-lg-5 bit-col-sm-12") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("bit-row bit-justify-content-center") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("bit-px-2 bit-mt-4 bit-mb-4") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.form, __VLS_intrinsicElements.form)({
        ...{ onSubmit: (__VLS_ctx.handleSubmit) },
        ...{ class: ("bit-mt-4 mobile-form") },
    });
    // @ts-ignore
    /** @type { [typeof TextWidget, ] } */ ;
    // @ts-ignore
    const __VLS_5 = __VLS_asFunctionalComponent(TextWidget, new TextWidget({
        title: ("Login To Access"),
        variation: ("h3"),
    }));
    const __VLS_6 = __VLS_5({
        title: ("Login To Access"),
        variation: ("h3"),
    }, ...__VLS_functionalComponentArgsRest(__VLS_5));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("d-flex align-center bit-gap-2") },
    });
    // @ts-ignore
    /** @type { [typeof TextWidget, ] } */ ;
    // @ts-ignore
    const __VLS_10 = __VLS_asFunctionalComponent(TextWidget, new TextWidget({
        title: ("Don't have an account?"),
        variation: ("span"),
        weight: ("400"),
        color: (""),
    }));
    const __VLS_11 = __VLS_10({
        title: ("Don't have an account?"),
        variation: ("span"),
        weight: ("400"),
        color: (""),
    }, ...__VLS_functionalComponentArgsRest(__VLS_10));
    // @ts-ignore
    /** @type { [typeof LinkWidget, ] } */ ;
    // @ts-ignore
    const __VLS_15 = __VLS_asFunctionalComponent(LinkWidget, new LinkWidget({
        title: ("sign up here"),
        link: ("google.com"),
        color: ("#164fe8"),
    }));
    const __VLS_16 = __VLS_15({
        title: ("sign up here"),
        link: ("google.com"),
        color: ("#164fe8"),
    }, ...__VLS_functionalComponentArgsRest(__VLS_15));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("bit-mb-3") },
    });
    // @ts-ignore
    /** @type { [typeof ButtonWidget, ] } */ ;
    // @ts-ignore
    const __VLS_20 = __VLS_asFunctionalComponent(ButtonWidget, new ButtonWidget({
        output: ("button"),
        onClick: ((__VLS_ctx.handleGoogle)),
        background: ("#1b1c20"),
        title: ("Google Account"),
        shadow: ("0 0.125rem 0.25rem 0 rgba(66, 70, 74, 0.4)"),
        image: ("/images/google.png"),
        margin: ("0.5rem"),
        weight: ("700"),
    }));
    const __VLS_21 = __VLS_20({
        output: ("button"),
        onClick: ((__VLS_ctx.handleGoogle)),
        background: ("#1b1c20"),
        title: ("Google Account"),
        shadow: ("0 0.125rem 0.25rem 0 rgba(66, 70, 74, 0.4)"),
        image: ("/images/google.png"),
        margin: ("0.5rem"),
        weight: ("700"),
    }, ...__VLS_functionalComponentArgsRest(__VLS_20));
    // @ts-ignore
    /** @type { [typeof ButtonWidget, ] } */ ;
    // @ts-ignore
    const __VLS_25 = __VLS_asFunctionalComponent(ButtonWidget, new ButtonWidget({
        output: ("button"),
        onClick: ((__VLS_ctx.handleMetamask)),
        image: ("/images/metamask.png"),
        title: ("Metamask Wallet"),
        background: ("#1b1c20"),
        margin: ("0.5rem"),
        weight: ("700"),
    }));
    const __VLS_26 = __VLS_25({
        output: ("button"),
        onClick: ((__VLS_ctx.handleMetamask)),
        image: ("/images/metamask.png"),
        title: ("Metamask Wallet"),
        background: ("#1b1c20"),
        margin: ("0.5rem"),
        weight: ("700"),
    }, ...__VLS_functionalComponentArgsRest(__VLS_25));
    // @ts-ignore
    /** @type { [typeof ButtonWidget, ] } */ ;
    // @ts-ignore
    const __VLS_30 = __VLS_asFunctionalComponent(ButtonWidget, new ButtonWidget({
        output: ("button"),
        onClick: ((__VLS_ctx.handleCoinbase)),
        image: ("/images/coinbase.png"),
        title: ("Coinbase Wallet"),
        background: ("#1b1c20"),
        margin: ("0.5rem"),
        weight: ("700"),
    }));
    const __VLS_31 = __VLS_30({
        output: ("button"),
        onClick: ((__VLS_ctx.handleCoinbase)),
        image: ("/images/coinbase.png"),
        title: ("Coinbase Wallet"),
        background: ("#1b1c20"),
        margin: ("0.5rem"),
        weight: ("700"),
    }, ...__VLS_functionalComponentArgsRest(__VLS_30));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("divider bit-mb-3") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("divider-text") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("bit-mb-3") },
    });
    // @ts-ignore
    /** @type { [typeof InputWidget, ] } */ ;
    // @ts-ignore
    const __VLS_35 = __VLS_asFunctionalComponent(InputWidget, new InputWidget({
        placeholder: ("Enter your email"),
    }));
    const __VLS_36 = __VLS_35({
        placeholder: ("Enter your email"),
    }, ...__VLS_functionalComponentArgsRest(__VLS_35));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("bit-mb-3") },
    });
    // @ts-ignore
    /** @type { [typeof InputWidget, ] } */ ;
    // @ts-ignore
    const __VLS_40 = __VLS_asFunctionalComponent(InputWidget, new InputWidget({
        modelValue: ((__VLS_ctx.password)),
        output: ("password"),
        placeholder: ("Enter Your Password"),
    }));
    const __VLS_41 = __VLS_40({
        modelValue: ((__VLS_ctx.password)),
        output: ("password"),
        placeholder: ("Enter Your Password"),
    }, ...__VLS_functionalComponentArgsRest(__VLS_40));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("bit-mb-3") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("d-flex align-center bit-gap-2") },
    });
    // @ts-ignore
    /** @type { [typeof InputCheckbox, ] } */ ;
    // @ts-ignore
    const __VLS_45 = __VLS_asFunctionalComponent(InputCheckbox, new InputCheckbox({
        modelValue: ((__VLS_ctx.checkbox)),
        margin: ("0"),
    }));
    const __VLS_46 = __VLS_45({
        modelValue: ((__VLS_ctx.checkbox)),
        margin: ("0"),
    }, ...__VLS_functionalComponentArgsRest(__VLS_45));
    // @ts-ignore
    /** @type { [typeof TextWidget, ] } */ ;
    // @ts-ignore
    const __VLS_50 = __VLS_asFunctionalComponent(TextWidget, new TextWidget({
        title: (" I agree to the"),
        variation: ("p"),
        weight: ("400"),
        color: (""),
        margin: ("0"),
    }));
    const __VLS_51 = __VLS_50({
        title: (" I agree to the"),
        variation: ("p"),
        weight: ("400"),
        color: (""),
        margin: ("0"),
    }, ...__VLS_functionalComponentArgsRest(__VLS_50));
    // @ts-ignore
    /** @type { [typeof LinkWidget, ] } */ ;
    // @ts-ignore
    const __VLS_55 = __VLS_asFunctionalComponent(LinkWidget, new LinkWidget({
        title: ("Terms & Policy"),
        link: ("google.com"),
        color: ("#164fe8"),
        margin: ("0"),
    }));
    const __VLS_56 = __VLS_55({
        title: ("Terms & Policy"),
        link: ("google.com"),
        color: ("#164fe8"),
        margin: ("0"),
    }, ...__VLS_functionalComponentArgsRest(__VLS_55));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("bit-mb-3") },
    });
    // @ts-ignore
    /** @type { [typeof ButtonWidget, ] } */ ;
    // @ts-ignore
    const __VLS_60 = __VLS_asFunctionalComponent(ButtonWidget, new ButtonWidget({
        output: ("submit"),
        image: (""),
        title: ("Continue"),
        weight: ("700"),
        background: ("#164fe8"),
    }));
    const __VLS_61 = __VLS_60({
        output: ("submit"),
        image: (""),
        title: ("Continue"),
        weight: ("700"),
        background: ("#164fe8"),
    }, ...__VLS_functionalComponentArgsRest(__VLS_60));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("bit-mb-3") },
    });
    // @ts-ignore
    /** @type { [typeof LinkWidget, ] } */ ;
    // @ts-ignore
    const __VLS_65 = __VLS_asFunctionalComponent(LinkWidget, new LinkWidget({
        title: ("Proceed to table"),
        link: ("/list"),
        weight: ("700"),
        background: ("#164fe8"),
    }));
    const __VLS_66 = __VLS_65({
        title: ("Proceed to table"),
        link: ("/list"),
        weight: ("700"),
        background: ("#164fe8"),
    }, ...__VLS_functionalComponentArgsRest(__VLS_65));
    ['layout-container', 'content-wrapper', 'container-xxl', 'bit-mt-4', 'bit-mb-4', 'bit-row', 'bit-justify-content-center', 'bit-col-md-5', 'bit-col-lg-5', 'bit-col-sm-12', 'bit-row', 'bit-justify-content-center', 'bit-px-2', 'bit-mt-4', 'bit-mb-4', 'bit-mt-4', 'mobile-form', 'd-flex', 'align-center', 'bit-gap-2', 'bit-mb-3', 'divider', 'bit-mb-3', 'divider-text', 'bit-mb-3', 'bit-mb-3', 'bit-mb-3', 'd-flex', 'align-center', 'bit-gap-2', 'bit-mb-3', 'bit-mb-3',];
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
            ButtonWidget: ButtonWidget,
            CardWidget: CardWidget,
            InputCheckbox: InputCheckbox,
            InputWidget: InputWidget,
            LinkWidget: LinkWidget,
            TextWidget: TextWidget,
            checkbox: checkbox,
            password: password,
            handleSubmit: handleSubmit,
            handleCard: handleCard,
            handleGoogle: handleGoogle,
            handleMetamask: handleMetamask,
            handleCoinbase: handleCoinbase,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    __typeEl: {},
});
; /* PartiallyEnd: #4569/main.vue */
