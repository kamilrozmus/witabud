<template>
  <div>
    <carousel-component />
    <reviews-panel />
    <realizations />
    <alert />
    <footer-component />
  </div>
</template>
<script>
import CarouselComponent from '@/components/CarouselComponent.vue'
import ReviewsPanel from '@/components/ReviewsPanel'
import Realizations from '../components/Realizations.vue'
import FooterComponent from '../components/common/FooterComponent.vue'
import Alert from '../components/common/Alert.vue'

  export default {
  components: {
    CarouselComponent,
    ReviewsPanel,
    Realizations,
    FooterComponent,
    Alert
  },
    data: () => ({
      
    })
  }
</script>

