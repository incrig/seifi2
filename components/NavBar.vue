<template>
  <nav>
    <img
      id="burger"
      @click="toggleBurger"
      src="~assets/img/burger.svg"
      alt="Burger icon"
    />
    <!-- <a
      id="nav-phone-number"
      :href="`tel:${$t('descriptionCard.contacts.points[1]')}`"
      >{{ $t('descriptionCard.contacts.points[1]') }}</a
    > -->
    <div
      v-if="isBurgerOpen"
      class="nav-burger"
      v-bind:class="{ isOpen: isBurgerOpen }"
      @click="closeBurger"
    >
      <div class="burger-links" @click="closeBurger">
        <div class="navigation-links">
          <nuxt-link
            @click="closeBurger"
            class="nav-links"
            :to="localePath('/about')"
            >{{ $t('navbar.about') }}</nuxt-link
          >
          <nuxt-link
            @click="closeBurger"
            class="nav-links"
            :to="localePath('/pricing')"
            >{{ $t('navbar.pricing') }}</nuxt-link
          >
        </div>
        <div class="language-switcher">
          <nuxt-link
            @click="closeBurger"
            v-for="locale in availableLocales"
            :key="locale.code"
            :to="switchLocalePath(locale.code)"
            >{{ locale.name }}</nuxt-link
          >
        </div>
      </div>
    </div>
    <nuxt-link :to="localePath('/')">
      <img
        @click="closeBurger"
        id="logo"
        src="~/assets/img/logo.svg"
        alt="Seifi4u logo"
      />
    </nuxt-link>
    <div class="links" @click="closeBurger">
      <div class="navigation-links" @click="closeBurger">
        <nuxt-link
          id="about-link"
          @click="closeBurger"
          class="nav-links"
          :to="localePath('/about')"
          >{{ $t('navbar.about') }}</nuxt-link
        >
        <nuxt-link
          id="pricing-link"
          @click="closeBurger"
          class="nav-links"
          :to="localePath('/pricing')"
          >{{ $t('navbar.pricing') }}</nuxt-link
        >
      </div>
      <div class="language-switcher" @click="closeBurger">
        <nuxt-link
          class="lang-links"
          v-for="locale in availableLocales"
          :class="{
            isActiveLangLink: currentRoute.match(locale.code) !== null,
          }"
          :key="locale.code"
          :to="switchLocalePath(locale.code)"
          >{{ locale.name }}</nuxt-link
        >
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  updated() {
    console.log(this.isBurgerOpen)
  },
  mounted() {
    this.isBurgerOpen = false
    document.body.style.overflowY = 'auto'
  },
  data() {
    return {
      isBurgerOpen: false,
      currentRoute: this.$route.path,
    }
  },
  methods: {
    toggleBurger() {
      this.isBurgerOpen = !this.isBurgerOpen
    },
    closeBurger() {
      this.isBurgerOpen = false
    },
    test() {
      console.log(this)
    },
  },
  computed: {
    availableLocales() {
      return this.$i18n.locales
    },
  },
  watch: {
    isBurgerOpen: function () {
      if (this.isBurgerOpen) {
        document.body.style.overflowY = 'hidden'
        return
      }

      document.body.style.overflowY = 'auto'
    },
  },
}
</script>

<style>
nav {
  height: 6rem;
  width: 100%;
  max-width: 100%;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 0 2rem;
  position: sticky;
  top: 0;
  z-index: 100;
  /* position: absolute; */

  /* left: 0px; */

  background: #ffffff;
  box-shadow: 0px 4px 15px rgba(0, 104, 200, 0.1);
}

#logo {
  width: 10rem;
  margin-left: 3rem;
}

.language-switcher {
  display: flex;
  justify-content: space-evenly;
  width: 15rem;
}

.links {
  position: relative;
  width: 30%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
div > a.isActiveLangLink {
  color: rgb(165 9 174);
}

a.nuxt-link-active {
  color: rgb(165 9 174);
}

.navigation-links {
  display: flex;
  justify-content: space-around;
  width: 15rem;
}

a {
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 1rem;
  line-height: 20px;
  /* identical to box height */
  display: flex;
  align-items: center;
  text-align: center;
  text-decoration: none;
  color: #505050;
  margin: 0.5rem 0;
}

.nav-burger {
  position: absolute;
  display: flex;
  flex-direction: column;
  margin-top: 4rem;
  width: 100vw;
  height: 93vh;
  overflow: hidden;
  z-index: 1;

  /* background-image: url(~assets/img/opening-lines.svg); */
  background-image: url(~assets/img/lines-nav-burger.svg);
  background-color: #ffffff;
  background-size: cover;
  transition: ease-in-out 0.2s transform;
}

#nav-phone-number {
  display: none;
}

.burger-links {
  /* display: none; */
  display: absolute;
  right: 0;
  /* transform: translateX(150vw); */
  /* transition: ease-in-out 0.2s transform; */
}

.nav-burger.isOpen {
  transition: ease-in-out 0.2s transform;
  transform: translateX(0);
}

#burger {
  display: none;
  width: 3rem;
  position: absolute;
  z-index: 10001;
  right: 0;
  padding: 1rem;
}

.nav-links {
  text-decoration: none;
  font-style: normal;
  font-weight: 500;
  font-size: 1rem;
  line-height: 20px;
  /* identical to box height */
  display: flex;
  align-items: center;
  text-align: center;

  color: #505050;
}

/* ----------- iPhone X ----------- */

/* Portrait and Landscape */
@media only screen and (min-device-width: 300px) and (max-device-width: 812px) /* and (-webkit-min-device-pixel-ratio: 3) */ {
  nav {
    box-sizing: border-box;
    height: 4rem;
    padding: 0;
    justify-content: space-between;
    flex-direction: row-reverse;
    /* box-shadow: 0px 0px 10px rgba(0, 44, 193, 0.17); */
    z-index: 1001;
  }

  #nav-phone-number {
    display: flex;
    font-size: 0.9rem;
  }

  .links {
    display: none;
  }

  .burger-links {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: inset 0px 10px 20px 0px rgb(0 44 193 / 17%);
    transition: ease-in-out 0.2s transform;
    transform: translateX(0);
    box-sizing: border-box;
    padding-bottom: 10vh;
  }

  .burger-links > .navigation-links {
    justify-content: space-evenly;
    flex-direction: column;
    align-items: center;
    margin-bottom: 1rem;
  }

  .burger-links > .language-switcher {
    margin-top: 1rem;
  }

  .burger-links > div > a {
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  #burger {
    display: flex;
    position: relative;
    padding-left: 0rem;
    margin: 0;
    width: 2rem;
  }

  #logo {
    margin: 0;
    display: block;
    padding: 0 0 0 1rem;
    z-index: 1000;
    width: 7rem;
  }
}

/* Portrait */
@media only screen and (min-device-width: 300px) and (max-device-width: 812px) /* and (-webkit-min-device-pixel-ratio: 3) */and (orientation: portrait) {
}

/* Landscape */
@media only screen and (min-device-width: 300px) and (max-device-width: 812px) /* and (-webkit-min-device-pixel-ratio: 3) */and (orientation: landscape) {
}
</style>
