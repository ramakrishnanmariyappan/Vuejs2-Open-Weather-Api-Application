// import  Vue from 'vue';
// import axios from 'axios';

// const API = 'http://api.openweathermap.org/data/2.5/weather?units=metric';
// const KEY = '&APPID={d3ef80b886addfcdb040197669127f94}';

// export default new Vue({
//   el: '#weather',
//   data: {
//     currentTemp: '',
//     minTemp: '',
//     maxTemp: '',
//     sunrise: '',
//     sunset: '',
//     pressure: '',
//     humidity: '',
//     wind: '',
//     overcast: '',
//     icon: '',
//     location: '',
//   },
//   methods: {

//     getWeather(url: any) {
//       axios
//         .get(url)
//         .then((response) => {
//           this.currentTemp = response.data.main.temp;
//           this.minTemp = response.data.main.temp_min;
//           this.maxTemp = response.data.main.temp_max;
//           this.pressure = response.data.main.pressure;
//           this.humidity = response.data.main.humidity + '%';
//           this.wind = response.data.wind.speed + 'm/s';
//           this.overcast = response.data.weather[0].description;
//           this.icon = 'images/' + response.data.weather[0].icon.slice(0, 2) + '.svg';
//           this.sunrise = new Date(response.data.sys.sunrise * 1000).toLocaleTimeString('en-GB').slice(0, 5);
//           this.sunset = new Date(response.data.sys.sunset * 1000).toLocaleTimeString('en-GB').slice(0, 5);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//     },
//     geolocation() {
//       navigator.geolocation.getCurrentPosition(this.buildUrl, this.geoError);
//     },
//     buildUrl(position: any) {
//       const lat = position.coords.latitude;
//       const lon = position.coords.longitude;

//       this.getWeather(API + '&lat=' + lat + '&lon=' + lon + KEY);
//     },
//     geoError(error: any) {
//       this.getWeather(API + '&lat=0&lon=0' + KEY);
//       console.log('error' + error);

//     },
//   },
//   beforeMount() {
//     this.geolocation();
//   },
// });
