<template>
  <div class="content">
    <div class="header">
      <h1>
        Realizacje
      </h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate harum necessitatibus ratione sunt ipsa.
      </p>
      <button>
        <v-icon
          large
        >
          mdi-chevron-left
        </v-icon>
      </button>
      <button>
          <v-icon
            large
          >
            mdi-chevron-right
          </v-icon>
        </button>
        <button>
          Zobacz więcej
        </button>
    </div>
    <div v-for="(item, i) in items" :key="i" class="item-done">
      <img :src="item.src">
      <div class="title">{{ item.title }}</div>
      <div class="desc">{{ item.desc }}</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [
        {
          src: require('@/assets/img/bath-done.png'),
          title: 'Układanie kafelek w domu zdrojowym w Krynicy',
          desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium odio illo voluptates repudiandae distinctio est'
        },
        {
          src: require('@/assets/img/wall-done.png'),
          title: 'Tapetowanie w salonie kosmetycznym',
          desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium odio illo voluptates repudiandae distinctio est'
        },
        {
          src: require('@/assets/img/stripes-done.png'),
          title: 'Tapetowanie w restauracji francuskiej',
          desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium odio illo voluptates repudiandae distinctio est'
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
@import '@/assets/styles.scss';

.content {
  display: flex;
  justify-content: space-around;
  margin: 40px 20%;
}


.header {
  width: 20%;
  h1 {
    text-transform: uppercase;
  }
  p {
    color: $description;
    font-weight: 200 !important;
  }
  button {
    color: $yellow-primary;
    text-transform: uppercase;
  }
}

.item-done {
  border: 1px solid grey;
  padding: 25px;
  margin: 0 10px 0 10px;
  width: 300px;
  .title {
    color: $black-primary;
    font-weight: bold;
    margin-bottom: 5%;
    .desc {
      color: $description;
    }
  }
}
</style>
