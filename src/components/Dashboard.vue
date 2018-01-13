<template>
  <div class="dashboard-component">
    <div class="columns is-gapless is-fluid" style="background: aliceblue">
      <div class="column" v-if="feature">
        <div class="columns" style="padding-top:2%;">
          <div class="column is-half" v-if="feature.population">
            <h1 class="title has-text-centered" style="color:#46A4EC;">{{ feature.population }}</h1>
            <div class="subtitle has-text-centered">Population</div>
          </div>
          <div class="column is-half" v-if="feature.households">
            <h1 class="title has-text-centered" style="color:#46A4EC;">{{ feature.households }}</h1>
            <div class="subtitle has-text-centered">Households</div>
          </div>
        </div>
        <div class="columns is-mobile" v-if="feature.locality" style="background: white">
          <div class="column is-half">
            <div class="has-text-centered" style="color:#46A4EC;" v-if="feature.locality">Locality: <span style="font-weight:bold"> {{ feature.locality }} </span></div>
          </div>
          <div class="column is-half">
            <div class="has-text-centered" style="color:#46A4EC;" v-if="feature.city">City: <span style="font-weight:bold"> {{ feature.city }} </span></div>
          </div>
        </div>
        <div class="columns is-mobile" v-if="feature.pincode" style="background: white">
          <div class="column is-half">
            <div class="has-text-centered" style="color:#46A4EC;" v-if="feature.district_n">District: <span style="font-weight:bold"> {{ feature.district_n }} </span></div>
          </div>
          <div class="column is-half">
            <div class="has-text-centered" style="color:#46A4EC;">Country: <span style="font-weight:bold"> India </span></div>
          </div>
        </div>
      </div>
      <div class="column">
        <leaflet-map :locality="locality" :pincode="pincode" :mapType="mapType"></leaflet-map>
      </div>
    </div>
    <div class="is-size-2" style="color:#418DBF">Demographics</div> <hr width="10%" style="background-color: #5FA8D7; margin: 1rem 0;"/>
    <div class="columns is-gapless" style="background: white">
      <div class="column">
        <income :income="filteredIncome" v-if="filteredIncome !== undefined && filteredIncome.hasOwnProperty('income')"></income>
        <div class="title has-text-centered" style="color:#418DBF" v-else>No Data Available</div>
        <h1 class="has-text-centered subtitle" style="color:#418DBF">Monthly Income Distribution<hr></h1>
      </div>
      <div class="column">
        <expenditure :expenditure="filteredExpenditure" v-if="filteredExpenditure !== undefined && filteredExpenditure.hasOwnProperty('pincode')"></expenditure>
        <div class="title has-text-centered" style="color:#418DBF" v-else>No Data Available</div>
        <h1 class="has-text-centered subtitle" style="color:#418DBF">Expenditure <span v-if="feature.pincode">for {{ feature.pincode }}</span><hr></h1>
      </div>
    </div>
    <!-- <div class="columns is-gapless" style="background: aliceblue">
      <div class="column">
        First column
      </div>
      <div class="column">
        Second Colum
      </div>
    </div> -->
  </div>
</template>

<script>
import Income from './Charts/Income';
import Expenditure from './Charts/Expenditure';
import LeafletMap from './Maps/LeafletMap';

export default {
  name: 'Dashboard',
  components: {
    Income,
    Expenditure,
    LeafletMap,
  },
  props: {
    mapType: {
      type: String,
      required: true,
      default: 'pincode',
    },
    feature: {
      type: Object,
    },
    filteredIncome: {
      type: Object,
    },
    filteredExpenditure: {
      type: Object,
    },
    expenditure: {
      type: Array,
      required: true,
    },
    income: {
      type: Array,
      required: true,
    },
    locality: {
      type: Object,
      required: true,
    },
    pincode: {
      type: Object,
      required: true,
    },
  },
};
</script>
