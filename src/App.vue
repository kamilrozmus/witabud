<template>
  <v-app>
    <Header />
    <v-main class="mt-2">
     <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import Header from './components/Header';

export default {
  name: 'App',

  components: {
    Header
  },

  data: () => ({
    //
  }),
};
</script>
<style lang="scss">
.v-application {
  font-family: 'Spartan', sans-serif;
  letter-spacing: 0px;
}

@media screen and (max-width: 768px) {
  .v-application {
    overflow-x: hidden;
  }
}

button:focus {
  outline: none;
  box-shadow: none;
}
</style>
