<template>
  <div class="content">
    <div class="header">
      <div class="header-title">
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
      </div>
      <div>
        <div class="buttons">
          <div>
            <button>
              <v-icon large>
                mdi-chevron-left
              </v-icon>
            </button>
            <button>
              <v-icon large>
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
    <realizations-item :items="items" />
  </div>
</template>
<script>

import RealizationsItem from './common/RealizationsItem.vue'

export default {
  name: 'Realizations',
  components: { RealizationsItem },
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

.content {
  display: flex;
  justify-content: space-around;
  margin: 40px 20%;
}


.header {
  width: 20%;
  margin-right: 1.25em;
  transform: translate(150px, 60px);
  h1 {
    font-size: 1.375em;
    text-transform: uppercase;
  }
  p {
    color: $description;
    font-size: 13px;
    font-weight: 200 !important;
  }
  button {
    color: $yellow-primary;
    text-transform: uppercase;
  }
}

@media screen and (max-width: 1235px) {

  .content {
    margin: 30px;
    display: flex;
    flex-wrap: wrap;
    width: 90vw;
  }

  .header {
    width: 90vw;
    transform: translateX(0.625em);
    .header-title {
      display: flex;
      justify-content: space-between;
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
}
</style>
