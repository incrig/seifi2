<template>
  <div class="price-table-bg">
    <h1 v-if="type === 'registered'">{{ $t('pricingPage.mainHeading') }}</h1>
    <h2>{{ $t(`pricingPage.headingDetails.${type}`) }}</h2>
    <div class="t-container">
      <table>
        <tbody>
          <tr>
            <th id="empty-cell"></th>
            <th
              scope="col"
              v-for="(size, index) in $t('pricingPage.pricingRegular.sizes')"
              :key="index"
            >
              <p>
                {{ size }}
              </p>
            </th>
          </tr>

          <tr
            v-for="(tpObj, index) in $t(
              'pricingPage.pricingRegular.timePriceObjs'
            )"
            :key="index"
          >
            <th scope="row">
              <p>
                {{ tpObj.time }}
              </p>
            </th>
            <td v-for="(price, index) in tpObj.prices" :key="price ** index">
              <p>{{ price }},00 €</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <p id="asterisk">{{ $t('pricingPage.sizing') }}</p>
    <img
      v-if="type === 'anonymous'"
      id="anonymous-circle"
      src="~/assets/img/blurred-elipses-one.svg"
      alt="Blurred colours"
    />
    <img
      v-if="type === 'registered'"
      id="registered-circle"
      src="~/assets/img/blurred-elipses-two.svg"
      alt="Blurred colours"
    />
  </div>
</template>

<script>
export default {
  props: {
    type: 'registered' | 'anonymous',
  },
}
</script>

<style scoped>
#asterisk {
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 152.4%;
  /* or 24px */
  margin-top: 1rem;
  color: #505050;
  width: 100%;
}

#anonymous-circle {
  position: absolute;
  left: 0;
  z-index: 1;
}

#registered-circle {
  position: absolute;
  right: 0;
  z-index: 1;
}

.price-table-bg {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 7rem 0;
  /* width: 100%; */
}

table {
  text-align: center;
  box-shadow: 0px 0px 20px rgba(0, 104, 200, 0.15);
  border-radius: 1.188rem;
  border-spacing: 0;
  position: relative;
  z-index: 2;
  overflow: hidden;
  width: 100%;
}

h1 {
  margin: 0;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
  line-height: 152.4%;
  /* identical to box height, or 61px */
  display: flex;
  align-items: center;
  text-transform: uppercase;

  color: #313131;
}

h2 {
  margin: 2rem;
  margin-bottom: 3rem;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 143%;
  /* or 34px */
  display: flex;
  align-items: center;
  text-align: center;
  text-transform: uppercase;

  color: #313131;
}

td {
  box-sizing: border-box;
  padding: 1rem 3rem;
  background: #ffffff;
  border: 0.125rem solid rgb(223 225 230);
}

th {
  background-color: rgb(235 237 244);
  padding: 1rem 3rem;
}

/* Border customization */
table > tr:nth-of-type(1) > th {
  border-left-color: rgb(223 225 230);
  border-left-style: solid;
  border-left-width: 0.125rem;
  border-right-color: rgb(223 225 230);
  border-right-style: solid;
  border-right-width: 0.125rem;
  border-bottom-color: rgb(223 225 230);
  border-bottom-style: solid;
  border-bottom-width: 0.125rem;
}

th > p {
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 1.125rem;
  line-height: 152.4%;
  /* or 27px */
  text-align: center;

  color: #7782b0;
}

td > p {
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 1.125rem;
  line-height: 152.4%;
  /* or 27px */
  text-align: center;

  color: #505050;
}

/* Every left most cell */
tr > th:nth-of-type(1) {
  border-left: none;
  border-bottom: rgb(223 225 230) solid 0.125rem;
  border-top: rgb(223 225 230) solid 0.125rem;
  border-right: rgb(223 225 230) solid 0.125rem;
}

/* Every right most cell */
tr > td:nth-last-of-type(1) {
  border-right: none;
}

/* Last row */
tr:nth-last-of-type(1) > td {
  border-bottom: none;
}

/* First left table cell */
#empty-cell {
  border-top-left-radius: 1.188rem;
  border-left: none;
  border-top: none;
  border-right: none;
  border-bottom: none;
}

/* First right cell */
tr:nth-of-type(1) > th:nth-last-of-type(1) {
  border-top-right-radius: 1.188rem;
  border-right: none;
}

/* Last left cell */
tr:nth-last-of-type(1) > th:nth-of-type(1) {
  border-bottom-left-radius: 1.188rem;
  border-left: none;
  border-bottom: none;
}

/* Last right cell */
tr:nth-last-of-type(1) > td:nth-last-of-type(1) {
  border-bottom-right-radius: 1.188rem;
  border-right: none;
}

@media only screen and (min-device-width: 300px) and (max-device-width: 812px) /* and (-webkit-min-device-pixel-ratio: 3) */ {
  th > p {
    /* font-size: 0.5rem; */
  }

  th {
    padding: 0;
  }

  td {
    padding: 0;
  }

  td > p {
    /* font-size: 0.5rem; */
  }

  h2 {
    z-index: 2;
  }
  /* 
  table {
    overflow-x: scroll;
  } */

  .price-table-bg {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0;
    /* width: 100%; */
  }

  .t-container {
    position: relative;
    width: 100%;
    overflow-x: scroll;
  }

  table {
    position: relative;
    width: 150%;
  }
}
</style>
