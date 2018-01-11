<script>
import { Doughnut } from 'vue-chartjs';

export default {
  name: 'Income',
  extends: Doughnut,
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
  mounted() {
    const t = this;
    const options = {
      responsive: true,
      maintainAspectRatio: false,
    };
    const data = {
      labels: ['income'],
      datasets: [
        {
          fill: false,
          backgroundColor: ['#A6D9EC', '#47A8DD'],
          data: [t.income[0].income, t.income[1].income],
        },
      ],
    };
    this.renderChart(data, options);
  },
};
</script>
