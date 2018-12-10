<template>
  <div id="app">
    <navbar />
    <div class="main">
      <chart />
      <panel />
    </div>
  </div>
</template>

<script>
import store from 'vuex';
import Navbar from './components/Navbar/Navbar.vue';
import Chart from './map/Chart.vue';
import Panel from './components/Panel/Panel.vue';

export default {
  name: 'App',

  components: {
    Chart,
    Panel,
    Navbar,
  },

  mounted() {
    console.log(this);
    this.updateVariable(1987);
  },

  computed: {
    // ...mapGetters(['variable'])
  },

  methods: {
    async updateVariable(value) {
      console.log(this.$store);

      await this.$store.dispatch('changeVariable', value);
    },
  },
};
</script>

<style lang="less">
@import url("~leaflet/dist/leaflet.css");


body {
  margin: 0;
  padding: 0;
}

#app {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;

  .main {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    // background-color: yellow;
    width: 100%;
    height: 90%;
  }
}
</style>
