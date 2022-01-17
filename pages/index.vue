<template>
  <div class="app">
    <nav-bar />
    <opening />
    <trust-us />
    <hours-location />
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Footer from '~/components/Footer.vue'
import TrustUs from '~/components/TrustUs.vue'

export default Vue.extend({
  components: { TrustUs, Footer },
  // middleware: 'redirect',
})
</script>

<style>
html {
  font-family: 'Montserrat', sans-serif;
  font-size: 18px;
}
body {
  overflow-x: hidden;
  margin: 0;
  box-sizing: border-box;
  /* padding: 0 1rem; */
  width: 100vw;
  max-width: 100vw;
  position: relative;
}

/* .app {
  overflow: hidden;
  max-width: 1920px;
} */
/* ----------- iPhone X ----------- */

/* Portrait and Landscape */
@media only screen and (min-device-width: 300px) and (max-device-width: 812px) /* and (-webkit-min-device-pixel-ratio: 3) */ {
  section {
    padding: 1rem;
  }
}

@media (min-width: 1200px) {
  html {
    font-size: 16px;
  }
}

@media screen and (min-width: 1920px) {
  html {
    font-size: 20px;
  }
}
</style>
