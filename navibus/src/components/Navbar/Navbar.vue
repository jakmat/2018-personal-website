<template>
  <div class="navbar">
    <div class="navbar__title">
      <img class="navbar__title--logo" src="../../assets/logo2.png" alt="Logo złożone z połączonych liter inicjałów JAKMAT">
      <h1 class="navbar__title--person">Jakub Matusiak</h1>
    </div>
    <!-- <button type="button" class="navbar__button">
        <span class="sr-only">Toggle nav</span>
        <span class='icon-bar menu__btn--bar'></span>
        <span class='icon-bar menu__btn--bar'></span>
        <span  class='icon-bar menu__btn--bar'></span>
    </button> -->
    <ul class="navbar__menu">
      <li class="navbar__menu--link"><a href="#" class="active">O mnie</a></li>
      <li class="navbar__menu--link"><a href="#">Projekty</a></li>
      <li class="navbar__menu--link"><a href="#">Inspiracje</a></li>
      <li class="navbar__menu--link"><a href="#">Kontakt</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  title: 'Navbar',
};
</script>

<style lang="less" scoped>
@import '../../global.less';

.navbar {
  width: 100vw;
  height: 10%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  &__title {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;

    &--logo {
      display: block;
      height: 50px;
    }

    &--person {
      color: @font-color-light;
      font-size: @font-size-title;
      padding: 0 10px;
    }
  }

  &__menu {

  }
}
</style>
