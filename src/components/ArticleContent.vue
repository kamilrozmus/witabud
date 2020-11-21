<template>
<div>
  <div class="title-bar">
    <span>Układanie kafelek</span>
  </div>
  <div class="main">
    <div class="main-content d-flex">
      <div class="content">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia mollitia sunt iste libero praesentium blanditiis repellendus doloremque laudantium, accusantium voluptates? Nihil culpa hic dolor et recusandae! Dolorem accusamus adipisci repellendus?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia mollitia sunt iste libero praesentium blanditiis repellendus doloremque laudantium, accusantium voluptates? Nihil culpa hic dolor et recusandae! Dolorem accusamus adipisci repellendus?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia mollitia sunt iste libero praesentium blanditiis repellendus doloremque laudantium, accusantium voluptates? Nihil culpa hic dolor et recusandae! Dolorem accusamus adipisci repellendus?
        </p>
        <img src="@/assets/img/bathroom.png" style="width: 100%; height: auto;">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia mollitia sunt iste libero praesentium blanditiis repellendus doloremque laudantium, accusantium voluptates? Nihil culpa hic dolor et recusandae! Dolorem accusamus adipisci repellendus?
        </p>
      </div>

      <div style="">
        <div class="form">
          <span>Wyślij wiadomość</span>
          <input placeholder="Imie i nazwisko"/>
          <input placeholder="Email lub telefon"/>
          <input placeholder="Temat"/>
          <input placeholder="Treść"/>
          <button class="yellow-btn">Wyślij</button>
        </div>
        <div class="side-article">
          <span>Donec nonummy</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea officia quasi odio minus quam laboriosam ut repudiandae impedit autem pariatur reprehenderit facilis sit aspernatur in possimus, blanditiis commodi tempora? Aperiam.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea officia quasi odio minus quam laboriosam ut repudiandae impedit autem pariatur reprehenderit facilis sit aspernatur in possimus, blanditiis commodi tempora? Aperiam.
          </p>
        </div>
      </div>
    </div>
  </div>
  <div>
    <div>
      <realizations-item :items="items" class="realizations"/>
    </div>
    <button class="yellow-btn">Zobacz więcej</button>
    </div>
    <div class="buttons-bg">
      <div class="buttons">
        <button class="service-btn">Malowanie</button>
        <button class="service-btn">Tapetowanie</button>
        <button class="service-btn">Układanie paneli</button>
      </div>
    </div>
  </div>
</template>
<script>
import RealizationsItem from './common/RealizationsItem.vue'
export default {
  components: {
    RealizationsItem
  },
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
        },
        {
          src: require('@/assets/img/table.png'),
          title: 'Układanie kafelek w gospodzie u babci Maliny',
          desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium odio illo voluptates repudiandae distinctio est'
        },
        {
          src: require('@/assets/img/sink.png'),
          title: 'Układanie kafelek w domu zdrojowym w Krynicy',
          desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium odio illo voluptates repudiandae distinctio est'
        },
        {
          src: require('@/assets/img/kitchen.png'),
          title: 'Układanie kafelek w salonie kosmetycznym',
          desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium odio illo voluptates repudiandae distinctio est'
        },
        {
          src: require('@/assets/img/bath-done.png'),
          title: 'Układanie kafelek w domu zdrojowym w Krynicy',
          desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium odio illo voluptates repudiandae distinctio est'
        },
        {
          src: require('@/assets/img/wall-done.png'),
          title: 'Tapetowanie w salonie kosmetycznym',
          desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium odio illo voluptates repudiandae distinctio est'
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
@import '@/assets/styles.scss';

.title-bar {
  background: $yellow-primary;
  height: 70px;
  width: 100%;
  margin-bottom: 45px;
  span {
    margin-left: 200px;
    text-transform: uppercase;
  }
}

.content {
  margin-right: 50px;
  min-width: 400px;
}

.realizations {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0 15%;
}

.main {
  padding: 0 200px;
  display: flex;
  justify-content: center;
}

.form {
  background: black;
  padding: 40px;
  min-width: 300px;
  span {
    color: $white-primary;
    text-transform: uppercase;
  }
}

.side-article {
  background: grey;
  padding: 40px;
  margin-top: 35px;
  span {
    color: $black-primary;
    text-transform: uppercase;
  }
}

input {
  background: white;
  height: 40px;
  width: 100%;
  padding: auto;
  margin: 15px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  text-indent: 20px;
}

.yellow-btn {
  background: $yellow-primary;
  width: 100%;
  font-weight: bold;
  border: 2px solid $yellow-primary;
  padding: 14px 28px;
  margin: 20px 0 45px 0;
}

.buttons-bg {
  background: rgb(243, 240, 240);
  padding: 40px 0;
  .buttons {
    display: flex;
    justify-content: center;
    transform: translateX(-100px);
  }
}

.service-btn {
  display: block;
  margin: 0 15px;
  color: $black-primary;
  font-weight: bold;
  width: 200px;
  border: 2px solid $black-primary;
  padding: 14px 14px;
  transform: translateX(100px);
  &:hover {
    background: $dark-bg;
    color: $white-primary;
  }
}


@media screen and (max-width: 1720px) {
  .realizations {
    padding: 0;
  }
}

@media screen and (max-width: 780px) {
  .realizations {
    width: 100%;
  }

  .main-content {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
}
</style>
