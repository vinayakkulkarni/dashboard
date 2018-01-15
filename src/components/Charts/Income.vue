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
  data() {
    return {
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
      chartData: {
        labels: [this.income.locality],
        datasets: [
          {
            fill: false,
            backgroundColor: ['#A6D9EC', '#47A8DD'],
            data: [this.income.income],
          },
        ],
      },
    };
  },
  watch: {
    income(val, oldVal) {
      const t = this;
      const chartData = {
        labels: [t.income.locality],
        datasets: [
          {
            fill: false,
            backgroundColor: ['#A6D9EC', '#47A8DD'],
            data: [t.income.income],
          },
        ],
      };
      /* eslint no-underscore-dangle: 0 */
      if (val !== oldVal) {
        t.$data._chart.destroy();
        t.renderChart(chartData, t.options);
      }
    },
  },
  mounted() {
    const t = this;
    this.renderChart(t.chartData, t.options);
  },
};
</script>
