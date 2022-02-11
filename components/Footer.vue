<template>
  <footer>
    <div class="footer-img-links">
      <nuxt-link :to="localePath('/')">
        <img src="~/assets/img/logo-mono.svg" alt="Seifi4u" />
      </nuxt-link>

      <div class="links">
        <nuxt-link class="nav-links" :to="localePath('/about')">
          {{ $t('navbar.about') }}
        </nuxt-link>
        <nuxt-link class="nav-links" :to="localePath('/pricing')">
          {{ $t('navbar.pricing') }}
        </nuxt-link>
      </div>
    </div>
    <div class="legal">
      <p>Developed by Capra</p>
      <p>©2022 Seifi4U, all rights reserved!</p>
      <p>Privacy Policy</p>
    </div>
  </footer>
</template>

<script>
export default {}
</script>

<style>
footer {
  background: #7782b0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 30vh;
  width: 100vw;
}

footer .links {
  display: flex;
  width: 50%;
  height: min-content;
  justify-content: space-evenly;
}

footer .nav-links {
  color: #ffffff;
  width: 6rem;
  margin-top: 1rem;
  text-align: center;
  display: flex;
  justify-content: center;
}

.footer-img-links {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 30%;
  height: 100%;
}

.nav-links > img {
  width: 50%;
  /* margin-top: 3rem;
  margin-bottom: 1rem; */
}

.legal {
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 0 3rem;
  width: 100%;

  border-top-color: rgb(255, 255, 255);
  border-top-style: solid;
  border-top-width: 1px;
}

.legal p {
  color: #ffffff;
  text-align: center;
  width: 20rem;
}

.links > a.nuxt-link-active {
  color: #ffffff;
}

@media only screen and (min-device-width: 300px) and (max-device-width: 812px) /* and (-webkit-min-device-pixel-ratio: 3) */ {
  footer {
    height: 18.25rem;
  }

  div.footer-img-links {
    width: 100%;
  }

  div.footer-img-links > div.links {
    display: none;
  }

  div.footer-img-links > a > img {
    margin: 0;
  }

  .legal {
    flex-direction: column;
    align-items: center;
  }
  .legal > p {
    font-size: 0.875rem;
  }

  .legal > p:nth-of-type(1) {
    font-size: 1rem;
  }
}
</style>
