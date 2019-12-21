<template>
  <div class="jakmat-footer">
    <span class="jakmat-footer__copyright">&copy; 2018 jakmat</span>
  </div>
</template>

<script>

export default {
  title: 'JakmatFooter'
};
</script>

<style lang="less" scoped>
@import '../../global.less';
@import '../../mixins.less';

.jakmat-footer {
  .flex(row, center, center);
  font-size: @appFontSize;
  background-color: @background-main;
  
  .jakmat-footer__copyright {
    user-select: none;
  }

  .responsive-md({
    .flex(row, flex-end, center);
    padding: 0 20px 2px 0;
  });
}
</style>
