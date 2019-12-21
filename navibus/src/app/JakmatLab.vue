<template>
  <div class="jakmat-lab">
    <!-- <jakmat-data :data="lines" :input="changeSelectedLines"/> -->
    <!-- <jakmat-lang/> -->
    <jakmat-kamperen/>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
// import JakmatData from '../modules/JakmatData';
// import JakmatLang from '../modules/JakmatLang';
import JakmatKamperen from '../modules/JakmatKamperen';

export default {
  name: 'JakmatLab',

  components: {
    // JakmatData,
    // JakmatLang,
    JakmatKamperen
  },

  computed: {
    ...mapGetters(['lines'])
  },

  methods: {
    ...mapMutations(['changeSelectedLines'])
  }
};
</script>

<style lang="less" scoped>
.jakmat-lab {
  width: 100%;
  height: 100%;
}
</style>
