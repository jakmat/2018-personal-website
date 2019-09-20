<template>
  <div class="jm-logo">
    <div class="jm-logo__title">
      <img class="jm-logo__title__logo" src="../../assets/logo2.png" alt="Logo złożone z połączonych liter inicjałów JAKMAT">
      <h1 class="jm-logo__title__person">Personal website of Jakub Matusiak, map-oriented Frontend Developer</h1>
    </div>
    <!-- <div class="jm-logo__toggle"></div> -->
  </div>
</template>

<script>
export default {
  name: 'JmLogo',
};
</script>

<style lang="less" scoped>
@import '../../mixins.less';

.jm-logo {
// @import '@/global.less';
  // background-color: @panel-background;
  // min-width: 250px;

  // .jm-logo__toggle {
  //   position: relative;
  //   top: 25vh;
  //   left: 19.5vw;
  //   height: 30vh;
  //   width: 10px;
  //   background-color: red;
  // }

  .jm-logo__title {
    .size(auto, 56px);
    .flex(row, center, center);

    .jm-logo__title__logo {
      display: block;
      height: 50px;
      opacity: 0.8;
    }

    .jm-logo__title__person {
      width: 180px;
      font-size: 10px;
      padding-left: 5px;
      text-align: center;
    }
  }
}
</style>
