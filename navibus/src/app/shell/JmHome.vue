<template>
  <div class="jm-home">
    <jm-menu />
    <jm-content />
  </div>
</template>

<script>
import JmMenu from './JmMenu.vue';
import JmContent from './JmContent.vue';

export default {
  name: 'JmHome',

  components: {
    JmMenu,
    JmContent,
  },
};
</script>

<style lang="less">
@import '../../mixins.less';

.jm-home {
 .flex(row, flex-start, flex-start);
 width: 100vw;
 height: 95vh;
}
</style>
