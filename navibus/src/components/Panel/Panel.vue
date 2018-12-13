<template>
  <div class="panel">
    <!-- <div class="panel__toggle"></div> -->
  </div>
</template>

<script>
export default {
  name: 'Panel',
};
</script>

<style lang="less" scoped>

.panel {
// @import '@/global.less';
  // background-color: @panel-background;
  width: 19vw;
  height: 100%;

  &__toggle {
    position: relative;
    top: 25vh;
    left: 19.5vw;
    height: 30vh;
    width: 10px;
    background-color: red;
  }
}
</style>
