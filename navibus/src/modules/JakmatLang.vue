<template>
  <div class="lang">
    <span>Woordenboek:</span>
    <ul>
        <li v-for="word in vocabulary">
            <span>{{word.rank}}. {{word.nl}} - {{word.en}}</span>
        </li>
    </ul>
  </div>
</template>

<script>
import * as data from '../assets/dutch2000.csv';
import _ from 'lodash';

export default {
  name: 'JakmatLang',

  data() {
    return {
        source: '',
        // vocabulary: []
    };
  },

  computed: {
    vocabulary() {
        const words = _.map(data, (word) => {
            return {
                rank: word.Rank,
                nl: word.Dutch,
                en: word.English
            };
        });
        return words;
    }
  },

};
</script>

<style lang="less" scoped>
.lang {
  width: 100%;
  height: 100%;
}
</style>
