<template>
  <section class="hours_location">
    <div class="description_card_container" id="contacts">
      <div class="img">
        <img src="~/assets/img/location.svg" alt="Location of the buissness." />
      </div>
      <description-card type="contacts" />
    </div>
    <div class="description_card_container" id="hours">
      <div class="img">
        <img
          src="~/assets/img/office_building.svg"
          alt="Picture of the office building."
        />
      </div>
      <description-card type="openingHours" />
    </div>
  </section>
</template>

<script>
import DescriptionCard from './DescriptionCard.vue'
export default {
  components: { DescriptionCard },
}
</script>

<style>
.hours_location {
  position: relative;
  box-sizing: border-box;
  background: #ffffff;
  height: 200vh;
  /* max-height: 150vh; */
  padding-top: 4rem;
  /* padding-bolttom: 2rem; */
  /* margin-bottom: 3rem; */
}
.description_card_container {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  margin-bottom: 6rem;
}

.description_card_container div.card_bg {
  position: relative;
  z-index: 2;
}

.description_card_container img {
  position: relative;
  z-index: 1;
  border-radius: 15px;
  width: 60rem;
}

#hours {
  flex-direction: row-reverse;
}

#contacts div.card_bg {
  margin: 0 0 0 -35rem;
}

/* ----------- iPhone X ----------- */

/* Portrait and Landscape */
@media only screen and (min-device-width: 300px) and (max-device-width: 812px) /* and (-webkit-min-device-pixel-ratio: 3) */ {
  .hours_location {
    padding: 0 1rem;
    box-sizing: border-box;
    height: fit-content;
    /* margin: 20rem 0; */
    margin: 5rem 0 0;
  }
  .description_card_container {
    flex-direction: column-reverse;
    position: relative;
    /* margin: 10rem 0; */
    margin-bottom: 3rem;
  }

  .description_card_container img {
    width: 100%;
  }

  #contacts div.card_bg {
    margin: 0;
  }
  #hours div.card_bg {
    margin: 0;
  }

  #hours {
    flex-direction: column-reverse;
  }

  div.img {
    display: block;
    overflow: hidden;
    margin-top: -1.5rem;
    margin-bottom: 3rem;
    /* width: 60rem; */
    width: 100vw;
  }
}
</style>
