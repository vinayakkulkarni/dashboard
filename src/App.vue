<template>
  <div id="app" class="Site">
    <top-navbar :feature="feature" :filteredIncome="filteredIncome" :filteredExpenditure="filteredExpenditure" @setMap="setMapType"></top-navbar>
    <div class="container is-fluid Site-content">
      <router-view 
      :expenditure="expenditure" 
      :income="income" 
      :locality="locality" 
      :pincode="pincode" 
      :mapType="mapType"
      :feature="feature"
      :filteredIncome="filteredIncome"
      :filteredExpenditure="filteredExpenditure"></router-view>
    </div>
  </div>
</template>

<script>
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
  },
  data() {
    return {
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