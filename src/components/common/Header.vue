<template>
  <nav>
    <div>
      <v-img
        alt="logo"
        src="@/assets/img/logo-black.png"
        transition="scale-transition"
      />
    </div>
    <ul class="links" :class="{ 'nav-active': isActive}">
      <li><a href="/">Strona główna</a></li>
      <li><a href="/article">O firmie</a></li>
      <li><a href="#">Usługi</a></li>
      <li><a href="#">Realizacje</a></li>
      <li><a href="#">Kontakt</a></li>
    </ul>
    <button @click="isActive = !isActive">
      <div class="burger">
        <div class="line1"></div>
        <div class="line2"></div>
        <div class="line3"></div>
      </div>
    </button>
  </nav>
</template>
<script>

export default {
  data() {
    return {
      isActive: false
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles.scss';
* {
  margin-top: 0px;
  padding: 0px;
  box-sizing: border-box;
}

nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-height: 8vh;
  background-color: transparent;
  margin-left: 3%;
}

.links {
  display: flex;
  justify-content: space-around;
}

.links li {
  list-style: none;
  margin: 0 15px;
  margin-top: 10px;
}

.links a {
  color: $black-primary;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 16px;
  padding: 24px 10px;
  &:hover {
    border-bottom: 5px solid $yellow-primary;
    color: $yellow-primary;
    margin-top: 5px;
  }
  &:focus {
    outline: none;
    box-shadow: none;
  }
}

.burger {
  display: none;
}

.burger div {
  width: 25px;
  height: 3.5px;
  background-color: $black-primary;
  margin: 5.5px;
}

@media screen and (max-width: 1024px) {
  .links {
    display: flex;
    margin: 0px;

    li {
      margin: 0 5px;
    }

    a {
      font-size: 13px;
      padding: 30px 10px;
      &:hover {
        color: $yellow-primary;
        border-bottom: 5px solid $yellow-primary;
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .links {
    display: flex;
    flex-direction: column;
    position: absolute;
    right: 0px;
    top: 0;
    margin-top: 9vh;
    height: calc(100% - 9vh);
    background-color: $dark-bg;
    z-index: 9999;
    width: 250px;
    align-items: left;
    justify-content: flex-start;
    transform: translateX(100%);
    transition: transform 0.5s ease-in;

    li {
      margin: 10px 0;
    }

    a {
      font-size: 13px;
      color: $white-primary;
      &:hover {
        color: $yellow-primary;
        border-bottom: none;
      }
    }
  }

  .burger {
    display: block;
  }
}

.nav-active {
  transform: translateX(0%);
}

@media screen and (max-width: 480px) {
  nav {
    display: flex;
    justify-content: space-between;
    margin: 0 15px;
  }
}
</style>
