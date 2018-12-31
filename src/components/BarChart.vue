
<script>
import VueCharts from "vue-chartjs";
import { Line } from "vue-chartjs";
import axios from "axios";
import moment from "moment";
const ForcastUrl = "https://api.openweathermap.org/data/2.5/forecast?";
const ForcastAPI = "&units=imperial&appid=75a15324ebe115ba6f8593b59036af57";

export default {
  extends: Line,
  props: ["chartdata"],
  data() {
    return {
      gradient: null,
      gradient2: null,
      lineChartLabel: [],
      lineChartData: null,
      label: [
        "Sat 02:30 PM",
        "Sat 05:30 PM",
        "Sat 08:30 PM",
        "Sat 11:30 PM",
        "Sun 02:30 AM",
        "Sun 05:30 AM",
        "Sun 08:30 AM",
        "Sun 11:30 AM",
        "Sun 02:30 PM",
        "Sun 05:30 PM",
        "Sun 08:30 PM",
        "Sun 11:30 PM",
        "Mon 02:30 AM",
        "Mon 05:30 AM",
        "Mon 08:30 AM",
        "Mon 11:30 AM",
        "Mon 02:30 PM",
        "Mon 05:30 PM",
        "Mon 08:30 PM",
        "Mon 11:30 PM",
        "Tue 02:30 AM",
        "Tue 05:30 AM",
        "Tue 08:30 AM",
        "Tue 11:30 AM",
        "Tue 02:30 PM",
        "Tue 05:30 PM",
        "Tue 08:30 PM",
        "Tue 11:30 PM",
        "Wed 02:30 AM",
        "Wed 05:30 AM",
        "Wed 08:30 AM",
        "Wed 11:30 AM",
        "Wed 02:30 PM",
        "Wed 05:30 PM",
        "Wed 08:30 PM",
        "Wed 11:30 PM",
        "Thu 02:30 AM"
      ],
      TempMin: [10, 23, 30, 40, 60],
      TempMax: [20, 35, 60, 78]
    };
  },
  watch: {
    chartdata: function() {
      console.log("chart data is ==" + this.chartdata);
      this.getForcast(ForcastUrl + "q=London" + ForcastAPI);
    }
  },
  methods: {
    getForcast(url) {
      axios.get(url).then(response => {
        response.data.list.map((item, key) => {
          console.log(item);
          this.lineChartLabel.push(
            moment.unix(item["dt"]).format("ddd hh:mm A")
          );
          this.TempMin.push(item["main"]["temp_min"]);
          this.TempMax.push(item["main"]["temp_max"]);
          console.log("data for label" + JSON.stringify(this.lineChartLabel));
        });
        this.LineChart(this.lineChartLabel, this.TempMin, this.TempMax);
      });
    },
    geolocation() {
      navigator.geolocation.getCurrentPosition(this.buildUrl, this.geoError);
    },
    buildUrl(position) {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      this.getForcast(ForcastUrl + "lan=" + lat + "&lon=" + lon + ForcastAPI);
    },
    geoError(error) {
      this.getWeather(API);
      this.getForcast(ForcastAPI);
    },
    LineChart(label, TempMin, TempMax) {
      this.gradient = this.$refs.canvas
        .getContext("2d")
        .createLinearGradient(0, 0, 0, 450);
      this.gradient2 = this.$refs.canvas
        .getContext("2d")
        .createLinearGradient(0, 0, 0, 450);

      this.gradient.addColorStop(0, "rgba(255, 0,0, 0.5)");
      this.gradient.addColorStop(0.5, "rgba(255, 0, 0, 0.25)");
      this.gradient.addColorStop(1, "rgba(255, 0, 0, 0)");

      this.gradient2.addColorStop(0, "rgba(0, 255, 126, 0.9)");
      this.gradient2.addColorStop(0.5, "rgba(0, 255, 126, 0.25)");
      this.gradient2.addColorStop(1, "rgba(0, 255, 126, 0)");
      this.renderChart(
        {
          labels: label,
          datasets: [
            {
              label: "Temprature Min",
              borderColor: "#FC2525",
              pointBackgroundColor: "white",
              borderWidth: 1,
              pointBorderColor: "white",
              backgroundColor: this.gradient,
              data: TempMin
            },
            {
              label: "Temprature Max",
              borderColor: "#00ff99",
              pointBackgroundColor: "green",
              borderWidth: 1,
              pointBorderColor: "white",
              backgroundColor: this.gradient2,
              data: TempMax
            }
          ],
          options: {
            title: {
              display: true,
              text: "Custom Chart Title"
            }
          }
        },
        { responsive: true, maintainAspectRatio: false }
      );
    }
  },
  beforeMount() {
    if (localStorage.getItem("location")) {
      let locationData = localStorage.getItem("location");
      this.getForcast(
        ForcastUrl + "q=" + JSON.parse(locationData).data + ForcastAPI
      );
    } else {
      this.geolocation();
    }
  },
  mounted() {
    this.LineChart(this.label, this.dataValue);
  }
};
</script>

<style>
</style>

