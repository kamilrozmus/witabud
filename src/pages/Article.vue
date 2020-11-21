<template>
  <div>
    <article-content />
    <alert />
    <footer-component />
  </div>
</template>
<script>
import ArticleContent from '../components/ArticleContent.vue'
import FooterComponent from '../components/common/FooterComponent.vue'
import Alert from '../components/common/Alert.vue'

  export default {
  components: {
    ArticleContent,
    FooterComponent,
    Alert
  },
    data: () => ({
      
    })
  }
</script>

