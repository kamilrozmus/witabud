<template>
  <div class="content">
    <div
      v-for="(item, index) in items"
      :key="index"
      class="item-done"
    >
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

.content {
  display: flex;
  justify-content: center;
}

.item-done {
  padding: 1.55em;
  width: 300px;

  .text {
    border: 1px solid grey;
    border-top: transparent;
    padding: 1.25em;
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
      margin-top: 1.25em;

      p {
        margin-left: 1.25em;
        margin-top: 1%;
      }
    }

    .buttons {
      display: flex;
      justify-content: space-between;
    }
  }

  .item-done {
    margin: 0 1.25em;
    flex: 1 1 100%;
    display: flex;
    padding: 1.55em;

    .text {
      border: 1px solid grey;
      border-left: transparent;
      padding: 1.25em;
    }

    img {
      width: 200px;
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
    margin-right: 1.25em;

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
    margin-right: 75px;
    .text {
      border: 1px solid grey;
      border-top: transparent;
      padding: 1.25em;
    }
  }

  img {
    width: 100px;
    height: 100px;
    transform: translateY(6px);
  }
}
</style>
