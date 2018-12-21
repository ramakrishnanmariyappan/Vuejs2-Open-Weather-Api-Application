<template>
  <v-app id="inspire" dark>
    <v-navigation-drawer v-model="drawer" fixed clipped app>
      <v-list dense>
        <v-list-tile v-for="item in items" :key="item.text" @click>
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.text }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-subheader class="mt-3 grey--text text--darken-1">Popular Cities Weather Report</v-subheader>
        <v-list>
          <v-list-tile v-for="item in items2" :key="item.text" avatar @click>
            <v-list-tile-avatar>
              <img :src="`https://randomuser.me/api/portraits/men/${item.picture}.jpg`" alt>
            </v-list-tile-avatar>
            <v-list-tile-title v-text="item.text"></v-list-tile-title>
          </v-list-tile>
        </v-list>
        <v-list-tile class="mt-3" @click>
          <v-list-tile-action>
            <v-icon color="grey darken-1">add_circle_outline</v-icon>
          </v-list-tile-action>
          <v-list-tile-title class="grey--text text--darken-1">Browse Channels</v-list-tile-title>
        </v-list-tile>
        <v-list-tile @click>
          <v-list-tile-action>
            <v-icon color="grey darken-1">settings</v-icon>
          </v-list-tile-action>
          <v-list-tile-title class="grey--text text--darken-1">Manage Subscriptions</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="blue darken-3" dense fixed clipped-left app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-icon class="mx-3">fab fa-youtube</v-icon>
      <v-toolbar-title class="mr-5 align-center">
        <span class="title">Online Weather Monitoring Application</span>
      </v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container>
        <v-layout>
          <Weather/>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import AutoComplete from "./components/AutoComplete.vue";
import Weather from "./components/Weather.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    AutoComplete,
    Weather
  },
  data() {
    return {
      drawer: null,
      items: [
        { icon: "trending_up", text: "Most Popular" },
        { icon: "subscriptions", text: "Popular City Weather report" },
        { icon: "history", text: "History" },
        { icon: "featured_play_list", text: "Playlists" },
        { icon: "watch_later", text: "Watch Later" }
      ],
      items2: [
        { picture: 28, text: "Joseph" },
        { picture: 38, text: "Apple" },
        { picture: 48, text: "Xbox Ahoy" },
        { picture: 58, text: "Nokia" },
        { picture: 78, text: "MKBHD" }
      ]
    };
  }
};
</script>
<style>
.Chart {
  background: #212733;
  border-radius: 15px;
  box-shadow: 0px 2px 15px rgba(25, 25, 25, 0.27);
  margin:  25px 0;
}

.Chart h2 {
  margin-top: 0;
  padding: 15px 0;
  color:  rgba(255, 0,0, 0.5);
  border-bottom: 1px solid #323d54;
}
</style>

