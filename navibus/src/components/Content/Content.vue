<template>
  <div class="content">
      <component :is="activeContent"></component>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import ContentAbout from './ContentAbout';
import ContentProjects from './ContentProjects';
import ContentInspirations from './ContentInspirations';
import ContentMaps from './ContentMaps';
import ContentContact from './ContentContact';

export default {
  name: 'Content',
  
  computed: {
      ...mapGetters(['activeContent'])
  },
};
</script>

<style lang="less" scoped>
.content {
  background-color: white;
  width: 80vw;
  height: 88vh;  
}
</style>
