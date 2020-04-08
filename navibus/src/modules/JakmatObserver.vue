<template>
  <div class="jakmat-observer" v-if="astro">
    <div class="jakmat-observer__date-picker">
      <jakmat-menu
          :items="months"
          :value="selectedMonth"
          :input="setSelectedMonth"/>
      <jakmat-menu
          :items="years"
          :value="selectedYear"
          :input="setSelectedYear"/>
    </div>
    <span>{{ astro }}</span>
  </div>
</template>

<script>
import axios from 'axios';
import { monthEnum, yearEnum, getDateRange } from "../app/helpers/time.helper";
import JakmatMenu from "../components/JakmatMenu";
import _ from 'lodash';

export default {
  name: 'JakmatObserver',
  components: {
    JakmatMenu
  },
  data() {
    return {
      planets: null,
      selectedMonth: 3,
      selectedYear: 2020,
    };
  },
  computed: {
    months() {
      return _.map(monthEnum, (i) => {
        return {
          id: i.id,
          caption: i.name
        };
      });
    },
    years() {
      return _.map(yearEnum(), (i) => {
        return {
          id: i,
          caption: i
        };
      });
    },
    astro() {
      if (!this.planets) return null;
      const {
        azimuth, altitude, objective, place, time,
      } = this.planets;
      return `Obserwuję ${objective} w ${place}, dn. ${time}, kierunek: ${azimuth}, wysokość: ${altitude}`;
    },
  },
  methods: {
    api() {
      return axios
        .get('http://127.0.0.1:5000/api/v1/planets/all')
        .then(response => response.data);
    },
    async fetchPlanets() {
      const planets = await this.api();
      this.planets = planets;
    },
    setSelectedMonth(input) {
      this.selectedMonth = input;
    },
    setSelectedYear(input) {
      this.selectedYear = input;
    },
  },
  mounted() {
    this.fetchPlanets();
  },
};
</script>

<style lang="less">
  @import '../mixins';

  .jakmat-observer {
    .jakmat-observer__date-picker {
      .flex(row, flex-start, center);
    }
  }
</style>
