<script setup lang="ts">
import TextWidget from './TextWidget.vue';
import ImageWidget from './ImageWidget.vue';

defineProps({
  background: {
    type: String,
    default: "#164fe8",
  },
  corner: {
    type: String,
    default: "0.5rem",
  },
  height: {
    type: String,
    default: "100vh",
  },
  onClick: {
    type: Function,
    default: null, 
  },

});

</script>

<template>
  <div @click="onClick && onClick($event)" :style="{ background, height, borderRadius: corner }" 
  class="bit-card bit-col-md-7 bit-col-lg-7 bit-col-sm-12 d-none d-md-block">
        <div class="bit-card-body">
            <TextWidget
            title="Start Your Journey With a Secured Trading Ways!" 
            color="white" 
            variation="h1" 
            margin="" 
            weight="600"
            />
            <TextWidget
            title="Enter the information to know more" 
            color="#a39c9c;" 
            variation="h3" 
            margin="" 
            weight="500"
            />
            <ImageWidget
            width="75%"
            src="/images/bg1.png"
            />
            
        </div>
    </div>
</template>

<style lang="scss">
$card_color: #164fe8;

.d-none {
  display: none !important;
}
@media (min-width: 768px) {
  .d-md-block {
    display: block !important;
  }
}
@mixin size{
    flex: 0 0 auto;
    width: 76.33333333%;
    height: 90vh;
}
@media (min-width: 992px) {
  .bit-col-lg-7 {
     @include size;
  }
}
@media (min-width: 768px) {
  .bit-col-md-7 {
    @include size;
  }
}


.bit-card {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center; 
  align-items: center; 
  min-width: 0;
  word-wrap: break-word;
  background-clip: border-box;
  border: 0 solid #d9dee3;
  border-radius: 0.5rem;
  background-clip: padding-box;
  box-shadow: 0 2px 6px 0 rgba(67, 89, 113, 0.12);
}

.bit-mb-4 {
  margin-bottom: 1.5rem !important;
}
.bit-card-body {
  flex: 1 1 auto;
  padding: 1.5rem 1.5rem;
  padding-top: 1.5rem;

}

</style>