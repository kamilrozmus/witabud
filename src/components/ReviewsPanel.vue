<template>
  <div class="reviews-panel">
    <div class="childs">
      <div class="child my-5">
        <v-avatar class="mt-6">
          <img
            src="https://picsum.photos/200"
            alt="avatar"
          >
        </v-avatar>
        <div class="ml-5" style="max-width: 270px;">
          <div>Joanna Kowalska</div>
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium odio illo voluptates repudiandae distinctio est</span>
      </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/styles.scss';

.reviews-panel {
  padding-top: 0;
  display: flex;
  justify-content: center;
  background: $dark-bg;

  .childs {
    display: flex;
    justify-content: center;

    .child {
      display: flex;
      border: 1px solid white;
    }
  }
}
</style>
