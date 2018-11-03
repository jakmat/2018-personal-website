<template>
  <div class="map">
    <div id="leaflet"></div>
  </div>
</template>

<script>
import leaflet from 'leaflet'; 

export default {
  name: 'Map',

  data() {
    return {
      map: null
    };
  },

  mounted() {
    this.map = leaflet.map('leaflet').setView([51.505, -0.09], 13);
    // this.addMap();
    console.log(this.map);

  },

  methods: {
    addMap() {
      leaflet.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox.streets',
        accessToken: 'pk.eyJ1IjoiamFrbWF0IiwiYSI6ImNqbzFzaDBjcjBkcGgza29hbmU4dWV2NzcifQ.60inihwM9A5HEuK0pHvtIQ'
      }).addTo(this.map);
    }
  }
}
</script>

<style lang="less" scoped>
.map {
  background-color: #202020;
  width: 80vw;
  height: 100%;
  
  #leaflet {
    width: 500px;
    height: 250px;

  }
}
</style>