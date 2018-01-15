<script>
import { Bar } from 'vue-chartjs';

export default {
  name: 'Expenditure',
  extends: Bar,
  props: {
    expenditure: {
      type: Object,
      required: true,
    },
  },
  watch: {
    expenditure(val, oldVal) {
      const t = this;
      const chartData = {
        labels: [
          'apparel',
          'education',
          'entertainment',
          'finance',
          'food',
          'health',
          'house',
          'other',
          'transport',
        ],
        datasets: [
          {
            label: `Expenditure for ${t.expenditure.pincode}`,
            backgroundColor: '#47A8DD',
            data: [
              t.expenditure.apparel,
              t.expenditure.education,
              t.expenditure.entertainment,
              t.expenditure.finance,
              t.expenditure.food,
              t.expenditure.health,
              t.expenditure.house,
              t.expenditure.other,
              t.expenditure.teansport,
            ],
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
  data() {
    return {
      chartData: {
        labels: [
          'apparel',
          'education',
          'entertainment',
          'finance',
          'food',
          'health',
          'house',
          'other',
          'transport',
        ],
        datasets: [
          {
            label: `Expenditure for ${this.expenditure.pincode}`,
            backgroundColor: '#47A8DD',
            data: [
              this.expenditure.apparel,
              this.expenditure.education,
              this.expenditure.entertainment,
              this.expenditure.finance,
              this.expenditure.food,
              this.expenditure.health,
              this.expenditure.house,
              this.expenditure.other,
              this.expenditure.teansport,
            ],
          },
        ],
      },
      options: {
        scales: {
          xAxes: [
            {
              barThickness: 70,
            },
          ],
          yAxes: [
            {
              scaleLabel: {
                display: true,
                labelString: 'Total expenditure in lakhs',
              },
            },
          ],
        },
        responsive: true,
        maintainAspectRatio: false,
      },
    };
  },
  mounted() {
    const t = this;
    this.renderChart(t.chartData, t.options);
  },
};
</script>
