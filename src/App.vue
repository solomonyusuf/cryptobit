<script setup lang="ts">
 import CardWidget from './components/CardWidget.vue';
</script>

<template>

<div class="layout-container">
   <div class="content-wrapper">
        <div class="container-xxl bit-mt-4 bit-mb-4">
         
          <div class="bit-row bit-justify-content-center">
            <CardWidget
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
                      
                       <form class="bit-mt-4">
                        <h3 class="text-widget fw-bold">Login to Access </h3>
                       <p>Don't have an account? <a>sign up here</a></p>
                       <div class="bit-mb-3">
                        <button type="button" class="bit-btn btn-widget bit-w-100 d-flex bit-gap-2">
                          <img src="/images/google.png" class="button-image rounded-pill" />
                          Get started with Google
                        </button>
                       </div>
                       <div class="divider bit-mb-3">
                        <div class="divider-text">Or Sign up via email</div>
                         </div>
                        <div class="bit-mb-3">
                          <input type="text" class="bit-form-control" placeholder="Enter Your Email">
                        </div>
                        <div class="bit-mb-3">
                          <input type="password" class="bit-form-control" placeholder="Enter Your Password">
                        </div>
                        <div class="bit-mb-3">
                          <div class="bit-form-check">
                            <input class="bit-form-check-input" type="checkbox" value="" id="defaultCheck3">
                            <label class="bit-form-check-label"> I agree to the Terms and Conditions </label>
                          </div>
                        </div>
                        <div class="bit-mb-3">
                          <button type="button" class="bit-btn bit-btn-primary bit-w-100">Continue</button>
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

  
  .text-widget{
    color:white;
  }
  .button-image{
    height:25px;
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

 
