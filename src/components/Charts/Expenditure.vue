<script>
import { Bar } from 'vue-chartjs';

export default {
  name: 'Expenditure',
  extends: Bar,
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
    const data = {
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
            t.expenditure[0].apparel,
            t.expenditure[0].education,
            t.expenditure[0].entertainment,
            t.expenditure[0].finance,
            t.expenditure[0].food,
            t.expenditure[0].health,
            t.expenditure[0].house,
            t.expenditure[0].other,
            t.expenditure[0].teansport,
          ],
        },
      ],
    };
    const options = {
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
    };
    this.renderChart(data, options);
  },
};
</script>
