<template>
  <div class="alert">
    <div class="message">
      {{ alertMsg }}
    </div>
    <div class="phone">
      <ul class="list">
        <li>Zadzwoń</li>
        <li class="mx-4">
          <img
            src="@/assets/img/phone-ico.png"
            style="width: 30px; height: 30px;"
          >
        </li>
        <li>+48 615 152 156</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Alert',
  data() {
    return {
      alertMsg: 'Nagły wypadek? Potrzebujesz szybkiej pomocy?'
    }
  }
}
</script>

<style lang="scss" scoped>

.alert {
  position: absolute;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 1em 0 1em;
  background-color: $yellow-primary;
  width: 100vw;
  height: 70px;

  .list {
    display: flex;
    justify-content: space-between;

    li {
      list-style: none;
    }
  }

  .message {
    font-family: 'Roboto', sans-serif;
    font-size: 29px;
  }

  .phone {
    display: flex;
    justify-content: space-between;
    font-size: 1.43em;
    color: $black-primary;
    font-weight: bold;
    margin-top: 5px;
  }
}

@media screen and (max-width: 1023px) {

  .alert {
    display: flex;
    flex-wrap: wrap;
    height: 150px;
  }
}

@media screen and (max-width: 768px) {

  .alert {
    height: 100px;
    .message {
      font-size: 1.375em;
    }

    .phone {
      font-size: 18px;
    }
  }
}

@media screen and (max-width: 480px) {

  .alert {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 1.25em 0 1em;
    height: 150px;

    .message {
      font-family: 'Roboto', sans-serif;
      font-size: 18px;
    }
  }
}
</style>
