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
import _ from 'lodash';
import { kamperen } from '../assets/kamperen.js';

export default {
  name: 'JakmatKamperen',

  data() {
    return {
      kamperen: {},
    };
  },

  mounted() {
    console.clear();
    this.kamperen = document.createElement('html');
    this.kamperen.innerHTML = kamperen;
    const scripts = this.kamperen.getElementsByTagName('script');
    const inner = _.map(scripts, 'text');
    const markers = _.filter(inner, item => _.includes(item, 'L.marker'));
    const trimmed = _.map(markers, marker => _.split(marker, '['));
    let id = 0;
    const locations = _.map(trimmed, (item) => {
      id += 1;
      const coords = _.truncate(item[1], { separator: ']', omission: '' }).split(', ');
      const details = item[4].split('<');
      const nameUrl = _.trimStart(details[2], 'href');
      const nameWebsite = _.trimStart(details[2], 'a class="heading-bubble" href="https://');
      const [website, name] = nameWebsite.split('">');
      return {
        id,
        name,
        street: _.trimStart(details[4], 'p>'),
        town: _.trimStart(details[5], 'br />'),
        province: _.trimStart(details[6], 'br />'),
        website,
        lon: coords[1],
        lat: coords[0],
      };
    });
    const csvProto = ['id,name,street,town,province,website,lon,lat'];
    locations.forEach((l) => {
      csvProto.push(`${l.id},${l.name},${l.street},${l.town},${l.province},${l.website},${l.lon},${l.lat}`);
    });
    const csv = csvProto.join('\n');
  },
};
</script>

<style lang="less" scoped>
.kamperen {
  width: 100%;
  height: 100%;
}
</style>
