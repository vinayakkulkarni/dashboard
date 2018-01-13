<template>
  <div>
    <table class="table is-bordered" style="margin-bottom: 10px;">
      <thead>
        <tr>
          <th v-if="feature.properties.locality">Locality</th>
          <th v-if="feature.properties.pincode">Pincode</th>
          <th>Population</th>
          <th>Households</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td v-if="feature.properties.locality">{{ feature.properties.locality }}</td>
          <td v-if="feature.properties.pincode">{{ feature.properties.pincode }}</td>
          <td>{{ feature.properties.population }}</td>
          <td>{{ feature.properties.households }}</td>
        </tr>
      </tbody>
    </table>
    <div class="has-text-centered">
      <button class="button is-small is-dark is-transparent is-rounded" :class="{'is-loading': showLoading}" @click="viewData">View Data</button>
    </div>
    <!-- {{ feature.properties }} -->
  </div>
</template>

<script>
import EventBus from '../../event-bus';

export default {
  name: 'PopupContent',
  props: {
    feature: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      showLoading: false,
    };
  },
  beforeDestroy() {
    EventBus.$off('selected-feature');
  },
  methods: {
    viewData() {
      this.showLoading = true;
      EventBus.$emit('selected-feature', this.feature.properties);
      this.showLoading = false;
    },
  },
};
</script>