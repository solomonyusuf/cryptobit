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
    default: "90vh",
  },
  width: {
    type: String,
    default: "58.33333333%",
  },

});

</script>

<template>
  <div :style="{ background, borderRadius: corner, height, width }" class="bit-card bit-col-md-7 bit-col-lg-7 bit-col-sm-12">
        <div class="bit-card-body bit-mb-4">
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
            src="/images/bg1.png"
            />
            
        </div>
    </div>
</template>

<style lang="scss">
$card_color: #164fe8;


 //Card styles
 @media (min-width: 992px) {
  .bit-col-lg-7 {
    flex: 0 0 auto;
    width: 58.33333333%;
    height: 90vh;
  }
}


.bit-card {
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-clip: border-box;
  border: 0 solid #d9dee3;
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
  padding-top: 1.5rem;
}

@media (min-width: 768px) {
  .bit-col-md-7 {
    flex: 0 0 auto;
    width: 58.33333333%;
  }
}

</style>