<template>
  <div>
    <v-carousel v-model="model" hide-delimiters height="auto" class="sheet">
      <v-carousel-item
        v-for="(item, i) in slides"
        :key="i"
        prev-icon="mdi-arrow-right"
        next-icon="mdi-arrow-right"
      >
        <v-sheet class="sheet">
          <v-img :src="item.src" gradient="to top right, rgba(0,0,0,.33), rgba(0,0,0,.7)" style="width: 100%;">
            <div class="slide-desc">
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
        <button class="service-btn">{{ item.title }}</button>
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
          title: 'Malowanie'
        },
        {
          src: require('@/assets/img/cutting.png'),
          title: 'Tapetowanie'
        },
        {
          src: require('@/assets/img/floor.png'),
          title: 'Układanie kafelek'
        },
        {
          src: require('@/assets/img/desk-floor.png'),
          title: 'Układanie podłóg'
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

 .slide-desc {
    transform: translate(20%, 85%);
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
  display: flex;
  flex-wrap: wrap;
}

.img-child {
  display: block;
  width: 100%;
  height: 300px;
  display: flex;
  -webkit-filter: brightness(20%);
  filter:brightness(30%);
}

.service-btn {
  display: block;
  position: absolute;
  margin-top: 130px;
  margin-left: auto;
  margin-right: auto;
  color: $yellow-primary;
  font-weight: bold;
  border: 2px solid $yellow-primary;
  padding: 14px 28px;
  transform: translateX(100px);
}

@media screen and (max-width: 1710px) {
  .slide-desc {
    transform: translate(20%, 60%);
  }
  .slider-footer {
    transform: translateY(-8%);
  }
}

@media screen and (max-width: 1410px) {
  .slide-desc {
    transform: translate(20%, 40%);
  }
  .slider-footer {
    transform: translateY(-12%);
    margin-bottom: 100px;
  }
}

  @media screen and (max-width: 1235px) {
  .slide-desc {
    transform: translate(20%, 40%);
  }
  .slider-footer {
    transform: translateY(-14%);
  }
  h1 {
    font-size: 35px;
    margin-left: 10px;
    text-transform: uppercase;
    .name {
      font-size: 25px;
    }
  }
  .slider-footer {
    display: flex;
    justify-content: center;
    align-content: flex-end;
    margin-bottom: 100px;
  }
   .child {
    flex: 1 1 50%;
    display: flex;
    flex-wrap: wrap;
  }
  .slider-footer {
    display: flex;
    justify-content: center;
    align-content: flex-end;
  }

  .slider-btn {
    transform: translateX(10%);
    font-size: 13px;
    margin: 2px;
    &.service {
      width: 150px;
    }
    &.phone {
      width: 270px;
    }
  }
}

@media screen and (max-width: 1024px) {
  .slider-footer {
    transform: translateY(-14%);
    margin-bottom: 100px;
  }
  h1 {
    font-size: 35px;
    margin-left: 10px;
    text-align: justify;
    text-transform: uppercase;
    transform: translateX(10%);
    .name {
      transform: translateX(12%);
      margin: auto;
      font-size: 25px;
    }
  }
  .slider-btn {
    transform: translateX(40%);
    font-size: 13px;
    margin: 2px;
    &.service {
      width: 150px;
    }
    &.phone {
      width: 270px;
    }
  }
}

@media screen and (max-width: 800px) {

.slider-footer {
    transform: translateY(-20%);
    margin-bottom: 100px;

  }
  h1 {
    font-size: 28px;
    margin-left: 10px;
    text-align: justify;
    text-transform: uppercase;
    transform: translate(5%, -25%);
    .name {
      transform: translate(11%, -40%);
      margin: auto;
      font-size: 18px;
    }
  }

  .slider-btn {
    transform: translate(45%, -45%);
    font-size: 10px;
    &.service {
      width: 120px; 
    }
    &.phone {
      width: 180px;
    }
  }

}

@media screen and (max-width: 580px) {
h1 {
    font-size: 28px;
    margin-left: 10px;
    text-align: justify;
    text-transform: uppercase;
    transform: translate(1%, -25%);
    .name {
      transform: translate(15%, -40%);
      margin: auto;
      font-size: 18px;
    }
  }

  .slider-btn {
    transform: translate(18%, -45%);
    font-size: 10px;
    &.service {
      width: 120px; 
    }
    &.phone {
      width: 180px;
    }
  }
}

@media screen and (max-width: 480px) {
  .slider-footer {
    transform: translateY(-25%);
    .title {
      font-size: 14px !important;
      font-weight: 600;
      margin-top: 80px;
    }
    button .v-icon {
      margin-bottom: 35px;
    }
  }
  h1 {
    padding-top: 100px;
    font-size: 30px;
    margin-left: 10px;
    text-align: justify;
    text-transform: uppercase;
    transform: translate(-10%, -45%);
    .name {
      transform: translate(18%, -40%);
      margin: auto;
      font-size: 22px;
    }
  }

  .slider-btn {
    transform: translate(1%, -150%);
    font-size: 13px;
    font-weight: bold !important;
    margin: 2px;
    &.service {
      width: 290px;
    }
    &.phone {
      width: 290px;
    }
  }

  .child {
    flex: 1 1 100%;
    display: flex;
    flex-wrap: wrap;
  }
}

@media screen and (max-width: 440px) {
  h1 {
    padding-top: 100px;
    font-size: 28px;
    margin-left: 10px;
    text-align: justify;
    text-transform: uppercase;
    transform: translate(-14%, -45%);
    .name {
      transform: translate(22%, -40%);
      margin: auto;
      font-size: 22px;
    }
  }
  .slider-btn {
    transform: translate(-8%, -150%);
    font-size: 13px;
    font-weight: bold !important;
    margin: 2px;
    &.service {
      width: 290px;
    }
    &.phone {
      width: 290px;
    }
  }
}
</style>
