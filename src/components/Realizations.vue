<template>
  <div class="content">
    <div class="header">
      <div>
        <h1>
          Realizacje
        </h1>
      </div>
      <div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate harum necessitatibus ratione sunt ipsa.
        </p>
      </div>
      <div>
        <div class="buttons">
        <div>
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
          </div>
          <button>
            Zobacz więcej
          </button>
        </div>
      </div>
    </div>
    <div v-for="(item, i) in items" :key="i" class="item-done">
      <img :src="item.src">
      <div class="text">
        <div class="title">{{ item.title }}</div>
        <div class="desc">{{ item.desc }}</div>
      </div>
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
  margin-right: 40px;
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
  padding: 25px;
  margin: 0 10px 0 10px;
  width: 300px;

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

@media screen and (max-width: 768px) {

  .content {
    margin: 0 40px;
    flex: 1 1 100%;
    display: flex;
    flex-wrap: wrap;
  }
  .header {
    text-align: justify;
    display: flex;
    margin-top: 30px;
    width: 500px;

    
    p {
      width: 350px;
    }
  }
  .buttons {
      margin-bottom: 30px;
    }
  .item-done {
    margin: 0 20px;
    flex: 1 1 100%;
    display: flex;
    padding: 25px;
    margin: 0 10px 0 10px;
    width: 300px;

    .text {
      border: 1px solid grey;
    border-left: transparent;
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
      transform: translateY(6px);
    }
  }
</style>
