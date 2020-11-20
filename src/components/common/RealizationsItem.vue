<template>
  <div class="content">
   <div v-for="(item, i) in items" :key="i" class="item-done">
      <img :src="item.src">
      <div class="text" >
        <div class="title ">{{ item.title }}</div>
        <div class="desc">{{ item.desc }}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'RealizationsItem',
  props: {
    items: {
      type: Array
    }
  }
}
</script>
<style lang="scss" scoped>
@import '@/assets/styles.scss';

.content {
  display: flex;
  flex-wrap: wrap;
}

.item-done {
  padding: 25px;
  width: 350px;

  .text {
    border: 1px solid grey;
    border-top: transparent;
    padding: 20px;
  }

  img {
    width: 300px;
  }

  .title {
    color: $black-primary;
    font-weight: bold;
    margin-bottom: 5%;

    .desc {
      color: $description;
      border: 1px solid grey;
    }
  }
}
</style>
