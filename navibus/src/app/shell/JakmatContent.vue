<template>
  <div class="jakmat-content">
    <component :is="activeContent"></component>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import JakmatTechStack from '../JakmatTechStack.vue';
import JakmatProjects from '../JakmatProjects.vue';
import JakmatAbout from '../JakmatAbout.vue';
// import JakmatInspirations from '../JakmatInspirations.vue';
// import JakmatMaps from '../JakmatMaps.vue';
// import JakmatBlog from '../JakmatBlog.vue';
import JakmatLab from '../JakmatLab.vue';

export default {
  name: 'JakmatContent',

  components: {
    JakmatTechStack,
    JakmatProjects,
    JakmatAbout,
    // JakmatInspirations,
    // JakmatMaps,
    // JakmatBlog,
    JakmatLab
  },
  
  computed: {
    ...mapGetters(['activeContent'])
  },
};
</script>

<style lang="less" scoped>
@import '../../mixins.less';
@import '../../global.less';

.jakmat-content {
  overflow-y: auto;
  background-color: @background-content;
}
</style>
