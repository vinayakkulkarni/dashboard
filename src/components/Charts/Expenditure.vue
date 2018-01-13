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
      if (val !== oldVal) {
        this.renderChart(this.expenditure, this.options);
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
            label: 'Expenditure',
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
    this.renderChart(this.chartData, this.options);
  },
};
</script>
