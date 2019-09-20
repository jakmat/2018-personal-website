<template>
  <div class="jm-footer">
    <span>&copy; 2018 jakmat</span>
  </div>
</template>

<script>

export default {
  title: 'JmFooter'
};
</script>

<style lang="less" scoped>
@import '../../global.less';
@import '../../mixins.less';

.jm-footer {
  .flex(row, flex-end, center);
  font-size: @appFontSize;
  background-color: @background-main;
  
  span {
    padding: 0 20px 2px 0;
  }
}
</style>
