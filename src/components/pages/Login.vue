<script setup lang="ts">
import ButtonWidget from '../widgets/ButtonWidget.vue';
import CardWidget from '../widgets/CardWidget.vue';
import InputCheckbox from '../widgets/InputCheckbox.vue';
import InputWidget from '../widgets/InputWidget.vue';
import LinkWidget from '../widgets/LinkWidget.vue';
import TextWidget from '../widgets/TextWidget.vue';
import TableWidget from '../widgets/TableWidge.vue'
import PercentageWidget from '../widgets/PercentageWidget.vue';
import PillWidget from '../widgets/PillWidget.vue';
import { ref } from "vue";
import LineChartWidget from '../widgets/LineChartWidget.vue';


const checkbox = ref(false);
const password = ref("");

const handleSubmit = () => {
  console.log("Password entered:", password.value);
  console.log("Checkbox clicked:", checkbox.value);
}

 
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
</script>

<template>

<div class="layout-container" style="background:#212124;">
   <div class="content-wrapper">
        <div class="container-xxl bit-mt-4 bit-mb-4">
          
          <div class="bit-row bit-justify-content-center">
            <CardWidget
             height="100vh"
             background="#164fe8"
             :onClick="handleCard"
            />
            <!-- <div class="bit-card bit-col-md-7 bit-col-lg-7 bit-col-sm-12">
                <div class="bit-card-body  bit-mb-4">
                  <h2 class="text-widget bit-mt-4 fw-bold">Start Your Journey With a Secured Trading Ways!</h2>
                  <h4 style="color: #a39c9c;" class="text-widget">Enter the information to know more </h4>
                  <img class="image-widget" src="/images/bg1.png"  />
                </div>
            </div> -->
            <div class="bit-col-md-5 bit-col-lg-5 bit-col-sm-12">
                <div class="bit-row bit-justify-content-center">
                  <div class="bit-px-2 bit-mt-4 bit-mb-4">
                      
                       <form  @submit.prevent="handleSubmit" class="bit-mt-4 mobile-form">
                        <TextWidget 
                        title="Login To Access"
                        variation="h3"
                        />
                        <div class="d-flex align-center bit-gap-2">
                          <TextWidget
                            title="Don't have an account?"
                            variation="span"
                            weight="400"
                            color=""
                          />
                          <LinkWidget
                            title="sign up here"
                            link="google.com"
                            color="#164fe8"
                          />
                        </div>
                       <div class="bit-mb-3">
                        <ButtonWidget 
                        output="button"
                        :onClick="handleGoogle"
                        background="#1b1c20"
                        title="Google Account"
                        shadow="0 0.125rem 0.25rem 0 rgba(66, 70, 74, 0.4)"
                        image="/images/google.png"
                        margin="0.5rem"
                        weight="700"
                        />
                        <ButtonWidget 
                        output="button"
                        :onClick="handleMetamask"
                        image="/images/metamask.png"
                        title="Metamask Wallet"
                        background="#1b1c20"
                        margin="0.5rem"
                         weight="700"
                        />
                        <ButtonWidget 
                        output="button"
                        :onClick="handleCoinbase"
                        image="/images/coinbase.png"
                        title="Coinbase Wallet"
                        background="#1b1c20"
                        margin="0.5rem"
                         weight="700"
                        />
                       </div>
                       <div class="divider bit-mb-3">
                        <div class="divider-text">Or Sign up via email</div>
                         </div>
                        <div class="bit-mb-3">
                          <InputWidget 
                            placeholder="Enter your email"
                          />
                        </div>
                        <div class="bit-mb-3">
                          <InputWidget 
                            v-model="password"
                            output="password"
                            placeholder="Enter Your Password"/>
                        </div>
                        <div class="bit-mb-3">
                          <div class="d-flex align-center bit-gap-2">
                          <InputCheckbox
                           v-model="checkbox"
                            margin="0"
                          />
                          <TextWidget
                            title=" I agree to the"
                            variation="p"
                            weight="400"
                            color=""
                            margin="0"
                          />
                          <LinkWidget
                            title="Terms & Policy"
                            link="google.com"
                            color="#164fe8"
                             margin="0"
                          />
                        </div>
                        </div>
                        <div class="bit-mb-3">
                          <ButtonWidget 
                              output="submit"
                              image=""
                              title="Continue"
                              weight="700"
                              background="#164fe8"
                              />
                        </div>
                         <div class="bit-mb-3">
                          <LinkWidget
                              title="Proceed to table"
                              link="/list"
                              weight="700"
                              background="#164fe8"
                              />
                        </div>
                       </form>
                   </div>
                </div>
            </div>
          </div>
           
      </div>

        </div>
   </div>
 

</template>

<style lang="scss" scoped>
 
  @media (max-width: 768px) {  
  .mobile-form {
    width: 300px;
    margin: 0 auto;  
  }
}
 
.d-flex {
  display: flex !important;
}
 

@media (min-width: 992px) {
  .bit-col-lg-5 {
    flex: 0 0 auto;
    width: 41.66666667%;
  }
}
:root {
  --bs-blue: #164fe8;
  --bs-indigo: #6610f2;
  --bs-purple: #696cff;
  --bs-pink: #e83e8c;
  --bs-red: #ff3e1d;
  --bs-orange: #fd7e14;
  --bs-yellow: #ffab00;
  --bs-green: #71dd37;
  --bs-teal: #20c997;
  --bs-cyan: #03c3ec;
  --bs-white: #fff;
  --bs-gray: rgba(67, 89, 113, 0.6);
  --bs-gray-dark: rgba(67, 89, 113, 0.8);
  --bs-gray-25: rgba(67, 89, 113, 0.025);
  --bs-gray-50: rgba(67, 89, 113, 0.05);
  --bs-primary: var(--bs-blue);
  --bs-secondary: #8592a3;
  --bs-success: #71dd37;
  --bs-info: #03c3ec;
  --bs-warning: #ffab00;
  --bs-danger: #ff3e1d;
  --bs-light: #fcfdfd;
  --bs-dark: #233446;
  --bs-gray: rgba(67, 89, 113, 0.1);
  --bs-primary-rgb: 105, 108, 255;
  --bs-secondary-rgb: 133, 146, 163;
  --bs-success-rgb: 113, 221, 55;
  --bs-info-rgb: 3, 195, 236;
  --bs-warning-rgb: 255, 171, 0;
  --bs-danger-rgb: 255, 62, 29;
  --bs-light-rgb: 252, 253, 253;
  --bs-dark-rgb: 35, 52, 70;
  --bs-gray-rgb: 67, 89, 113;
  --bs-white-rgb: 255, 255, 255;
  --bs-black-rgb: 67, 89, 113;
  --bs-body-color-rgb: 105, 122, 141;
  --bs-body-bg-rgb: 245, 245, 249;
  --bs-font-sans-serif: "Poppins",sans-serif;
  --bs-font-monospace: Arial, Helvetica, sans-serif;
  --bs-gradient: linear-gradient(180deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0));
  --bs-root-font-size: 18px;
  --bs-body-font-family: var(--bs-font-sans-serif);
  --bs-body-font-size: 0.9375rem;
  --bs-body-font-weight:50;
  --bs-body-line-height: 1.53;
  --bs-body-color: #697a8d;
  --bs-body-bg: #212124;
}
body{
  background: var(--bs-body-bg);
}
*,
*::before,
*::after {
  box-sizing: border-box;
}

:root {
  font-size: var(--bs-root-font-size);
}

@media (prefers-reduced-motion: no-preference) {
  :root {
    scroll-behavior: smooth;
  }
}

body {
  margin: 0;
  font-family: var(--bs-body-font-family);
  font-size: var(--bs-body-font-size);
  font-weight: var(--bs-body-font-weight);
  line-height: var(--bs-body-line-height);
  color: var(--bs-body-color);
  text-align: var(--bs-body-text-align);
  background-color: var(--bs-body-bg);
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: rgba(67, 89, 113, 0);
}

.layout-container {
  width: 100%;
  display: flex;
  flex: 1 1 auto;
  align-items: stretch;
  min-height: 100vh;
}

.content-wrapper {
  display: flex;
  align-items: stretch;
  flex: 1 1 auto;
  flex-direction: column;
  justify-content: space-between;
  min-height: 1px;
}

.container-xxl {
  padding-right: 1.625rem;
  padding-left: 1.625rem;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
}

.bit-mb-3 {
  margin-bottom: 1rem !important;
}

.bit-row {
  --bs-gutter-x: 1.625rem;
  --bs-gutter-y: 0;
  display: flex;
  flex-wrap: wrap;
  margin-top: calc(-1 * var(--bs-gutter-y));
  margin-right: calc(-0.5 * var(--bs-gutter-x));
  margin-left: calc(-0.5 * var(--bs-gutter-x));
  max-width: 100%;
  padding-right: calc(var(--bs-gutter-x) * 0.5);
  padding-left: calc(var(--bs-gutter-x) * 0.5);
  margin-top: var(--bs-gutter-y);
}

.bit-col-md-8 {
  flex: 0 0 auto;
  width: 66.66666667%;
}

@media (min-width: 768px) {
  .bit-col-md-7 {
    flex: 0 0 auto;
    width: 58.33333333%;
  }
}
@media (min-width: 576px) {
  .col-sm-12 {
    flex: 0 0 auto;
    width: 100%;
  }
}

@media (min-width: 768px) {
  .bit-col-md-5 {
    flex: 0 0 auto;
    width: 41.66666667%;
  }
}

.bit-col-md-4 {
  flex: 0 0 auto;
  width: 33.33333333%;
}

.bit-px-4 {
  padding-right: 2.5rem !important;
  padding-left: 2.5rem !important;
}
.bit-px-2 {
  padding-right: 1.5rem !important;
  padding-left: 1.5rem !important;
}
.bit-form-label {
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: inherit;
}




.btn-widget {
  color: #fff;
  background-color: #1b1c20;
  border-color: #1b1c20;
  box-shadow: 0 0.125rem 0.25rem 0 rgba(66, 70, 74, 0.4);
}

input, button, select, optgroup, textarea {
  margin: 0;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
}

.bit-justify-content-center {
  justify-content: center !important;
}
.bit-gap-2 {
  gap: 0.2rem !important;
}
 
hr {
  margin: 1rem 0;
  color: #d9dee3;
  background-color: currentColor;
  border: 0;
  opacity: 1;
}

.bit-card-body {
  flex: 1 1 auto;
  padding: 1.5rem 1.5rem;
    padding-top: 1.5rem;
}

.bit-btn-primary {
  color: #fff;
  background-color: var(--bs-primary);
  border-color: var(--bs-primary);
  box-shadow: 0 0.125rem 0.25rem 0 rgba(47, 48, 116, 0.4);
}
.align-items-center {
  align-items: center !important;
}
.bit-w-100 {
  width: 100% !important;
}
.rounded-pill {
  border-radius: 50rem !important;
}
.fw-bold {
  font-weight: 700 !important;
}
.bit-btn {
  display: inline-block;
  font-weight: 400;
  line-height: 1.53;
  color: white;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  border: 1px solid transparent;
    border-top-color: transparent;
    border-right-color: transparent;
    border-bottom-color: transparent;
    border-left-color: transparent;
  padding: 0.4375rem 1.25rem;
  font-size: 0.9375rem;
  border-radius: 0.575rem;
  transition: all 0.2s ease-in-out;
}

.divider {
  display: block;
  text-align: center;
  margin: 1rem 0;
  overflow: hidden;
  white-space: nowrap;
}
.divider .divider-text {
  position: relative;
  display: inline-block;
  font-size: 0.8rem;
  padding: 0rem 1rem;
}
.divider .divider-text i {
  font-size: 1rem;
}
.divider .divider-text:before, .divider .divider-text:after {
  content: "";
  position: absolute;
  top: 50%;
  width: 100vw;
  border-top: 1px solid rgba(67, 89, 113, 0.2);
}
.divider .divider-text:before {
  right: 100%;
}
.divider .divider-text:after {
  left: 100%;
}
.divider.text-start .divider-text {
  padding-left: 0;
}
.divider.text-end .divider-text {
  padding-right: 0;
}
.divider.text-start-center .divider-text {
  left: -25%;
}
.divider.text-end-center .divider-text {
  right: -25%;
}
.divider.divider-dotted .divider-text:before, .divider.divider-dotted .divider-text:after {
  border-style: dotted;
  border-width: 0 1px 1px;
  border-color: rgba(67, 89, 113, 0.2);
}
.divider.divider-dashed .divider-text:before, .divider.divider-dashed .divider-text:after {
  border-style: dashed;
  border-width: 0 1px 1px;
  border-color: rgba(67, 89, 113, 0.2);
}

.bit-mt-4 {
  margin-top: 1.5rem !important;
}
.bit-mb-4 {
  margin-bottom: 1.5rem !important;
}

hr:not([size]) {
  height: 1px;
}

h6, .h6, h5, .h5, h4, .h4, h3, .h3, h2, .h2, h1, .h1 {
  margin-top: 0;
  margin-bottom: 1rem;
  font-weight: 500;
  line-height: 1.1;
  // color: #566a7f;
}

h1, .h1 {
  font-size: calc(1.3625rem + 1.35vw);
}

@media (min-width: 1200px) {
  h1, .h1 {
    font-size: 2.375rem;
  }
}

h2, .h2 {
  font-size: calc(1.325rem + 0.9vw);
}
@media (min-width: 1200px) {
  h2, .h2 {
    font-size: 2rem;
  }
}

h3, .h3 {
  font-size: calc(1.2875rem + 0.45vw);
}
@media (min-width: 1200px) {
  h3, .h3 {
    font-size: 1.625rem;
  }
}

h4, .h4 {
  font-size: calc(1.2625rem + 0.15vw);
}
@media (min-width: 1200px) {
  h4, .h4 {
    font-size: 1.375rem;
  }
}

h5, .h5 {
  font-size: 1.125rem;
}

h6, .h6 {
  font-size: 0.9375rem;
}

p {
  margin-top: 0;
  margin-bottom: 1rem;
}


</style>

 
