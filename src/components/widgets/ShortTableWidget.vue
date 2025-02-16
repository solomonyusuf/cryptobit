<script setup>
import { defineProps, ref, computed } from 'vue';

const props = defineProps({
    title: { type: String, default: "" },
    label: { type: String, default: "" },
    filterButton: { type: Boolean, default: false },
    filters: { type: Array, default: [] },
    data: { type: Array, default: [] },
});

const selectedCategory = ref(""); // Keeps track of the active filter

const getButtonClasses = (label) => {
    return {
        'btn-black': selectedCategory.value === label,
        'text-white': selectedCategory.value === label,
        'border': selectedCategory.value === label,
    };
};

const handleClick = (label) => {
    selectedCategory.value = label; 
};

const filteredData = computed(() => {
    if (!selectedCategory.value) {
        return props.data; // Return full data if no category is selected
    }
    return props.data.filter(item => item[0].category === selectedCategory.value);
});

</script>

<template>
  <div class="sc-10x8bpw-0 iivpzd">
    <div class="sc-10x8bpw-2 jFvpxj" style="background:#28282b;border-top-left-radius:15px;border-top-right-radius:15px;">
      <h4>{{ title }}</h4>
      <span class="sc-dshm8q-0 sc-dshm8q-1 eGHGbY gOABuB" style="">
        {{ label }}
      </span>

      <div v-if="filterButton" class="sc-10x8bpw-1 jBSbjn">
        <div role="group" dir="ltr" overflow="scroll" class="sc-1c1yrga-0 sc-1c1yrga-1 jrvRSk kFlzVs" tabindex="0" style="outline: none;">
          <button 
            v-for="(item, index) in filters" 
            :key="index"
            @click="handleClick(item)" 
            :class="getButtonClasses(item)" 
            style="border:0.5px solid #494950;" 
            type="button" 
            shape="Pill" 
            class="sc-l0nx5c-0 gdQHqL sc-1t8tdl7-0 eyyfia sc-1c1yrga-4 gAHlwY" 
            data-state="off" 
            role="radio" 
            aria-checked="false" 
            tabindex="0" 
            data-radix-collection-item="" 
            aria-pressed="true"
          >
            <div class="sc-1c1yrga-2 gDkQlB">{{ item }}</div>
          </button>
        </div>
      </div>
    </div>

    <div class="sc-1drcdyj-0 feSemO sc-f2heqk-0 hsttkP">
      <table style="background:var(--color-layer-5);border-top:thin solid #4b4b4d" aria-label="Markets" role="grid" tabindex="-1" class="sc-1drcdyj-2 gMycKc">
        <tbody role="rowgroup" class="cqvzjM">
          <tr v-for="(item, index) in filteredData" role="row" :key="index"  class="sc-1drcdyj-3 bjKQW">
            <td tabindex="0" role="rowheader" style="border-bottom:thin solid #4b4b4d" class="sc-1drcdyj-5 jZwOtN">
              <div class="hbPsAj">
                <img :src="item[0].image" class="sc-1jee7u2-0 sc-1jee7u2-1 bvODzu kKjnke sc-eFHqgm cuigVv" alt="IP">
                <div class="kqDFAg">
                  <div class="sc-1eemviw-0 jrIzVR">
                    <span class="sc-cbeHKN cYeLCX">{{ item[0].title }}</span>
                    <span class="sc-dshm8q-0 eGHGbY">
                      <output class="sc-17stuub-0 sc-17stuub-1 eqFWVL hsAYsL">
                        {{ item[0].label }}
                      </output>
                    </span>
                  </div>
                </div>
              </div>
            </td>

            <td tabindex="-1" role="gridcell" style="border-bottom:thin solid #4b4b4d" class="sc-1drcdyj-5 jZwOtN">
              <div class="hbPsAj">
                <div class="bsrGuR">
                  <output class="sc-17stuub-0 sc-17stuub-1 eqFWVL sc-f2heqk-6 feOvAs">
                    <span class="sc-k94qe4-0 dwHERV">
                      {{ item[1].upper }}
                    </span>
                  </output>
                  <div class="etWmOK">
                    <output :style="{color:item[1].lower.color}" class="sc-17stuub-0 sc-17stuub-1 eqFWVL hsAYsL">
                      <svg width="0.5em" height="0.5em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="sc-17s7t24-0 jmJoyh">
                        <path d="M6.92525 14.1691C7.46819 15.0155 8.53182 15.0155 9.07476 14.1691L15.7159 3.81655C16.4025 2.74628 15.7667 1.19612 14.6412 1.19612H1.35883C0.23329 1.19612 -0.402506 2.74628 0.284066 3.81655L6.92525 14.1691Z" fill="currentColor"></path>
                      </svg>&nbsp;
                      {{ item[1].lower.value }}
                    </output>
                  </div>
                </div>
              </div>
            </td>

            <td tabindex="-1" role="gridcell" style="border-bottom:thin solid #4b4b4d" class="sc-1drcdyj-5 jZwOtN">
              <div class="hbPsAj sc-f2heqk-4 YiPoL">
                <div class="dekweo">
                  <span class="sc-dshm8q-0 sc-dshm8q-1 eGHGbY gOABuB">{{ item[2].label }}</span>
                </div>
                <a :href="item[2].link">
                  <svg width="11" height="19" viewBox="0 0 11 19" fill="none" xmlns="http://www.w3.org/2000/svg" style="transform: rotate(180deg);" class="sc-17s7t24-0 wZEdK">
                    <path d="M9.5 2L2.70711 8.79289C2.31658 9.18342 2.31658 9.81658 2.70711 10.2071L9.5 17" stroke="currentColor" stroke-width="3" stroke-linecap="round"></path>
                  </svg>
                </a>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style lang="scss">


.iivpzd {
  display: grid;
  grid-template-rows: auto 1fr;
  border-radius: 0.625rem;
  background-color: var(--color-layer-3);
}

.jFvpxj {
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  padding: 1.25rem;
  gap: 0.25rem;
}
.hTCkmZ {
  display: flex;
  align-items: center;
  gap: 0.375rem;
  font:var(--font-large-medium);
}
.dEJaBR {
  display: flex;
  align-items: center;
  height: 100%;
  margin-top: 0.0625rem;
  color: var(--color-positive);
}
.dEJaBR {
  display: flex;
  align-items: center;
  height: 100%;
  margin-top: 0.0625rem;
  color: var(--color-positive);
}
@media (max-width: 80rem) {
  .hsttkP {
    --tableCell-padding: 0.5rem 0.5rem;
  }
}
.hsttkP {
  --tableStickyRow-backgroundColor: var(--color-layer-2);
  font: var(--font-mini-book);
  --tableCell-padding: 0.625rem 1.25rem;
  --tableRow-backgroundColor: var(--color-layer-3);
  border-bottom-right-radius: 0.625rem;
  border-bottom-left-radius: 0.625rem;
}
.feSemO {
  --tableStickyRow-textColor: var(--color-text-0,inherit);
  --tableStickyRow-backgroundColor: inherit;
  --table-header-height: 2rem;
  --table-footer-height: 0rem;
  --tableRow-hover-backgroundColor: var(--color-layer-3);
  --table-cell-align: start;
  --table-firstColumn-cell-align: start;
  --table-lastColumn-cell-align: end;
  --tableCell-padding: 0 1rem;
  flex: 1 1 0%;
  scroll-margin-top: var(--stickyArea-totalInsetTop);
  scroll-margin-bottom: var(--stickyArea-totalInsetBottom);
  scroll-margin-left: var(--stickyArea-totalInsetLeft);
  scroll-margin-right: var(--stickyArea-totalInsetRight);
  min-width: max-content;
  scroll-snap-align: none;
  display: grid;
  grid-template-areas:
"stack";
  overflow: clip;
}
.hsttkP table {
  --stickyArea1-background: var(--color-layer-5);
}
.gMycKc {
  align-self: start;
  --stickyArea1-paddingTop: 0px;
  --stickyArea1-bottomGap: 0px;
  --stickyArea1-paddingBottom: 0px;
  --stickyArea1-paddingLeft: 0px;
  --stickyArea1-leftWidth: 0px;
  --stickyArea1-leftGap: 0px;
  --stickyArea1-rightGap: 0px;
  --stickyArea1-rightWidth: 0px;
  --stickyArea1-paddingRight: 0px;
  --stickyArea1-height: calc( var(--stickyArea0-height) - (var(--stickyArea0-paddingTop) + var(--stickyArea0-topHeight) + var(--stickyArea0-topGap)) - ( var(--stickyArea0-paddingBottom) + var(--stickyArea0-bottomHeight) + var(--stickyArea0-bottomGap) ) );
  --stickyArea1-totalInsetTop: calc( var(--stickyArea0-totalInsetTop) + var(--stickyArea0-topHeight) + var(--stickyArea0-topGap) + var(--stickyArea1-paddingTop) );
  --stickyArea1-totalInsetBottom: calc( var(--stickyArea0-totalInsetBottom) + var(--stickyArea0-bottomHeight) + var(--stickyArea0-bottomGap) + var(--stickyArea1-paddingBottom) );
  --stickyArea1-width: calc( var(--stickyArea0-width) - (var(--stickyArea0-paddingLeft) + var(--stickyArea0-leftWidth) + var(--stickyArea0-leftGap)) - ( var(--stickyArea0-paddingRight) + var(--stickyArea0-rightWidth) + var(--stickyArea0-rightGap) ) );
  --stickyArea1-totalInsetLeft: calc( var(--stickyArea0-totalInsetLeft) + var(--stickyArea0-leftWidth) + var(--stickyArea0-leftGap) + var(--stickyArea1-paddingLeft) );
  --stickyArea1-totalInsetRight: calc( var(--stickyArea0-totalInsetRight) + var(--stickyArea0-rightWidth) + var(--stickyArea0-rightGap) + var(--stickyArea1-paddingRight) );
  background: var(--stickyArea-background,var(--color-layer-2));
  --stickyArea-height: var(--stickyArea1-height);
  --stickyArea-totalInsetTop: var(--stickyArea1-totalInsetTop);
  --stickyArea-paddingTop: var(--stickyArea1-paddingTop);
  --stickyArea-topHeight: var(--stickyArea1-topHeight);
  --stickyArea-topGap: var(--stickyArea1-topGap);
  --stickyArea-innerHeight: var(--stickyArea2-height);
  --stickyArea-bottomGap: var(--stickyArea1-bottomGap);
  --stickyArea-bottomHeight: var(--stickyArea1-bottomHeight);
  --stickyArea-paddingBottom: var(--stickyArea1-paddingBottom);
  --stickyArea-totalInsetBottom: var(--stickyArea1-totalInsetBottom);
  --stickyArea-width: var(--stickyArea1-width);
  --stickyArea-totalInsetLeft: var(--stickyArea1-totalInsetLeft);
  --stickyArea-paddingLeft: var(--stickyArea1-paddingLeft);
  --stickyArea-leftWidth: var(--stickyArea1-leftWidth);
  --stickyArea-leftGap: var(--stickyArea1-leftGap);
  --stickyArea-innerWidth: var(--stickyArea2-width);
  --stickyArea-rightGap: var(--stickyArea1-rightGap);
  --stickyArea-rightWidth: var(--stickyArea1-rightWidth);
  --stickyArea-paddingRight: var(--stickyArea1-paddingRight);
  --stickyArea-totalInsetRight: var(--stickyArea1-totalInsetRight);
  --stickyArea-background: var(--stickyArea1-background);
  --stickyArea1-background: var(--color-layer-2);
  --stickyArea1-topHeight: var(--table-header-height);
  --stickyArea1-bottomHeight: var(--table-footer-height);
  border-collapse: separate;
  border-spacing: 0 var(--border-width);
  --stickyArea1-topGap: var(--border-width);
  margin: calc(-1 * var(--border-width)) 0;
}
.feSemO > *, .feSemO::before, .feSemO::after {
  grid-area: stack;
}
table {
  border-collapse: separate !important;
  border-spacing: var(--border-width);
}
.hsttkP tbody {
  font: var(--font-small-book);
}
.cqvzjM tr:first-of-type {
  box-shadow: 0 calc(var(--border-width)) 0 0 var(--border-color);
}
.cqvzjM > * {
  box-shadow: 0 var(--border-width) var(--border-color),0 calc(-1 * var(--border-width)) var(--border-color);
}
.bjKQW {
  --tableRow-currentBackgroundColor: var(--tableRow-backgroundColor);
  background-color: var(--tableRow-currentBackgroundColor);
  cursor: pointer;
}
.hsttkP thead tr td:first-of-type, .hsttkP tbody tr td:first-of-type, .hsttkP thead tr th:first-of-type, .hsttkP tbody tr th:first-of-type {
  --tableCell-padding: 0.5rem 0.25rem 0.5rem 1rem;
}
@media (max-width: 80rem) {
  .hsttkP tr > td:nth-child(1) {
    --tableCell-padding: 0.5rem 0.5rem;
  }
}
.jZwOtN:first-of-type {
  --table-cell-currentAlign: var(--table-firstColumn-cell-align,var(--table-cell-align));
}
.jZwOtN {
  --table-cell-currentAlign: var(--table-cell-align);
  padding: var(--tableCell-padding);
  text-align: var(--table-cell-currentAlign);
}
.hbPsAj {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5em;
  --primary-content-color: var(--color-text-1);
  --secondary-content-color: var(--color-text-0);
  color: var(--primary-content-color);
  text-align: var(--table-cell-currentAlign);
  justify-content: var(--table-cell-currentAlign);
}
.jZwOtN > * {
  vertical-align: middle;
}
.cuigVv {
  font-size: 2rem;
}
.kKjnke {
  height: 1em;
  width: auto;
  border-radius: 50%;
}
.bvODzu {
  --asset-icon-size: 1em;
  background-color: var(--color-white);
  height: var(--asset-icon-size);
  min-height: var(--asset-icon-size);
  width: var(--asset-icon-size);
  min-width: var(--asset-icon-size);
  border-radius: 50%;
}
.kqDFAg {
  gap: 0.75rem;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.jrIzVR {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
}
.cYeLCX {
  color: var(--color-text-1);
  font: var(--font-medium-medium);
  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  min-width: 1px;
  max-width: 4.5rem;
}
.eGHGbY {
  display: inline-flex;
  background-color: var(--color-layer-6);
  border-radius: 0.25rem;
  color: var(--color-text-2);
  letter-spacing: 0.04em;
  padding: 0.125rem 0.219rem 0.125rem 0.25rem;
  font: var(--font-tiny-book);
}
.hsAYsL {
  font-feature-settings: var(--fontFeature-monoNumbers);
}
.eqFWVL {
  --output-beforeString: '';
  --output-afterString: '';
  --output-sign-color: currentColor;
  display: inline-flex;
  align-items: center;
  min-width: max-content;
  gap: 0px;
}
.etWmOK output {
  font: var(--font-mini-medium);
}
.eyeaig {
  color: var(--color-negative);
  font: var(--font-base-medium);
}
.hsAYsL {
  font-feature-settings: var(--fontFeature-monoNumbers);
}
.eqFWVL {
  --output-beforeString: '';
  --output-afterString: '';
  --output-sign-color: currentColor;
  display: inline-flex;
  align-items: center;
  min-width: max-content;
  gap: 0px;
}
.jFvpxj h4 {
  font: var(--font-base-medium);
  color: var(--color-text-2);
}
.jBSbjn {
  display: flex;
  flex-direction: row;
  align-items: center;
  position: absolute;
  top: 1rem;
  right: 1rem;
  z-index: 2;
}
.kFlzVs {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.33em;
}
.jrvRSk {
  overflow-x: auto;
}
.jBSbjn button {
  --button-toggle-off-backgroundColor: var(--color-layer-3);
  --button-toggle-off-textColor: var(--color-text-1);
  --border-color: var(--color-layer-6);
  --button-height: 1.75rem;
  --button-padding: 0 0.75rem;
  --button-font: var(--font-mini-book);
}
.eyyfia {
  --button-toggle-off-backgroundColor: var(--color-layer-3);
  --button-toggle-off-textColor: var(--color-text-0);
  --button-toggle-off-border: solid var(--border-width) var(--border-color);
  --button-toggle-on-backgroundColor: var(--color-layer-1);
  --button-toggle-on-textColor: var(--color-text-2);
  --button-toggle-on-border: solid var(--border-width) var(--border-color);
  --button-backgroundColor: var(--button-toggle-off-backgroundColor);
  --button-textColor: var(--button-toggle-off-textColor);
  --button-border: var(--button-toggle-off-border);
}
.gdQHqL {
  --button-width: auto;
  --button-padding: 0 0.625rem;
  --button-textColor: var(--color-text-0);
  --button-backgroundColor: transparent;
  --button-active-filter: brightness(var(--active-filter));
  --button-hover-filter: brightness(var(--hover-filter-base));
  --button-hover-textColor: var(--button-textColor);
  --button-border: solid var(--border-width) var(--color-layer-6);
  --button-cursor: pointer;
  --button-font: var(--font-mini-book);
  --button-height: 1.75rem;
  --button-radius: 6em;
  font: var(--button-font);
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: var(--button-width);
  height: var(--button-height);
  padding: var(--button-padding);
  gap: 0.5ch;
  background-color: var(--button-backgroundColor);
  border: var(--button-border);
  border-radius: var(--button-radius);
  color: var(--button-textColor);
  text-align: center;
  white-space: nowrap;
  cursor: var(--button-cursor);
}
button {
  appearance: none;
  background: none;
    background-color: rgba(0, 0, 0, 0);
  cursor: pointer;
  transition: .25s var(--ease-out-expo);
}
.gAHlwY:not([data-disabled]) > * {
  cursor: pointer;
}
.gDkQlB {
  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  min-width: 1px;
}









* {
  border: none;
  color: inherit;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  scrollbar-width: none;
  transform-style: inherit;
}
* {
  font: inherit;
}
.GkwVt {
  --bordered-content-outer-container-width: var(--content-container-width);
  --bordered-content-max-width: var(--content-max-width);
  --content-container-width: 100vw;
  --content-max-width: var(--default-page-content-max-width);
  --contentContainerPage-paddingLeft: calc( (var(--content-container-width) - var(--content-max-width)) / 2 );
  --contentContainerPage-paddingRight: calc( (var(--content-container-width) - var(--content-max-width)) / 2 );
  --padding-y: clamp(0rem,(var(--content-container-width) - var(--content-max-width)) / 2,2rem);
}
.hVjCkK {
  --restriction-warning-currentHeight: 0px;
  --page-currentHeaderHeight: var(--page-header-height);
  --page-currentFooterHeight: var(--page-footer-height);
  --content-container-width: 100%;
  --content-max-width: 100%;
  --bordered-content-outer-container-width: var(--content-container-width);
  --bordered-content-max-width: var(--content-max-width);
  --scrollArea-width: 100%;
  --scrollArea-height: 100vh;
  --stickyArea0-paddingTop: 0px;
  --stickyArea0-paddingBottom: 0px;
  --stickyArea0-paddingLeft: 0px;
  --stickyArea0-leftWidth: 0px;
  --stickyArea0-leftGap: 0px;
  --stickyArea0-rightGap: 0px;
  --stickyArea0-rightWidth: 0px;
  --stickyArea0-paddingRight: 0px;
  --stickyArea0-height: var(--scrollArea-height,100%);
  --stickyArea0-totalInsetTop: var(--stickyArea0-paddingTop);
  --stickyArea0-totalInsetBottom: var(--stickyArea0-paddingBottom);
  --stickyArea0-width: var(--scrollArea-width,100%);
  --stickyArea0-totalInsetLeft: var(--stickyArea0-paddingLeft);
  --stickyArea0-totalInsetRight: var(--stickyArea0-paddingRight);
  --stickyArea-height: var(--stickyArea0-height);
  --stickyArea-totalInsetTop: var(--stickyArea0-totalInsetTop);
  --stickyArea-paddingTop: var(--stickyArea0-paddingTop);
  --stickyArea-topHeight: var(--stickyArea0-topHeight);
  --stickyArea-topGap: var(--stickyArea0-topGap);
  --stickyArea-innerHeight: var(--stickyArea1-height);
  --stickyArea-bottomGap: var(--stickyArea0-bottomGap);
  --stickyArea-bottomHeight: var(--stickyArea0-bottomHeight);
  --stickyArea-paddingBottom: var(--stickyArea0-paddingBottom);
  --stickyArea-totalInsetBottom: var(--stickyArea0-totalInsetBottom);
  --stickyArea-width: var(--stickyArea0-width);
  --stickyArea-totalInsetLeft: var(--stickyArea0-totalInsetLeft);
  --stickyArea-paddingLeft: var(--stickyArea0-paddingLeft);
  --stickyArea-leftWidth: var(--stickyArea0-leftWidth);
  --stickyArea-leftGap: var(--stickyArea0-leftGap);
  --stickyArea-innerWidth: var(--stickyArea1-width);
  --stickyArea-rightGap: var(--stickyArea0-rightGap);
  --stickyArea-rightWidth: var(--stickyArea0-rightWidth);
  --stickyArea-paddingRight: var(--stickyArea0-paddingRight);
  --stickyArea-totalInsetRight: var(--stickyArea0-totalInsetRight);
  --stickyArea-background: var(--stickyArea0-background);
  --stickyArea0-topHeight: var(--page-currentHeaderHeight);
  --stickyArea0-topGap: var(--border-width);
  --stickyArea0-bottomGap: var(--border-width);
  --stickyArea0-bottomHeight: var(--page-currentFooterHeight);
  --border-width: var(--default-border-width);
  --border-color: var(--color-border);
}
[data-rk] {
  --rk-blurs-modalOverlay: blur(8px);
  --rk-fonts-body: inherit;
  --rk-fontWeight-regular: 400;
  --rk-fontWeight-medium: 500;
  --rk-fontWeight-semibold: 600;
  --rk-fontWeight-bold: 700;
  --rk-fontWeight-heavy: 800;
  --rk-fontSize-10-fontSize: 12px;
  --rk-fontSize-10-lineHeight: 15px;
  --rk-fontSize-12-fontSize: 12px;
  --rk-fontSize-12-lineHeight: 14px;
  --rk-fontSize-13-fontSize: 14px;
  --rk-fontSize-13-lineHeight: 18px;
  --rk-fontSize-14-fontSize: 14px;
  --rk-fontSize-14-lineHeight: 18px;
  --rk-fontSize-16-fontSize: 18px;
  --rk-fontSize-16-lineHeight: 20px;
  --rk-fontSize-18-fontSize: 18px;
  --rk-fontSize-18-lineHeight: 24px;
  --rk-fontSize-20-fontSize: 20px;
  --rk-fontSize-20-lineHeight: 20px;
  --rk-fontSize-21-fontSize: 21px;
  --rk-fontSize-21-lineHeight: 21px;
  --rk-fontSize-40-fontSize: 40px;
  --rk-fontSize-40-lineHeight: 48px;
  --rk-fontSize-57-fontSize: 57px;
  --rk-fontSize-57-lineHeight: 68px;
  --rk-radii-actionButton: 12px;
  --rk-radii-connectButton: 12px;
  --rk-radii-menuButton: 12px;
  --rk-radii-modal: 24px;
  --rk-radii-modalMobile: 28px;
  --rk-radii-modalActionButton: 24px;
  --rk-radii-modalActionButtonMobile: 28px;
  --rk-colors-accentColor: var(--color-accent);
  --rk-colors-accentColorForeground: #000;
  --rk-colors-actionButtonBorder: rgba(255, 255, 255, 0.04);
  --rk-colors-connectButtonBackground: #000;
  --rk-colors-connectButtonBackgroundError: #C60000;
  --rk-colors-connectButtonText: #FFF;
  --rk-colors-connectButtonTextError: #FFF;
  --rk-colors-connectionIndicator: #30E000;
  --rk-colors-error: #F34126;
  --rk-colors-errorBackground: #F2E6E4;
  --rk-colors-errorBorder: rgba(243, 65, 38, 0.2);
  --rk-colors-generalBorder: #292929;
  --rk-colors-generalBorderDim: rgba(255, 255, 255, 0.04);
  --rk-colors-menuItemBackground: rgba(255, 255, 255, 0.03);
  --rk-colors-selectedOptionBorder: var(--color-border);
  --rk-colors-focusedOptionBorder: #8C8C8C;
  --rk-colors-standby: #F6851B;
  --rk-colors-success: #66CC00;
  --rk-colors-chainIconBorder: #fff;
  --rk-colors-modalBackdrop: rgba(0, 0, 0, 0.2);
  --rk-colors-modalBackground: var(--color-layer-3);
  --rk-colors-modalBorder: var(--color-border);
  --rk-colors-notificationPrimary: rgba(255, 255, 255, 0.03);
  --rk-colors-offBackground: var(--color-layer-4);
  --rk-colors-hoverState: var(--color-layer-4);
  --rk-colors-lightStroke: #333333;
  --rk-colors-mediumStroke: var(--color-border);
  --rk-colors-strokeColor: #333333;
  --rk-colors-dydxSwitchActiveBackground: var(--color-layer-2);
  --rk-colors-primaryText: var(--color-text-2);
  --rk-colors-secondaryText: var(--color-text-1);
  --rk-colors-tertiaryText: var(--color-text-0);
  --rk-colors-textSelection: rgba(255, 255, 255, 0.10);
  --rk-colors-inputBackground: var(--color-layer-4);
  --rk-colors-inputBorderBase: #333333;
  --rk-colors-inputBorderHover: #525252;
  --rk-colors-actionColor: #FFF;
  --rk-colors-actionColorHover: rgba(255, 255, 255, 0.8);
  --rk-colors-actionColorDisabled: rgba(255, 255, 255, 0.65);
  --rk-colors-buttonPrimary: var(--color-accent);
  --rk-colors-buttonDisabled: rgba(255, 255, 255, 0.20);
  --rk-colors-buttonTextPrimary: var(--color-text-button);
  --rk-colors-buttonTextDisabled: var(--color-text-0);
  --rk-colors-buttonWarning: #F34126;
  --rk-colors-buttonSuccess: #2EA200;
  --rk-colors-transparent: transparent;
  --rk-colors-buttonBackgroundTertiary: #333333;
  --rk-colors-buttonBackgroundHoverTertiary: #333333;
  --rk-colors-buttonTextTertiary: #FFF;
  --rk-colors-buttonTextDisabledTertiary: rgba(255, 255, 255, 0.65);
  --rk-colors-buttonStrokeTertiary: rgba(255, 255, 255, 0.35);
  --rk-colors-buttonBackground: var(--color-accent);
  --rk-colors-buttonBackgroundHover: rgb(114,122,255);
  --rk-colors-buttonBackgroundDisabled: var(--color-layer-4);
  --rk-colors-buttonStroke: rgba(255, 255, 255, 0.35);
  --rk-colors-buttonTextSecondaryDisabled: rgba(255, 255, 255, 0.65);
  --rk-colors-buttonTextSecondary: #FFFFFF;
  --rk-colors-buttonIconBackgroundHover: var(--color-layer-4);
  --rk-colors-buttonIconBackgroundPressed: #333333;
  --rk-colors-buttonIconStroke: rgba(255, 255, 255, 0.35);
  --rk-colors-badgeBackgroundSuccess: rgba(124, 242, 136, 0.1);
  --rk-colors-badgeBorderSuccess: rgba(124, 242, 136, 0.2);
  --rk-colors-badgeTextSuccess: rgb(124, 242, 136);
  --rk-shadows-connectButton: 0px 4px 12px rgba(0, 0, 0, 0.1);
  --rk-shadows-dialog: 0px 8px 32px rgba(0, 0, 0, 0.32);
  --rk-shadows-selectedOption: 0px 2px 6px rgba(0, 0, 0, 0.24);
  --rk-shadows-selectedWallet: 0px 2px 6px rgba(0, 0, 0, 0.24);
  --rk-shadows-dropdown: 0px 0px 0px 1px rgba(255, 255, 255, 0.16), 0px 2px 6px rgba(0, 0, 0, 0.03), 0px 4px 42px rgba(0, 0, 0, 0.06);
  --rk-moonpayTheme: dark;
}
element {
  --wcm-color-fg-1: rgb(228,231,231);
  --wcm-color-fg-2: rgb(148,158,158);
  --wcm-color-fg-3: rgb(110,119,119);
  --wcm-color-bg-1: rgb(20,20,20);
  --wcm-color-bg-2: rgb(39,42,42);
  --wcm-color-bg-3: rgb(59,64,64);
  --wcm-color-overlay: rgba(255,255,255,0.1);
  --wcm-accent-color: #3396FF;
  --wcm-accent-fill-color: #FFFFFF;
  --wcm-z-index: 1000000;
  --wcm-background-color: #3396FF;
  --wcm-background-border-radius: 8px;
  --wcm-container-border-radius: 30px;
  --wcm-wallet-icon-border-radius: 15px;
  --wcm-wallet-icon-large-border-radius: 30px;
  --wcm-wallet-icon-small-border-radius: 7px;
  --wcm-input-border-radius: 28px;
  --wcm-button-border-radius: 10px;
  --wcm-notification-border-radius: 36px;
  --wcm-secondary-button-border-radius: 28px;
  --wcm-icon-button-border-radius: 50%;
  --wcm-button-hover-highlight-border-radius: 10px;
  --wcm-text-big-bold-size: 20px;
  --wcm-text-big-bold-weight: 600;
  --wcm-text-big-bold-line-height: 24px;
  --wcm-text-big-bold-letter-spacing: -0.03em;
  --wcm-text-big-bold-text-transform: none;
  --wcm-text-xsmall-bold-size: 10px;
  --wcm-text-xsmall-bold-weight: 700;
  --wcm-text-xsmall-bold-line-height: 12px;
  --wcm-text-xsmall-bold-letter-spacing: 0.02em;
  --wcm-text-xsmall-bold-text-transform: uppercase;
  --wcm-text-xsmall-regular-size: 12px;
  --wcm-text-xsmall-regular-weight: 600;
  --wcm-text-xsmall-regular-line-height: 14px;
  --wcm-text-xsmall-regular-letter-spacing: -0.03em;
  --wcm-text-xsmall-regular-text-transform: none;
  --wcm-text-small-thin-size: 14px;
  --wcm-text-small-thin-weight: 500;
  --wcm-text-small-thin-line-height: 16px;
  --wcm-text-small-thin-letter-spacing: -0.03em;
  --wcm-text-small-thin-text-transform: none;
  --wcm-text-small-regular-size: 14px;
  --wcm-text-small-regular-weight: 600;
  --wcm-text-small-regular-line-height: 16px;
  --wcm-text-small-regular-letter-spacing: -0.03em;
  --wcm-text-small-regular-text-transform: none;
  --wcm-text-medium-regular-size: 16px;
  --wcm-text-medium-regular-weight: 600;
  --wcm-text-medium-regular-line-height: 20px;
  --wcm-text-medium-regular-letter-spacing: -0.03em;
  --wcm-text-medium-regular-text-transform: none;
  --wcm-font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, Ubuntu, 'Helvetica Neue', sans-serif;
  --wcm-font-feature-settings: 'tnum' on, 'lnum' on, 'case' on;
  --wcm-success-color: rgb(38,181,98);
  --wcm-error-color: rgb(242, 90, 103);
  --wcm-overlay-background-color: rgba(0, 0, 0, 0.3);
  --wcm-overlay-backdrop-filter: none;
}
:root {
  --privy-border-radius-sm: 6px;
  --privy-border-radius-md: 12px;
  --privy-border-radius-mdlg: 16px;
  --privy-border-radius-lg: 24px;
  --privy-border-radius-full: 9999px;
  --privy-color-background: hsl(240,20%,20%);
  --privy-color-background-2: hsl(240,20%,31%);
  --privy-color-foreground: hsl(0,0%,100%);
  --privy-color-foreground-2: hsl(240,20%,95%);
  --privy-color-foreground-3: hsl(0,0%,65%);
  --privy-color-foreground-4: hsl(0,0%,45%);
  --privy-color-foreground-accent: hsl(0,0%,100%);
  --privy-color-accent: hsl(237,100%,70%);
  --privy-color-accent-light: hsl(237,100%,85%);
  --privy-color-accent-dark: hsl(237,100%,64%);
  --privy-color-success: hsl(147,43%,52%);
  --privy-color-success-dark: hsl(147,43%,36%);
  --privy-color-error: hsl(7,80%,62%);
  --privy-color-error-light: hsl(7,80%,92%);
  --privy-color-warn: hsl(36,100%,65%);
  --privy-color-warn-light: hsl(36,100%,95%);
  --privy-height-modal-full: 620px;
  --privy-height-modal-compact: 480px;
}
:root {
  --color-white: #FFFFFF;
  --color-black: #000000;
  --color-green: #1AFFB9;
  --color-red: #FF5C5C;
  --color-white-faded: #FFFFFF29;
  --color-layer-0: #000000;
  --color-layer-1: #1B1B1D;
  --color-layer-2: #212124;
  --color-layer-3: #28282B;
  --color-layer-4: #303033;
  --color-layer-5: #3B3B3F;
  --color-layer-6: #494950;
  --color-layer-7: #56565C;
  --color-border: #494950;
  --color-border-white: #FFFFFF33;
  --color-border-red: #FF5C5C33;
  --color-text-0: #888891;
  --color-text-1: #CACACE;
  --color-text-2: #FAFAFA;
  --color-text-button: #FAFAFA;
  --color-gradient-base-0: #292929;
  --color-gradient-base-1: #3B3B3F;
  --color-accent: #7774FF;
  --color-accent-faded: #7774FF29;
  --color-favorite: #FFCC48;
  --color-success: #1AFFB9;
  --color-warning: #FFCC48;
  --color-error: #FF5C5C;
  --color-success-background: #3EB68A;
  --color-gradient-success: #1AFFB929;
  --color-gradient-warning: #FFCC4829;
  --color-gradient-error: #FF5C5C29;
  --color-positive: #1AFFB9;
  --color-negative: #FF5C5C;
  --color-positive-dark: #2C5254;
  --color-negative-dark: #462C2E;
  --color-gradient-positive: #1AFFB929;
  --color-gradient-negative: #FF5C5C29;
  --color-risk-low: #1AFFB9;
  --color-risk-medium: #FFCC48;
  --color-risk-high: #FF5C5C;
  --hover-filter-base: 1.1;
  --hover-filter-variant: 1.1;
  --active-filter: 0.9;
  --overlay-filter: 0.7;
}
:root {
  color: var(--color-text-1);
  --border: var(--default-border-width) solid var(--color-border);
}
:root {
  --ease-in-expo: cubic-bezier(.7, 0, .84, 0);
  --ease-out-expo: cubic-bezier(.16, 1, .3, 1);
  --ease-in-out-expo: cubic-bezier(.87, 0, .13, 1);
  --ease-in-circ: cubic-bezier(.55, 0, 1, .45);
  --ease-out-circ: cubic-bezier(0, .55, .45, 1);
}
:root {
  font-family: var(--fontFamily-base);
  font-weight: var(--fontWeight-base-0);
  letter-spacing: var(--letter-spacing-base);
  font-size: 1em;
  line-height: 1.3;
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-text-size-adjust: 100%;
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
:root {
  --default-border-width: 1px;
  --page-header-height: 2.75rem;
  --page-header-height-mobile: 4rem;
  --page-footer-height: 2rem;
  --page-footer-height-mobile: 4.5rem;
  --restriction-warning-height: 3.25rem;
  --restriction-warning-height-mobile: min-content;
  --sidebar-width: 20.25rem;
  --collapsed-sidebar-width: 3.5rem;
  --default-page-content-max-width: 80rem;
  --market-info-row-height: 2.675rem;
  --market-info-row-height-mobile: 4.5rem;
  --tabs-height: 2.675rem;
  --tabs-height-mobile: 3.25rem;
  --orderbook-trades-width: 18.75rem;
  --tableHeader-height: 2.5rem;
  --tableHeader-height-mobile: 3.25rem;
  --account-info-section-height-deprecated: 7rem;
  --account-info-section-height: 7.75rem;
  --position-details-width: 23rem;
  --single-unit-min-width: 15.625rem;
  --single-unit-max-width: 23.4375rem;
  --single-unit-height: 9.375rem;
  --dialog-small-width: 18.75rem;
  --dialog-medium-width: 20.5rem;
  --dialog-large-width: 26.25rem;
  --dialog-header-height: 4rem;
  --marketsDropdown-openWidth-deprecated: 45rem;
  --marketsDropdown-openWidth: 50rem;
  --form-input-gap: .625rem;
  --form-input-height: 3rem;
  --form-input-height-mobile: 3.5rem;
  --form-input-paddingY: .25rem;
  --form-input-paddingX: .625rem;
}


</style>
