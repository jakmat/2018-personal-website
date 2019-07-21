<template>
  <div class="jm-content">
    <component :is="activeContent"></component>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import JmAbout from '../about/JmAbout.vue';
import JmProjects from '../projects/JmProjects.vue';
import JmInspirations from '../inspirations/JmInspirations.vue';
import JmMaps from '../maps/JmMaps.vue';
import JmContact from '../contact/JmContact.vue';
import JmBlog from '../blog/JmBlog.vue';
import JmLab from '../lab/JmLab.vue';

export default {
  name: 'JmContent',

  components: {
    JmAbout,
    JmProjects,
    JmInspirations,
    JmMaps,
    JmBlog,
    JmContact,
    JmLab
  },
  
  computed: {
    ...mapGetters(['activeContent'])
  },
};
</script>

<style lang="less" scoped>
@import '../../global.less';

.jm-content {
  min-width: 82vw;
  height: 88vh;
  background-color: @background-content;
  overflow-y: auto;
}
</style>
