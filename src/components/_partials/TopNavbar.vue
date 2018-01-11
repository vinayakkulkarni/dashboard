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
          <div class="navbar-item">abc</div>
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
    };
  },
};
</script>
