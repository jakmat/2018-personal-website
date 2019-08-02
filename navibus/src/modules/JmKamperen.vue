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
  name: 'JmKamperen',

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
    });
    const locations = _.map(trimmed, (item) => {
        const coords = _.truncate(item[1], { separator: ']', omission: '' }).split(', ');
				const details = item[4].split('<');   
				const nameUrl = _.trimStart(details[2], 'href');
                const nameWebsite = _.trimStart(details[2], 'a class="heading-bubble" href="https://');
                const [website, name] = nameWebsite.split('">');
        return {
            coords: {
                lon: coords[0],
                lat: coords[1]
            },
            metadata: {
                name,
                website,
                street: _.trimStart(details[4], 'p>'),
                town: _.trimStart(details[5], 'br />'),
                province: _.trimStart(details[6], 'br />'),
            },
        };
        
    });
    console.log(locations);
  },
};
</script>

<style lang="less" scoped>
.kamperen {
  width: 100%;
  height: 100%;
}
</style>
