<template>
  <nav>
    <div>
      <v-img
        alt="logo"
        src="@/assets/img/logo-black.png"
        transition="scale-transition"
      />
    </div>
    <ul
      class="links"
      :class="{ 'nav-active': isActive}"
    >
      <li><a href="/">Strona główna</a></li>
      <li><a href="#">O firmie</a></li>
      <li><a href="/article">Usługi</a></li>
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
  name: 'Header',
  data() {
    return {
      isActive: false
    }
  }
}
</script>
<style lang="scss" scoped>

* {
  margin-top: 0;
  padding: 0;
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

  li {
    list-style: none;
    margin: 0 1em;
    margin-top: .8em;
  }

  a {
    color: $black-primary;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 1em;
    padding: 1.5em .8em;
    &:hover {
      border-bottom: .3em solid $yellow-primary;
      color: $yellow-primary;
      margin-top: .3em;
    }
    &:focus {
      outline: none;
      box-shadow: none;
    }
  }
}

.burger {
  display: none;

  div {
    width: 1.5em;
    height: .26em;
    background-color: $black-primary;
    margin: .2em;
  }
}

@media screen and (max-width: 1024px) {

  .links {
    display: flex;
    margin: 0px;

    li {
      margin: 0 .2em;
    }

    a {
      font-size: .8em;
      padding: 1.5em 0.7em;
      &:hover {
        color: $yellow-primary;
        border-bottom: .3em solid $yellow-primary;
      }
    }
  }
}

@media screen and (max-width: 768px) {

  nav {
    display: flex;
    justify-content: space-between;
    margin: 0 2em;
  }

  .links {
    display: flex;
    flex-direction: column;
    position: absolute;
    right: 0;
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
      margin: .7em 0;
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
    margin: 0 1em;
  }
}
</style>
