<template>
  <network-status @detected-condition="detected" id="app" class="Site">
    <div slot="online">
      <top-navbar :feature="feature" :filteredIncome="filteredIncome" :filteredExpenditure="filteredExpenditure" @setMap="setMapType"></top-navbar>
      <div class="container is-fluid Site-content">
        <router-view 
        :expenditure="expenditure" 
        :income="income" 
        :locality="locality" 
        :pincode="pincode" 
        :mapType="mapType"
        :feature="feature"
        :filteredIncome.sync="filteredIncome"
        :filteredExpenditure.sync="filteredExpenditure"></router-view>
      </div>
    </div>
    <div slot="offline" offlineClass="container is-fluid Site-content">
      You're Offline!
    </div>
  </network-status>
</template>

<script>
import NetworkStatus from 'v-offline';
import expenditure from './data/expenditure.json';
import income from './data/income.json';
import locality from './data/locality.json';
import pincode from './data/pincode.json';
import TopNavbar from './components/_partials/TopNavbar';
import EventBus from './components/event-bus';

export default {
  name: 'app',
  components: {
    TopNavbar,
    NetworkStatus,
  },
  data() {
    return {
      state: null,
      expenditure,
      income,
      locality,
      pincode,
      mapType: 'pincode',
      feature: {},
      filteredExpenditure: {},
      filteredIncome: {},
    };
  },
  created() {
    const t = this;
    EventBus.$on('selected-feature', (data) => {
      t.feature = data;
      t.filterExpenditure();
      t.filterIncome();
    });
  },
  methods: {
    detected(e) {
      this.state = e;
    },
    setMapType(data) {
      this.mapType = data;
    },
    filterExpenditure() {
      const t = this;
      t.filteredExpenditure =
        t.expenditure.find(data => data.pincode === t.feature.pincode) || {};
    },
    filterIncome() {
      const t = this;
      t.filteredIncome =
        t.income.find(data => data.locality === t.feature.locality) || {};
    },
  },
};
</script>
<style lang="sass" src="bulma"></style>
<style>
body {
  font-family: 'Roboto', sans-serif;
}
.Site {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}
.Site-content {
  flex: 1;
}
</style>