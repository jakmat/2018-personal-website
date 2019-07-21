<template>
  <div class="jm-content">
    <jm-header />
    <component :is="activeContent"></component>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import JmHeader from './JmHeader.vue';
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
    JmHeader,
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
  width: 100%;
  max-height: 880px;
  margin: 18px 20px 20px 0;
  background-color: @background-content;
  overflow-y: auto;
}
</style>
