<template>
  <div class="jm-menu">
    <div class="jm-menu__title">
      <img class="jm-menu__title__logo" src="../../assets/logo2.png" alt="Logo złożone z połączonych liter inicjałów JAKMAT">
      <h1 class="jm-menu__title__person">Personal website of Jakub Matusiak, map-oriented Frontend Developer</h1>
    </div>
    <!-- <div class="jm-menu__toggle"></div> -->
  </div>
</template>

<script>
export default {
  name: 'JmMenu',
};
</script>

<style lang="less" scoped>
@import '../../mixins.less';

.jm-menu {
// @import '@/global.less';
  // background-color: @panel-background;
  height: 100%;
  width: 300px;
  padding: 20px;

  // .jm-menu__toggle {
  //   position: relative;
  //   top: 25vh;
  //   left: 19.5vw;
  //   height: 30vh;
  //   width: 10px;
  //   background-color: red;
  // }

  .jm-menu__title {
    .flex(row, center, center);

    .jm-menu__title__logo {
      display: block;
      height: 50px;
      opacity: 0.8;
    }

    .jm-menu__title__person {
      width: 180px;
      font-size: 10px;
      padding-left: 5px;
      text-align: center;
    }
  }
}
</style>
