<template>
  <div id="app">
    <Map />
    <Panel />
  </div>
</template>

<script>
import store from 'vuex';
import Map from './map/Map.vue';
import Panel from './components/Panel/Panel.vue';

export default {
  name: 'App',

  components: {
    Map,
    Panel
  },

  mounted() {
    console.log(this)
    this.updateVariable(1987);
  },

  computed: {
    // ...mapGetters(['variable'])
  },

  methods: {
    async updateVariable(value) {
      console.log(this.$store)

      await this.$store.dispatch('changeVariable', value);
    }
  }
}
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
  flex-direction: row;
} 
</style>
