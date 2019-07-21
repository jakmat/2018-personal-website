<template>
  <div class="kamperen">
    <span>Kamperen</span>
    <ul>
        {{kamperen}}
        <!-- <li v-for="word in vocabulary">
            <span>{{word.rank}}. {{word.nl}} - {{word.en}}</span>
        </li> -->
    </ul>
  </div>
</template>

<script>
import { kamperen } from '../assets/kamperen.js';
import _ from 'lodash';

export default {
  name: 'JakmatKamperen',

  data() {
    return {
        kamperen: {}
    };
  },

  mounted() {
      console.clear();
    this.kamperen = document.createElement('html');
    this.kamperen.innerHTML = kamperen;
    const scripts = this.kamperen.getElementsByTagName('script');
    const inner = _.map(scripts, 'text')
    const markers = _.filter(inner, (item) => {
        return _.includes(item, 'L.marker');
    });
    const trimmed = _.map(markers, (marker) => {
        return _.split(marker, '[');
    })
    const locations = _.map(trimmed, (item) => {
        return {
            coords: _.trimEnd(item[1], ']'),
            details: item[4]
        };
    });
    console.log(locations)
  },

//   computed: {
   
//   },

};
</script>

<style lang="less" scoped>
.kamperen {
  width: 100%;
  height: 100%;
}
</style>
