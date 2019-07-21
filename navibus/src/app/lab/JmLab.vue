<template>
  <div class="jm-lab">
    <!-- <jm-data :data="lines" :input="changeSelectedLines"/> -->
    <!-- <jm-lang/> -->
    <!-- <jm-kamperen/> -->
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
// import JmData from '../../modules/JmData';
// import JmLang from '../../modules/JmLang';
// import JmKamperen from '../../modules/JmKamperen';

export default {
  name: 'JmLab',

  components: {
    // JmData,
    // JmLang,
    // JmKamperen
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
.jm-lab {
  width: 100%;
  height: 100%;
}
</style>
