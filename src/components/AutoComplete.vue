<script>
import data from "@/assets/cities.json";

export default {
  name: "autocomplete",

  data() {
    return {
      loading: false,
      items: [],
      search: null,
      select: null
    };
  },

  methods: {
    querySelections(v) {
      this.loading = true;
      // Simulated ajax query
      setTimeout(() => {
        this.items = this.states.filter(e => {
          return (e || "").toLowerCase().indexOf((v || "").toLowerCase()) > -1;
        });
        this.loading = false;
      }, 500);
    },
    change(select) {
      console.log('selected value' + select);
      // Let's warn the parent that a change was made
      this.$emit("clicked", select);

      // Is the data given by an outside ajax request?
      if (this.isAsync) {
        this.isLoading = true;
      } else {
        // Let's  our flat array
        this.filterResults();
        this.isOpen = true;
      }
    },

    filterResults() {
      // first uncapitalize all the things
      this.results = this.items.filter(item => {
        console.log("item" + JSON.stringify(item));
        return item.toLowerCase().indexOf(this.search.toLowerCase()) > -1;
      });
    },
  },
  watch: {
    search(val) {
      val && val !== this.select && this.querySelections(val);
    }
  },
  mounted() {
    this.states = data;
    console.log(this.items);
    document.addEventListener("click", this.handleClickOutside);
  },
  destroyed() {
    document.removeEventListener("click", this.handleClickOutside);
  }
};
</script>

<template>
    <v-autocomplete
      :loading="loading"
      :items="items"
      :search-input.sync="search"
      v-model="select"
      @change="change(select)"
      cache-items
      class="mx-3"
      flat
      hide-no-data
      hide-details
      label="What state are you from?"
      solo-inverted
    ></v-autocomplete>
</template>

<style>
.autocomplete {
  position: relative;
}

.autocomplete-results {
  padding: 0;
  margin: 0;
  border: 1px solid #eeeeee;
  height: 120px;
  overflow: auto;
  width: 100%;
}

.autocomplete-result {
  list-style: none;
  text-align: left;
  padding: 4px 2px;
  cursor: pointer;
}

.autocomplete-result.is-active,
.autocomplete-result:hover {
  background-color: #4aae9b;
  color: white;
}
</style>