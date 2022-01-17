<template>
  <div>
    <NavBar />
    <section>
      <div class="text-container">
        <h1>{{ $t('aboutUsPage.heading') }}</h1>
        <p>{{ $t('aboutUsPage.description') }}</p>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
section {
  box-sizing: border-box;
  padding: 4rem;
  max-width: 100vw;
  max-height: 100vh;
  width: 100vw;
  height: 100vh;
  background-image: url(~assets/img/opening-lines.svg);
  background-size: cover;
}

.text-container {
  margin-top: -5rem;
  height: 100%;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: baseline;
  align-self: flex-start;
}

h1 {
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 2.5rem;
  line-height: 152.4%;
  /* or 61px */
  display: flex;
  align-items: center;
  text-transform: uppercase;

  color: #313131;
}
p {
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 1.25rem;
  line-height: 152.4%;
  /* or 30px */
  display: flex;
  align-items: center;

  color: #505050;
}

@media only screen and (min-device-width: 300px) and (max-device-width: 812px) /* and (-webkit-min-device-pixel-ratio: 3) */ {
  section {
    padding: 1rem;
  }

  .text-container {
    width: 100%;
  }

  h1 {
    text-align: left;
    margin-bottom: 0rem;
  }

  p {
    text-align: left;
  }
}
</style>
