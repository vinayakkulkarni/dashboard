<template>
   <nav class="navbar is-info is-fixed-top">
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
            <div style="font-size: 24px;">Individual PIN Code report for 1938197</div>
          </div>
        </div>
        <div class="navbar-end">
          <div class="navbar-item">
            <button class="button is-dark" @click="setMapType('pincode'); showPincode = false" v-show="showPincode">PINCODE</button>
            <button class="button is-dark" @click="setMapType('locality'); showPincode = true" v-show="!showPincode">LOCALITY</button>
          </div>
        </div>
      </div>
    </nav>
</template>
<script>
export default {
  name: 'TopNavbar',
  props: {
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
  data() {
    return {
      showNav: false,
      showPincode: true,
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
