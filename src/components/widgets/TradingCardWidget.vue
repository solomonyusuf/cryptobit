<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    height :{type: String, default:"100px"},
    width :{type: String, default:"300px"},
    color :{type: String, default:""},
    title :{type: String, default:""},
    label :{type: String, default:""},
    content :{type: String, default:""},
});
</script>

<template>
    <div :style="{height, color, width}" class="trade-card">
            <div class=" content">
               <div class=" title"><label>{{ title }}</label>
                <span class="pill">{{ label }}</span></div>
               <output class="output price">{{ content }} </output>
            </div>
         </div>
</template>

<style lang="scss">
.trade-card {
  display: flex;
  flex-direction: row;
  align-items: center;
  flex: 1 1 0%;
  justify-content: space-between;
  border-radius: 0.625rem;
  background-color: var(--color-layer-3);
  padding: 0.75rem 1rem 0.5rem;
}
.content {
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: minmax(0px, 1fr);
  flex: 1 1 0%;
}
.title {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.375rem;
}
.pill {
  display: inline-flex;
  background-color: var(--color-layer-6);
  border-radius: 0.25rem;
  color: var(--color-text-2);
  letter-spacing: 0.04em;
  padding: 0.125rem 0.219rem 0.125rem 0.25rem;
  font: var(--font-tiny-book);
}
.output {
  --output-beforeString: '';
  --output-afterString: '';
  --output-sign-color: currentColor;
  display: inline-flex;
  align-items: center;
  min-width: max-content;
  gap: 0px;
}
:root {
  --fontFamily-base: "Satoshi", system-ui, -apple-system, Helvetica, Arial, sans-serif;
  --fontFamily-monospace: Courier, monospace, var(--fontFamily-base);
  --fontWeight-base-0: 450;
  --fontWeight-base-1: 500;
  --fontWeight-base-2: 700;
  --letter-spacing-base: -.02em;
  --fontSize-tiny: .625rem;
  --fontSize-mini: .75rem;
  --fontSize-small: .8438rem;
  --fontSize-base: .9375rem;
  --fontSize-medium: 1.125rem;
  --fontSize-large: 1.375rem;
  --fontSize-extra: 1.75rem;
  --fontWeight-regular: 400;
  --fontWeight-book: 450;
  --fontWeight-medium: 500;
  --fontWeight-semibold: 600;
  --fontWeight-bold: 700;
  --font-tiny-regular: var(--fontWeight-regular) var(--fontSize-tiny) var(--fontFamily-base);
  --font-tiny-book: var(--fontWeight-book) var(--fontSize-tiny) var(--fontFamily-base);
  --font-tiny-medium: var(--fontWeight-medium) var(--fontSize-tiny) var(--fontFamily-base);
  --font-mini-regular: var(--fontWeight-regular) var(--fontSize-mini) var(--fontFamily-base);
  --font-mini-book: var(--fontWeight-book) var(--fontSize-mini) var(--fontFamily-base);
  --font-mini-medium: var(--fontWeight-medium) var(--fontSize-mini) var(--fontFamily-base);
  --font-small-regular: var(--fontWeight-regular) var(--fontSize-small) var(--fontFamily-base);
  --font-small-book: var(--fontWeight-book) var(--fontSize-small) var(--fontFamily-base);
  --font-small-medium: var(--fontWeight-medium) var(--fontSize-small) var(--fontFamily-base);
  --font-small-bold: var(--fontWeight-bold) var(--fontSize-small) var(--fontFamily-base);
  --font-base-regular: var(--fontWeight-regular) var(--fontSize-base) var(--fontFamily-base);
  --font-base-book: var(--fontWeight-book) var(--fontSize-base) var(--fontFamily-base);
  --font-base-medium: var(--fontWeight-medium) var(--fontSize-base) var(--fontFamily-base);
  --font-base-bold: var(--fontWeight-bold) var(--fontSize-base) var(--fontFamily-base);
  --font-medium-regular: var(--fontWeight-regular) var(--fontSize-medium) var(--fontFamily-base);
  --font-medium-book: var(--fontWeight-book) var(--fontSize-medium) var(--fontFamily-base);
  --font-medium-medium: var(--fontWeight-medium) var(--fontSize-medium) var(--fontFamily-base);
  --font-medium-bold: var(--fontWeight-bold) var(--fontSize-medium) var(--fontFamily-base);
  --font-large-regular: var(--fontWeight-regular) var(--fontSize-large) var(--fontFamily-base);
  --font-large-book: var(--fontWeight-book) var(--fontSize-large) var(--fontFamily-base);
  --font-large-medium: var(--fontWeight-medium) var(--fontSize-large) var(--fontFamily-base);
  --font-extra-regular: var(--fontWeight-regular) var(--fontSize-extra) var(--fontFamily-base);
  --font-extra-book: var(--fontWeight-book) var(--fontSize-extra) var(--fontFamily-base);
  --font-extra-medium: var(--fontWeight-medium) var(--fontSize-extra) var(--fontFamily-base);
  --font-extra-bold: var(--fontWeight-bold) var(--fontSize-extra) var(--fontFamily-base);
  --fontFeature-monoNumbers: "tnum" on, "lnum" on, "zero" 1;
}
.price {
  color: var(--color-text-2);
  font: var(--font-large-medium);
}
</style>