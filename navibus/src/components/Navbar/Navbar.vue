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
      <!-- <li 
        class="navbar__menu--link"
        v-if="tabs.length"
        v-for="tab in tabs"
        @click="goTo(tab)">
        {{ tab.title }}
      </li> -->
      <li class="navbar__menu--link"><a href="#" class="active">About me</a></li>
      <li class="navbar__menu--link"><a shref="#">Projects</a></li>
      <li class="navbar__menu--link"><a href="#">Inspirations</a></li>
      <li class="navbar__menu--link"><a href="#">Maps</a></li>
      <li class="navbar__menu--link"><a href="#">Contacts</a></li>
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
@import '../../mixins.less';

.navbar {
  width: 100vw;
  height: 10%;
  .flex(row, space-between, center);

  &__title {
  display: flex;
  padding: 0 12px;
  .flex(row, space-between, center);

    &--logo {
      display: block;
      height: 50px;
    }

    &--person {
      font-size: @navbar-title-font-size;
      padding: 0 10px;
    }
  }

  &__menu {
    width: 50%;
    .flex(row, flex-start, center);
    
    &--link {
      font-size: @navbar-link-font-size;
      background: @navbar-link-background;
      margin: 0 10px;
      padding: 5px 10px;
      &:first-child {
        margin-left: 0;
      }
      &:last-child {
        margin-right: 0;
      }
    }
  }
}
</style>
