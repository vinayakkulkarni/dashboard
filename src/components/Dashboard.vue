<template>
  <div class="dashboard-component">
    <div class="columns is-gapless is-fluid" style="background: aliceblue">
      <div class="column">
        First column
      </div>
      <div class="column">
        <leaflet-map :expenditure="expenditure" :income="income" :locality="locality" :pincode="pincode" :mapType.sync="mapType"></leaflet-map>
      </div>
    </div>
    <div class="columns is-gapless" style="background: white">
      <div class="column">
        <income :expenditure="expenditure" :income="income" :locality="locality" :pincode="pincode"></income>
        <h1 class="has-text-centered">
          Monthly Income Distribution
          <hr>
        </h1>
      </div>
      <div class="column">
        <expenditure :expenditure="expenditure" :income="income" :locality="locality" :pincode="pincode"></expenditure>
        <h1 class="has-text-centered">Expenditure</h1>
      </div>
    </div>
    <div class="columns is-gapless" style="background: aliceblue">
      <div class="column">
        First column
      </div>
      <div class="column">
        Second Colum
      </div>
    </div>
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
