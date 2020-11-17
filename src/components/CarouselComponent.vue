<template>
  <div>
    <v-carousel v-model="model" hide-delimiters height="880px">
      <v-carousel-item
        v-for="(item, i) in slides"
        :key="i"
        transition="fade-transition"
        prev-icon="mdi-arrow-right"
        next-icon="mdi-arrow-right"
      >
        <v-sheet>
          <v-img :src="item.src" style="width: 100%;">
            <div style="transform: translate(20%, 90%);">
              <h1>
                <div class="name">Witold Goj</div>
                <div>Usługi remontowo</div>
                <div>Wykonczeniowe</div>
              </h1>
              <button class="slider-btn service" dark large>Zobacz usługi</button>
              <button class="slider-btn phone">Zadzwoń +48 639 859 748</button>
            </div>
            <div class="slider-footer">
              <div class="title">Zobacz nasze usługi</div>
              <button>
                <v-icon
                  large
                  class="mt-3"
                >
                  mdi-chevron-down
                </v-icon>
              </button>
            </div>
          </v-img>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
    <div class="services">
      <div v-for="(item, i) in servicesImg" :key="i" class="child">
        <img :src="item.src" class="img-child">
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data: () => ({
      model: 0,
      slides: [
        {
          src: require('@/assets/img/slide1.png')
        },
        {
          src: require('@/assets/img/slide2.png')
        }
      ],
      servicesImg: [
        {
          src: require('@/assets/img/painting.png'),
        },
        {
          src: require('@/assets/img/cutting.png')
        },
        {
          src: require('@/assets/img/floor.png')
        },
        {
          src: require('@/assets/img/desk-floor.png')
        }
      ]
    })
  }
</script>
<style lang="scss" scoped>
@import '@/assets/styles.scss';

h1 {
  font-size: 55px;
  margin-left: 10px;
  text-transform: uppercase;
  .name {
    font-size: 35px;
    color: $dirty-white;
  }
}

.slider-btn {
  position: relative;
  border: transparent;
  margin: 10px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  opacity: 100%;
  line-height: 145%;
  font-weight: 800;
  text-transform: uppercase;
  height: 50px;
  padding-top: 5px;
  cursor: pointer;
  &.service {
    color: $black-primary;
    background: $yellow-primary;
    width: 200px;
    &:hover {
      color: $yellow-primary;
      background: $black-primary;
      opacity: 75%;
    }
  }
  &.phone {
    color: $yellow-primary;
    background: $black-primary;
    opacity: 75%;
    width: 300px;
    &:hover {
      color: $black-primary;
      background: $yellow-primary;
      opacity: 100%;
    }
  }
}

.slider-footer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  transform: translateY(5%);
  .title {
    font-size: 18px !important;
    font-weight: 600;
    text-transform: uppercase;
  }
}

.services {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
}

.child {
  flex: 1 1 25%;
}

.img-child {
  width: 100%;
  max-height: 300px;
}
</style>
