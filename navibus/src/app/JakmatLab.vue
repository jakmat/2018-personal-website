<template>
  <div class="jakmat-lab">
    <jakmat-tram-routes
        :items="availableRoutes"
        :value="selectedRoutes"
        :input="setSelectedRoutes"/>
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
  computed: {
    ...mapGetters(['availableRoutes', 'selectedRoutes']),
  },
  methods: {
    ...mapMutations(['setSelectedRoutes']),
  },
  mounted() {
    axios
      .get('http://127.0.0.1:5000/api/v1/planets/all')
      .then(response => console.log(response));
  },
};
</script>

<style lang="less" scoped>
.jakmat-lab {
  width: 100%;
  height: 100%;
}
</style>
