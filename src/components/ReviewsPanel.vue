<template>
  <div class="reviews-panel">
    <div class="childs">
      <div class="childs__child my-5">
        <v-avatar class="mt-6">
          <img
            src="https://picsum.photos/200"
            alt="avatar"
          >
        </v-avatar>
        <div class="ml-5" style="max-width: 250px;">
          <div class="name">Joanna Kowalska</div>
          <span class="review-desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium odio illo voluptates repudiandae distinctio est
          </span>
        </div>
      </div>
      <div class="child my-5">
        <v-avatar class="mt-6">
          <img
            src="https://picsum.photos/202"
            alt="avatar"
          >
        </v-avatar>
        <div class="ml-5" style="max-width: 250px;">
          <div class="name">Wojciech Tomaszkiewicz</div>
          <span class="review-desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium odio illo voluptates repudiandae distinctio est
          </span>
        </div>
      </div>
      <div class="child my-5">
        <v-avatar class="mt-6">
          <img
            src="https://picsum.photos/201"
            alt="avatar"
          >
        </v-avatar>
        <div class="ml-5" style="max-width: 250px;">
          <div class="name">Karol Dobrowolski</div>
          <span class="review-desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium odio illo voluptates repudiandae distinctio est
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: 'ReviewsPanel'
}
</script>
<style lang="scss" scoped>

.reviews-panel {
  padding-top: 0;
  display: flex;
  justify-content: center;
  background: $dark-bg;

  .childs {
    display: flex;
    justify-content: center;

    &__child {
      display: flex;
      border: 0.1px solid $contrast-black;
      padding: 14px 28px;
      margin: 0 0.625em;

      .v-avatar img {
        border: 2px solid $yellow-primary;
      }
    }
  }

  .name {
    color: $grey-name;
  }

  .review-desc {
    font-weight: 300;
    color: $grey-desc;
  }

  @media screen and (max-width: 1024px) {
    .childs {
      margin: 0 40px;

      &__child {
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;

        .v-avatar {
          margin-bottom: 10%;
        }
      }
    }
  }
}

@media screen and (max-width: 768px) {

  .childs {
    margin: 0 1.25em;
    flex: 1 1 100%;
    display: flex;
    flex-wrap: wrap;

    &__child {
      width: 80vw;
      text-align: center;
      .v-avatar {
        margin-bottom: 0;
      }
    }
  }
}

@media screen and (max-width: 480px) {

  .childs {
    margin: 0 40px;
    flex: 1 1 100%;
    display: flex;
    flex-wrap: wrap;

    &__child {
      text-align: center;

      .v-avatar {
        margin-bottom: 10%;
      }
    }
  }
}
</style>
