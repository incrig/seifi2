<template>
  <div>
    <NavBar />
    <section id="pricing-section">
      <prices-table :priceMultiplier="1" type="registered" />
      <prices-table id="lower-table" :priceMultiplier="2" type="anonymous" />
      <additional-features />
      <h2 id="rent-late">{{ $t('pricingPage.rentLatePayment') }}</h2>
    </section>
    <Footer />
  </div>
</template>

<script>
import PricesTable from '~/components/PricesTable.vue'

export default {
  components: { PricesTable },
}
</script>

<style>
/* html {
  font-family: 'Montserrat', sans-serif;
  font-size: 18px;
}
body {
  overflow-x: hidden;
  margin: 0;
  box-sizing: border-box;

  width: 100vw;
  max-width: 100vw;
} 
*/

#lower-table {
  padding-top: 0rem;
}

#pricing-section {
  background-color: #ffffff;
}

#rent-late {
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 1.5rem;
  line-height: 152.4%;
  /* or 37px */
  text-align: center;
  width: 60%;
  margin-top: 5rem;
  margin-bottom: 6rem;
  color: #505050;
}

table {
  overflow: scroll;
  position: relative;
  z-index: 2;
}

@media only screen and (min-device-width: 300px) and (max-device-width: 812px) /* and (-webkit-min-device-pixel-ratio: 3) */ {
  table {
    width: 100vw;
  }
  #rent-late {
    font-size: 1rem;
    margin: 2rem 0 0 0;
    width: 100%;
  }
}
</style>
