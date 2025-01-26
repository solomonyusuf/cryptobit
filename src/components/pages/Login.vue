<script setup lang="ts">
import ButtonWidget from '../widgets/ButtonWidget.vue';
import CardWidget from '../widgets/CardWidget.vue';
import InputCheckbox from '../widgets/InputCheckbox.vue';
import InputWidget from '../widgets/InputWidget.vue';
import LinkWidget from '../widgets/LinkWidget.vue';
import TextWidget from '../widgets/TextWidget.vue';
import TableWidget from '../widgets/TableWidge.vue'
import { ref } from "vue";


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

<div class="layout-container">
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

<style lang="scss">
  @import url('../../assets/base.scss');


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
</style>

 
