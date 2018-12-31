
<script>
import VueCharts from "vue-chartjs";
import { Doughnut } from "vue-chartjs";

export default {
  extends: Doughnut,
  props: ["humData"],
  data() {
    return {
      gradient: null,
      gradient2: null,
      lineChartLabel: [],
      lineChartData: null,
      dataValue: [10,30],
      humValue: [],
      otherValue: null,
      tempData: null,
    };
  },
  watch: {
    humData: function(){
      this.tempData = this.humData.slice(0, -1);
      this.otherValue = 100 - this.tempData;

      this.humValue = [this.tempData, this.otherValue];
      this.DoughnutChart(this.humValue);
    }
  },
  methods: {
    DoughnutChart(data) {
    this.renderChart(
      {
        labels: ["Humidity", "None"],
        datasets: [
          {
            // label: "Temprature Min",
            // borderColor: "#FC2525",
            // pointBackgroundColor: "white",
            // borderWidth: 1,
            // pointBorderColor: "white",
            backgroundColor: ["#66bb6a", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: data
          }
        ],
        options: {}
      },
      { responsive: true, maintainAspectRatio: false }
    );
  },
  },
  
  mounted() {
    this.DoughnutChart(this.dataValue);
  }
};
</script>

<style>
</style>

