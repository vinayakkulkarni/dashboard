<template>
   <nav class="navbar is-info">
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          <i class="arrow icon"></i>
        </a>
        <div class="navbar-burger burger" @click="showNav = !showNav" :class="{ 'is-active': showNav }">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div class="navbar-menu" :class="{ 'is-active': showNav }">
        <div class="navbar-start">
          <div class="navbar-item">
            <div class="columns is-mobile is-multiline is-centered">
              <div class="column is-narrow">
                <div class="is-size-2"><span class="icon"><icon name="file" scale="2"></icon></span> Report</div>
                <div v-if="feature.hasOwnProperty('locality_i')">Locality ID {{ feature.locality_i }} </div>
                <div v-if="feature.hasOwnProperty('pincode')">Individual pin code report for {{ feature.pincode }} </div>
              </div>
            </div>
          </div>
        </div>
        <div class="navbar-end">
          <div class="navbar-item">
            <div class="columns is-mobile is-multiline is-centered">
              <div class="column is-narrow">
                <button class="button is-dark" @click="setMapType('pincode'); showPincode = false" v-show="showPincode">PINCODE</button>
                <button class="button is-dark" @click="setMapType('locality'); showPincode = true" v-show="!showPincode">LOCALITY</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
</template>
<script>
export default {
  name: 'TopNavbar',
  props: {
    feature: {
      type: Object,
    },
    filteredIncome: {
      type: Object,
    },
    filteredExpenditure: {
      type: Object,
    },
  },
  data() {
    return {
      showNav: false,
      showPincode: false,
    };
  },
  methods: {
    setMapType(data) {
      const t = this;
      if (data === 'pincode') {
        t.$emit('setMap', 'pincode');
      }
      if (data === 'locality') {
        t.$emit('setMap', 'locality');
      }
    },
  },
};
</script>
