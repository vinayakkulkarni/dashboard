<script>
import { Doughnut } from 'vue-chartjs';

export default {
  name: 'Income',
  extends: Doughnut,
  props: {
    income: {
      type: Object,
      required: true,
    },
  },
  watch: {
    income(val, oldVal) {
      const t = this;
      const options = {
        responsive: true,
        maintainAspectRatio: false,
      };
      const data = {
        labels: [t.income.locality],
        datasets: [
          {
            fill: false,
            backgroundColor: ['#A6D9EC', '#47A8DD'],
            data: [t.income.income],
          },
        ],
      };
      if (val !== oldVal) {
        t.renderChart(data, options);
      }
    },
  },
  mounted() {
    const t = this;
    const options = {
      responsive: true,
      maintainAspectRatio: false,
    };
    const data = {
      labels: [t.income.locality],
      datasets: [
        {
          fill: false,
          backgroundColor: ['#A6D9EC', '#47A8DD'],
          data: [t.income.income],
        },
      ],
    };
    this.renderChart(data, options);
  },
};
</script>
