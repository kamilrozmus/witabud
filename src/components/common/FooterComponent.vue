<template>
  <footer>
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
        <img src="@/assets/img/map.png" />
      </div>
    </div>

    <div class="copyright">
      <span>2020 © Made with passion by Kamil Rozmus</span>
    </div>
  </footer>
</template>
<style lang="scss" scoped>
@import '@/assets/styles.scss';

footer {
  width: 100%;
  height: 500px;
  margin: 0;
  padding: 0;
  color: white;
  font-size: 12px;
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
  padding: 0 0 30px 0;
  font-size: 12px;
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
  width: 65%;
  margin: 50px 0;
}

.info {
  background-color: $black-primary !important;
  width: 65vw;
  padding-left: 20%;
  padding-right: 30px;
  padding-bottom: 20px;
  margin-top: 50px;
  height: 100%;

}

.map {
  overflow: hidden;
  position: relative;
  height: auto;
  margin-top: 69px;
}

.map img {
  max-width: 100%;
  min-height: 100%;
  object-fit: cover;
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
  footer {
    margin-top: 100px;
  }
}

@media screen and (max-width: 768px) {

  .info {
    padding-left: 10%;
  }
}

@media screen and (max-width: 480px) {
  footer {
    font-size: 9px;
  }

  .info {
    width: 100vw !important;
  }

  .links {
    font-size: 9px;
  }

}

</style>
