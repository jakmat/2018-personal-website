<template>
  <div class="jm-content">
    <component :is="activeContent"></component>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import JmAbout from '../JmAbout.vue';
import JmProjects from '../JmProjects.vue';
// import JmInspirations from '../JmInspirations.vue';
// import JmMaps from '../JmMaps.vue';
// import JmContact from '../JmContact.vue';
// import JmBlog from '../JmBlog.vue';
import JmLab from '../JmLab.vue';

export default {
  name: 'JmContent',

  components: {
    JmAbout,
    JmProjects,
    // JmInspirations,
    // JmMaps,
    // JmBlog,
    // JmContact,
    JmLab
  },
  
  computed: {
    ...mapGetters(['activeContent'])
  },
};
</script>

<style lang="less" scoped>
@import '../../mixins.less';
@import '../../global.less';

.jm-content {
  overflow-y: auto;
  // .flex(column, flex-start, center);
  // width: 100%;
  // margin: 18px 20px 20px 0;
  background-color: @background-content;
}
</style>
