<template>
  <div>
    <carousel-component />
    <reviews-panel />
  </div>
</template>
<script>
import CarouselComponent from '@/components/CarouselComponent.vue'
import ReviewsPanel from '@/components/ReviewsPanel'
  export default {
  components: {
    CarouselComponent,
    ReviewsPanel
  },
    data: () => ({
      
    })
  }
</script>

