<template>
  <div class="content">
    <component :is="activeContent"></component>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import ContentAbout from './ContentAbout.vue';
import ContentProjects from './ContentProjects.vue';
import ContentInspirations from './ContentInspirations.vue';
import ContentMaps from './ContentMaps.vue';
import ContentContact from './ContentContact.vue';

export default {
  name: 'ContentRoot',

  components: {
    ContentAbout,
    ContentProjects,
    ContentInspirations,
    ContentMaps,
    ContentContact
  },
  
  computed: {
      ...mapGetters(['activeContent'])
  },
};
</script>

<style lang="less" scoped>
.content {
  width: 80vw;
  height: 88vh;
  background-color: #fff;

}
</style>
