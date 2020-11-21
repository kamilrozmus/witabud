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
        <div class="ml-5" style="max-width: 250px;">
          <div>Joanna Kowalska</div>
          <span class="review-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium odio illo voluptates repudiandae distinctio est</span>
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
          <div class="name">Joanna Kowalska</div>
          <span class="review-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium odio illo voluptates repudiandae distinctio est</span>
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
          <div>Joanna Kowalska</div>
          <span class="review-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium odio illo voluptates repudiandae distinctio est</span>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>

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
      border: 0.1px solid #393939;
      padding: 14px 28px;
      margin: 0 10px;
      .v-avatar img {
        border: 2px solid $yellow-primary;
      }
      .name {
        //color
      }

    }
  }
  .review-desc {
    font-weight: 300;
    color: #797979;
  }

  @media screen and (max-width: 1024px) {
    .childs {
      margin: 0 40px;

      .child {
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
    margin: 0 20px;
    flex: 1 1 100%;
    display: flex;
    flex-wrap: wrap;

    .child {
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

    .child {
      text-align: center;
      .v-avatar {
        margin-bottom: 10%;
      }
    }
  }
}
</style>
