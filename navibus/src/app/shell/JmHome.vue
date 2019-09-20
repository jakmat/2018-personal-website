<template>
  <div class="jm-home">
    <jm-menu/>
    <div class="jm-main">
      <jm-header/>
      <jm-content/>
    </div>
  </div>
</template>

<script>
import JmMenu from './JmMenu.vue';
import JmHeader from './JmHeader.vue';
import JmContent from './JmContent.vue';

export default {
  name: 'JmHome',

  components: {
    JmMenu,
    JmHeader,
    JmContent,
  },
};
</script>

<style lang="less">
@import '../../mixins.less';

.jm-home {
 .flex(row, flex-start, flex-start);
 width: 100vw;
 height: 98vh;
 overflow: hidden;
   
  .jm-menu {
    .size(250px, 100%);
    padding: 20px;
   }

  .jm-main {
    .size(77vw, 95%);
    padding-top: 20px;

    .jm-header {
     .size(100%, 12%);
    }
 
   .jm-content {
     .size(100%, 88%);
     overflow-y: auto;
   }
 }
}
</style>
