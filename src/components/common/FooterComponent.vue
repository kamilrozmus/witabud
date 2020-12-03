<template>
  <footer>
    <div class="content">
      <div class="info">
        <div class="info__content">
          <div class="info__header">
            <v-img src="@/assets/img/logo-white.png" style="width: 200px;" />
          </div>
          <div class="contact">
            <div class="contact__item">
              <div>Witold Goj</div>
              <div>ul. Krakowska 25/17</div>
              <div>32-500 Katowice</div>
            </div>
            <div class="contact__item mt-6">
              <div>KRS 000000002131</div>
              <div>NIP 2314214123</div>
            </div>
            <div class="contact__item mt-6">
              <div>Tel. +48 698 854 741</div>
              <div>E-mail: <span class="contact__item--mail">kontakt@witabud.pl</span></div>
            </div>
          </div>
          <div class="media">
            <div class="mt-3">
              Obserwuj
            </div>
            <div class="items">
              <img src="@/assets/img/face-logo.png" class="mx-2" style="width: 40px;" />
              <img src="@/assets/img/gplus-logo.png" style="width: 40px;" />
              <img src="@/assets/img/insta-logo.png" class="mx-2" style="width: 40px;" />
            </div>
          </div>
          <div class="menu">
            <ul class="menu__links">
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
        <img src="@/assets/img/map.png" />
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  name: 'FooterComponent'
}
</script>
<style lang="scss" scoped>

footer {
  width: 100%;
  height: 500px;
  margin: 0;
  padding: 0;
  color: white;
  font-size: 0.75em;
}

.info__header {
  margin: 35px 0;

}

.content {
  display: flex;
  align-items: center;
  width: auto;
}

.menu__links {
  display: flex;
  justify-content: space-between;
  padding: 0 0 30px 0;
  font-size: 0.75em;

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

  &__item--mail {
    color: $yellow-primary;
  }
}

.media {
  display: flex;
  justify-content: space-between;
  width: 65%;
  margin: 50px 0;
}

.info {
  background-color: $black-primary !important;
  display: flex;
  justify-content: center;
  width: 65vw;
  padding-left: 200px;
  padding-right: 150px;
  padding-top: 85px;
  padding-bottom: 130px;
  height: 100%;

  &__content {
    min-width: 550px;
    padding-right: 50px;
  }
}

.copyright {
  background: $dark-bg;
  height: 50px;

  span {
    display: flex;
    justify-content: center;
    align-content: center;
  }
}

@media screen and (max-width: 1024px) {

  .info {
    padding-bottom: 11.25em;
  }

  footer {
    margin-top: 100px;
  }

}

@media screen and (max-width: 768px) {

  .content {
    display: flex;
    flex-wrap: wrap;
  }

  .info {
    display: flex;
    justify-content: center;
    width: 100vw;
  }
}

@media screen and (max-width: 480px) {


  footer {
    font-size: 8px;
  }

  .info {
    width: 100vw !important;
    &__content {
      min-width: 370px;
    }
  }

  .menu__links {
    font-size: 9px;
  }
}
</style>
