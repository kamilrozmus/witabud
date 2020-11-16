<template>
  <v-app-bar
    app
    absolute
    color="transparent"
    dark
    flat
    class="header"
  >
    <div class="d-flex align-center">
      <v-img
        alt="logo"
        class="shrink mr-2"
        contain
        src="@/assets/img/logo-black.png"
        transition="scale-transition"
      />
    </div>

    <v-spacer></v-spacer>

    <nav>
      <ul>
        <li><a href="#">Strona główna</a></li>
        <li><a href="#">O firmie</a></li>
        <li><a href="#">Usługi</a></li>
        <li><a href="#">Realizacje</a></li>
        <li><a href="#">Kontakt</a></li>
      </ul>
    </nav>
  </v-app-bar>
</template>
<style lang="scss" scoped>
@import '@/assets/styles.scss';
.header {
  margin: auto;
  width: 66%;
}

nav {
  float: right;
}

nav ul {
  margin: 0;
  padding: 0;
  list-style: none;

}

nav li {
  display: inline-block;
  margin-left: 70px;
  padding: 23px 0 12px 0;
  position: relative;

}

nav a {
  color: black;
  text-decoration: none;
  font-weight: 800;
  font-family: 'LeagueSpartan', sans-serif;
  text-transform: uppercase;
  padding: 21px 10px;
  font-size: 14px;

  &:hover {
    border-bottom: 5px solid $yellow-primary;
    color: $yellow-primary;
    margin-top: 15px;
  }
  &:focus {
    outline: none;
    box-shadow: none;
  }
}

</style>
