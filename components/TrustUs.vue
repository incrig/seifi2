<template>
  <section id="trust-us">
    <div class="text-container">
      <h1 class="trust-heading">{{ $t('trustUsHeading') }}</h1>
      <!-- <p class="trust-description">{{ $t('trustUsDescription') }}</p> -->
    </div>
    <div class="cards">
      <trust-us-card type="safe" image="shield" />
      <trust-us-card type="convenient" image="clock" />
      <trust-us-card type="confidential" image="secure" />
    </div>
    <nuxt-link id="about-us" :to="localePath('/pricing')">
      {{ $t('trustUs.aboutUsButton') }}
    </nuxt-link>
    <img class="bg-stripes" src="~/assets/img/trustUsBG.svg" alt="stripes" />
  </section>
</template>

<script>
import TrustUsCard from './TrustUsCard.vue'

export default {
  components: { TrustUsCard },
}
</script>

<style>
section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  box-sizing: border-box;
  /* height: 100vh; */
  height: min-content;
  background: #ebedf5;
  /* padding: 5rem 0; */
  /* background-image: url(~assets/img/trustUsBG.svg); */
}

#trust-us {
  padding-bottom: 5rem;
  padding-top: 5rem;
  position: relative;
}

#about-us {
  display: flex;
  z-index: 1;
  justify-content: center;
  align-items: center;
  text-align: center;
  text-decoration: none;
  width: 202px;
  height: 53px;

  font-style: normal;
  font-weight: 600;
  font-size: 1rem;
  line-height: 20px;

  color: #ffffff;

  background: #7782b0;
  border-radius: 26.5px;
}

.text-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
}

.trust-heading {
  font-style: normal;
  font-weight: 500;
  font-size: 2.25rem;
  line-height: 143%;
  /* or 51px */
  display: flex;
  align-items: center;
  text-transform: uppercase;
  margin-bottom: 0.5rem;
  margin: 1rem 0;
  color: #313131;
}

.trust-description {
  font-style: normal;
  font-weight: normal;
  font-size: 1.25;
  line-height: 134.9%;
  /* or 27px */
  display: flex;
  align-items: center;
  text-align: center;
  margin-top: 0;
  margin-bottom: 2rem;
  color: #505050;
}

.bg-stripes {
  position: absolute;
  bottom: -0.1rem;
  left: 0;
  margin: 10rem 0 0 0;
}

.cards {
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  /* margin: 2rem; */
  /* height: 100%; */
}
/* ----------- iPhone X ----------- */

/* Portrait and Landscape */
@media only screen and (min-device-width: 300px) and (max-device-width: 812px) /* and (-webkit-min-device-pixel-ratio: 3) */ {
  .text-container {
    width: 100%;
    text-align: center;
  }

  .cards {
    width: 100%;
  }

  .text-container > h1 {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    font-size: 1.5rem;
    line-height: 143%;
    /* or 34px */
    display: flex;
    align-items: center;
    text-align: center;
    text-transform: uppercase;

    color: #313131;
  }

  .text-container > p {
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 1.125rem;
    line-height: 134.9%;
    /* or 24px */
    display: flex;
    align-items: center;
    text-align: center;

    color: #505050;
  }
}
</style>
