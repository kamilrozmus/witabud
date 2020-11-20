<template>
<div>
  <div class="title-bar">
    <span>Układanie kafelek</span>
  </div>
  <div class="main">
  <div class="d-flex">
    <div style="margin-right: 50px;">
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
        <button>Wyślij</button>
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
  <div class="realizations">
    <span>Realizacje</span>
    <realizations-item :items="items" />
  </div>
  <button>Zobacz więcej</button>
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

.main {
  margin: 0 200px;
}

.form {
  background: black;
  padding: 40px;
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

button {
  background: $yellow-primary;
  width: 100%;
  font-weight: bold;
  border: 2px solid $yellow-primary;
  padding: 14px 28px;
}
</style>
