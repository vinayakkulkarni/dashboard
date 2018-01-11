<template>
  <div id="app" class="Site">
    <top-navbar :expenditure="expenditure" :income="income" :locality="locality" :pincode="pincode"></top-navbar>
    <div class="container is-fluid Site-content">
      <router-view :expenditure="expenditure" :income="income" :locality="locality" :pincode="pincode"></router-view>
    </div>
  </div>
</template>

<script>
import expenditure from './data/expenditure.json';
import income from './data/income.json';
import locality from './data/locality.json';
import pincode from './data/pincode.json';
import TopNavbar from './components/_partials/TopNavbar';

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
    };
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
  margin-top: 52px;
}
</style>