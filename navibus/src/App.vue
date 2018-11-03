<template>
  <div id="app">
    <Map />
    <Panel />
  </div>
</template>

<script>
import Map from './map/Map.vue';
import Panel from './components/Panel/Panel.vue';

export default {
  name: 'App',
  components: {
    Map,
    Panel
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
