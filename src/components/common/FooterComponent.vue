<template>
  <div class="container">
    <div class="alert">
      <div class="message">
        {{ alertMsg }}
      </div>
      <div class="phone">
        <ul class="list">
          <li>Zadzwoń</li>
          <li class="mx-4"><img src="@/assets/img/phone-ico.png" style="width: 30px; height: 30px;" /></li>
          <li>+48 615 152 156</li>
        </ul>
      </div>
    </div>

    <div class="content">
      <div class="info">
        <div>
          <div class="header">
            <v-img src="@/assets/img/logo-white.png" style="width: 200px;" />
          </div>
          <div class="contact">
            <div class="item">
              <div>Witold Goj</div>
              <div>ul. Krakowska 25/17</div>
              <div>32-500 Katowice</div>
            </div>
            <div class="item mt-6">
              <div>KRS 000000002131</div>
              <div>NIP 2314214123</div>
            </div>
            <div class="item mt-6">
              <div>Tel. +48 698 854 741</div>
              <div>E-mail: <span class="mail">kontakt@witabud.pl</span></div>
            </div>
          </div>
          <div class="media">
            <div class="mt-3">
              Obserwuj
            </div>
            <div class="items">
              <img src="@/assets/img/face-logo.png" class="mx-2" style="width: 40px;"/>
              <img src="@/assets/img/gplus-logo.png" style="width: 40px;"/>
              <img src="@/assets/img/insta-logo.png" class="mx-2" style="width: 40px;"/>
            </div>
          </div>
          <div class="menu">
            <ul class="links">
            <li><a href="#">Strona główna</a></li>
            <li><a href="#">O firmie</a></li>
            <li><a href="#">Usługi</a></li>
            <li><a href="#">Realizacje</a></li>
            <li><a href="#">Kontakt</a></li>
          </ul>
          </div>
        </div>
      </div>
      <div class="map">
        <!-- <img src="@/assets/img/map.png" /> -->
      </div>
    </div>

    <div class="copyright">
      {{ "2020 © Made with passion by Kamil Rozmus" }}
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      alertMsg: 'Nagły wypadek? Potrzebujesz szybkiej pomocy?'
    }
  }
}
</script>
<style lang="scss" scoped>
@import '@/assets/styles.scss';

.container {
  width: 100%;
  height: auto;
  margin: 0;
  padding: 0;
  color: grey;
}

.alert {
  position: absolute;
  display: flex;
  justify-content: space-around;
  padding: 20px 0 15px;
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
    font-size: 25px;
  }
  .phone {
    display: flex;
    justify-content: space-between;
    font-size: 21px;
    color: $black-primary;
    font-weight: bold;
  }
}

.header {
  margin: 35px 0;

}

.content {
  display: flex;
  align-items: center;
  width: auto;
}

.links {
  display: flex;
  justify-content: space-between;
  padding: 0;
  li {
    list-style: none;
  }
  a {
    text-decoration: none;
    color: $white-primary;
    text-transform: uppercase;
  }
}

.contact {
  display: flex;
  justify-content: space-between;
  margin: 35px 0;
  .mail {
    color: $yellow-primary;
  }
}

.media {
  display: flex;
  justify-content: space-between;
  width: 52%;
  margin: 50px 0;
}

.info {
  background-color: $black-primary !important;
  width: 65vw !important;
  padding-left: 14%;
  height: 600px;
  padding-right: 30px;
  margin-top: 50px;

}

.map {
  max-width: calc(100vw - 65vw);
  -webkit-filter: brightness(20%);
  filter:brightness(30%);
}

.copyright {
  display: flex;
  justify-content: center;
}
</style>
