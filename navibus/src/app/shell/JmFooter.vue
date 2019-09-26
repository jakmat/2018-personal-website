<template>
  <div class="jm-footer">
    <span class="jm-footer__copyright">&copy; 2018 jakmat</span>
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
  
  .jm-footer__copyright {
    padding: 0 20px 2px 0;
    user-select: none;
  }
}
</style>
