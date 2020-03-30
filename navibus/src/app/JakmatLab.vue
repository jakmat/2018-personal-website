<template>
  <div class="jakmat-lab">
    <div class="planets" v-if="astro">
      <span>{{ astro }}</span>
    </div>
<!--    <jakmat-tram-routes-->
<!--        :items="availableRoutes"-->
<!--        :value="selectedRoutes"-->
<!--        :input="setSelectedRoutes"/>-->
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import axios from 'axios';
import JakmatTramRoutes from '../modules/JakmatTramRoutes';

export default {
  name: 'JakmatLab',
  components: {
    JakmatTramRoutes,
  },
  data() {
    return {
      planets: null
    };
  },
  computed: {
    ...mapGetters(['availableRoutes', 'selectedRoutes']),
    astro() {
      if (!this.planets) return null;
      const { azimuth, altitude, objective, place, time } = this.planets;
      return `Obserwuję ${objective} w ${place}, dn. ${time}, kierunek: ${azimuth}, wysokość: ${altitude}`;
    }
  },
  methods: {
    ...mapMutations(['setSelectedRoutes']),
    api() {
      return axios
        .get('http://127.0.0.1:5000/api/v1/planets/all')
        .then((response) => {
          return response.data;
        });
    },
    async fetchPlanets() {
      const planets = await this.api();
      this.planets = planets;
    }
  },
  mounted() {
    this.fetchPlanets();
  },
};
</script>

<style lang="less" scoped>
.jakmat-lab {
  width: 100%;
  height: 100%;

  .planets {
    padding: 20px 40px;
  }
}
</style>
