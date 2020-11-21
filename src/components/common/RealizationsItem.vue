<template>
  <div class="content">
   <div v-for="(item, i) in items" :key="i" class="item-done">
      <img :src="item.src">
      <div class="text">
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
  justify-content: center;
}

.item-done {
  padding: 25px;
  width: 300px;

  .text {
    border: 1px solid grey;
    border-top: transparent;
    padding: 20px;
  }

  img {
    width: 250px;
    height: 250px;
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

@media screen and (max-width: 768px) {

  .content {
    margin: 0 40px;
    flex: 1 1 100%;
    display: flex;
    flex-wrap: wrap;
  }
  .header {
  width: 90vw;
  .header-title {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    p {
      margin-left: 20px;
      margin-top: 1%;
    }

  }
  .buttons {
    display: flex;
    justify-content: space-between;
  }

}
  .item-done {
    margin: 0 20px;
    flex: 1 1 100%;
    display: flex;
    padding: 25px;
    margin: 0 100px 0 10px;

    .text {
      border: 1px solid grey;
      border-left: transparent;
      padding: 20px;
    }

    img {
      width: 300px;
      height: auto;
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
}


@media screen and (max-width: 480px) {

.content {
      margin: 0 40px;
      flex: 1 1 100%;
      display: flex;
      flex-wrap: wrap;
    }
    .header {
      text-align: justify;
      display: flex;
      flex-direction: column;
      margin-top: 30px;
      margin-right: 20px;
      .header-title {
        display: flex;
        flex-direction: column;
        h1 {
          margin-left: 5%;
        }
      }
      .buttons {
        display: flex;
        justify-content: space-between;
        width: 350px;
        margin-bottom: 30px;
      }
      p {
        width: 350px;
      }
    }
    .item-done {
      width: 350px;
      margin: 0 40px;
      flex: 1 1 100%;
      display: flex;
      flex-wrap: wrap;

      .text {
        border: 1px solid grey;
        border-top: transparent;
        padding: 20px;
      }
    }
    img {
      width: 300px;
      height: 300px;
      transform: translateY(6px);
    }
  }

</style>
