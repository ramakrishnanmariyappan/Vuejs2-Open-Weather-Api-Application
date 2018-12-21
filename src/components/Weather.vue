<template>
  <v-container grid-list-md>
    <v-layout row justify-center>
      <v-flex xs10>
        <AutoComplete @clicked="OnChildData"/>
      </v-flex>
    </v-layout>
    <v-layout row justify-center>
      <v-flex xs5>
        <v-icon size="60" color="yellow lighten-1">fa-globe-asia</v-icon>
        <div class="display-2">
            Location: {{location}}
            </div> 
            <div class="title">
                Lon : {{lon}}  Lat :  {{lat}}
            </div>
      </v-flex>
      <v-divider vertical>
      </v-divider>
      <v-flex xs5>
        <v-img
          v-if="overcast"
          :src="`http://openweathermap.org/img/w/${icon}`"
          class="weather-img"
        />
        <span class="display-2">{{currentTemp}}˚ {{overcast}}</span>
      </v-flex>
    </v-layout>
    <v-divider></v-divider>
    <v-layout row wrap align-center justify-space-around py-4>
      <v-flex xs2 class="title">
        <v-icon medium color="red lighten-1">fa-thermometer-half</v-icon>
        Current Temp: {{currentTemp}}˚
      </v-flex>
      <v-divider vertical></v-divider>
      <v-flex xs2 class="title">
        <v-icon medium color="blue lighten-1">fa-wind</v-icon>
        Wind: {{wind}}
      </v-flex>
      <v-divider vertical></v-divider>
      <v-flex xs2 class="title">
        <v-icon medium color="green lighten-1">fa-tint</v-icon>
        Humidity: {{humidity}}
      </v-flex>
      <v-divider vertical></v-divider>
      <v-flex xs2 class="title">
        <v-icon medium color="orange lighten-1">fa-tachometer-alt</v-icon>
        Pressure: {{pressure}} mb
      </v-flex>
    </v-layout>
    <v-layout row wrap justify-center>
      <v-flex xs3>
        <v-card color="white">
          <v-img src="https://cdn.vuetifyjs.com/images/cards/desert.jpg" aspect-ratio="2.75"></v-img>

          <v-card-title primary-title class="black--text">
            <div>
              <h3 class="headline mb-0">
                <v-icon large color="grey lighten-1">fa-cloud</v-icon>Kangaroo Valley Safari
              </h3>
              <div color="black">Located two hours south of Sydney in the
                <br>Southern Highlands of New South Wales, ...
              </div>
            </div>
          </v-card-title>

          <v-card-actions>
            <v-btn flat color="orange">Share</v-btn>
            <v-btn flat color="orange">Explore</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-flex xs3>
        <v-card color="white">
          <v-img src="https://cdn.vuetifyjs.com/images/cards/desert.jpg" aspect-ratio="2.75"></v-img>

          <v-card-title primary-title class="black--text">
            <div>
              <h3 class="headline mb-0">Kangaroo Valley Safari</h3>
              <div>Located two hours south of Sydney in the
                <br>Southern Highlands of New South Wales, ...
              </div>
            </div>
          </v-card-title>

          <v-card-actions>
            <v-btn flat color="orange">Share</v-btn>
            <v-btn flat color="orange">Explore</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-flex xs3>
        <v-card color="white">
          <v-img src="https://cdn.vuetifyjs.com/images/cards/desert.jpg" aspect-ratio="2.75"></v-img>

          <v-card-title primary-title class="black--text">
            <div>
              <h3 class="headline mb-0">Kangaroo Valley Safari</h3>
              <div>Located two hours south of Sydney in the
                <br>Southern Highlands of New South Wales, ...
              </div>
            </div>
          </v-card-title>

          <v-card-actions>
            <v-btn flat color="orange">Share</v-btn>
            <v-btn flat color="orange">Explore</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-flex xs3>
        <v-card color="white">
          <v-img src="https://cdn.vuetifyjs.com/images/cards/desert.jpg" aspect-ratio="2.75"></v-img>

          <v-card-title primary-title class="black--text">
            <div>
              <h3 class="headline mb-0">Kangaroo Valley Safari</h3>
              <div>Located two hours south of Sydney in the
                <br>Southern Highlands of New South Wales, ...
              </div>
            </div>
          </v-card-title>

          <v-card-actions>
            <v-btn flat color="orange">Share</v-btn>
            <v-btn flat color="orange">Explore</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout row justify-center>
      <v-flex xs12>
        <div>
          <BarChart/>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import axios from "axios";
import AutoComplete from "./AutoComplete.vue";
import BarChart from "./BarChart.vue";

const Url = "http://api.openweathermap.org/data/2.5/weather?";
const API = "&units=metric&cnt=5&appid=75a15324ebe115ba6f8593b59036af57";
const ForcastUrl = 'https://api.openweathermap.org/data/2.5/forecast?';
const ForcastAPI = '&units=metric&appid=75a15324ebe115ba6f8593b59036af57';

@Component({
  components: {
    AutoComplete,
    BarChart
  }
})
export default class Weather extends Vue {
  public currentTemp = "";
  public minTemp = "";
  public maxTemp = "";
  public sunrise = "";
  public sunset = "";
  public pressure = "";
  public humidity = "";
  public wind = "";
  public overcast = "";
  public icon = "";
  public location = "";
  public autocomplete = "";
  public lon ="";
  public lat = "";

  public getWeather(url: any) {
    axios.get(url).then(response => {

        this.location = response.data.name;
        this.lon = response.data.coord.lon;
        this.lat = response.data.coord.lat;
      this.currentTemp = response.data.main.temp;
      this.minTemp = response.data.main.temp_min;
      this.maxTemp = response.data.main.temp_max;
      this.pressure = response.data.main.pressure;
      this.humidity = response.data.main.humidity + "%";
      this.wind = response.data.wind.speed + "m/s";
      this.overcast = response.data.weather[0].description;
      this.icon = response.data.weather[0].icon + ".png";
      this.sunrise = new Date(response.data.sys.sunrise * 1000)
        .toLocaleTimeString("en-GB")
        .slice(0, 5);
      this.sunset = new Date(response.data.sys.sunset * 1000)
        .toLocaleTimeString("en-GB")
        .slice(0, 5);
    });
  }
    public getForcast(url: any) {
    axios.get(url).then(response => {
        console.log('forcast response' + JSON.stringify(response));
    });
  }
  public OnChildData(dataValue: any) {
    this.getWeather(Url + "q=" + dataValue + API);
    if (dataValue != "") {
      localStorage.setItem("location", JSON.stringify({ data: dataValue }));
    }
  }
  public geolocation() {
    navigator.geolocation.getCurrentPosition(this.buildUrl, this.geoError);
  }
  public buildUrl(position: any) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    this.getWeather(Url + "lat=" + lat + "&lon=" + lon + API);
    this.getForcast(ForcastUrl+ 'lan=' + lat + '&lon=' + lon + ForcastAPI);
  }
  public geoError(error: any) {
    this.getWeather(API);
    this.getForcast(ForcastAPI);
  }

  public beforeMount() {
    if (localStorage.getItem("location")) {
      let locationData: any = localStorage.getItem("location");
      this.getWeather(Url + "q=" + JSON.parse(locationData).data + API);
      this.getForcast(ForcastUrl + 'q=' + JSON.parse(locationData).data + ForcastAPI);
    } else {
      this.geolocation();
    }
  }
  public getResponse(response: any) {
    return response.data.items;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.weather-img {
  width: 100px;
  height: 100px;
}
</style>
