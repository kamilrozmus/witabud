<template>
  <v-app>
    <Header />
    <v-main class="mt-2">
      <MainPage />
    </v-main>
  </v-app>
</template>

<script>
import MainPage from './components/MainPage';
import Header from './components/Header';

export default {
  name: 'App',

  components: {
    MainPage,
    Header
  },

  data: () => ({
    //
  }),
};
</script>
