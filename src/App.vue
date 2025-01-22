<script setup lang="ts">
import ButtonWidget from './components/ButtonWidget.vue';
import CardWidget from './components/CardWidget.vue';
import InputCheckbox from './components/InputCheckbox.vue';
import InputWidget from './components/InputWidget.vue';
import LinkWidget from './components/LinkWidget.vue';
import TextWidget from './components/TextWidget.vue';
import { ref } from "vue";


const checkbox = ref(false);
const password = ref("");

const handleSubmit = () => {
  console.log("Password entered:", password.value);
  console.log("Checkbox clicked:", checkbox.value);
}
</script>

<template>

<div class="layout-container">
   <div class="content-wrapper">
        <div class="container-xxl bit-mt-4 bit-mb-4">
         
          <div class="bit-row bit-justify-content-center">
            <CardWidget
             height="100vh"
             background="#164fe8"
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
                  <div class=" bit-px-4 bit-mt-4 bit-mb-4">
                      
                       <form @submit.prevent="handleSubmit" class="bit-mt-4">
                        <TextWidget 
                        title="Login To Access"
                        variation="h3"
                        />
                        <div class="d-flex bit-gap-2">
                          <TextWidget
                            title="Don't have an account?"
                            variation="p"
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
                        background="#1b1c20"
                        title="Google Account"
                        margin="0.5rem"
                        weight="700"
                        />
                        <ButtonWidget 
                        output="button"
                        image="/images/metamask.png"
                        title="Metamask Wallet"
                        background="#1b1c20"
                        margin="0.5rem"
                         weight="700"
                        />
                        <ButtonWidget 
                        output="button"
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
                          <div class="d-flex bit-gap-2">
                          <InputCheckbox
                           v-model="checkbox"
                          />
                          <TextWidget
                            title=" I agree to the"
                            variation="p"
                            weight="400"
                            color=""
                          />
                          <LinkWidget
                            title="Terms and Conditions"
                            link="google.com"
                            color="#164fe8"
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
                       </form>
                   </div>
                </div>
            </div>
          </div>

        </div>
   </div>
</div>

</template>

<style lang="scss">
  @import url('./assets/base.scss');


 
 
  .d-flex {
  display: flex !important;
}
 

@media (min-width: 992px) {
  .bit-col-lg-5 {
    flex: 0 0 auto;
    width: 41.66666667%;
  }
}
</style>

 
