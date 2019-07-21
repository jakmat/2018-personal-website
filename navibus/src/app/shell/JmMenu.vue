<template>
  <div class="jm-menu">
    <!-- <div class="jm-menu__toggle"></div> -->
  </div>
</template>

<script>
export default {
  name: 'JmMenu',
};
</script>

<style lang="less" scoped>

.jm-menu {
// @import '@/global.less';
  // background-color: @panel-background;
  width: 17vw;
  height: 100%;

  .jm-menu__toggle {
    position: relative;
    top: 25vh;
    left: 19.5vw;
    height: 30vh;
    width: 10px;
    background-color: red;
  }
}
</style>
