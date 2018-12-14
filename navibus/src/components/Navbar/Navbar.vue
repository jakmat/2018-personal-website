<template>
  <div class="navbar">
    <div class="navbar__title">
      <img class="navbar__title--logo" src="../../assets/logo2.png" alt="Logo złożone z połączonych liter inicjałów JAKMAT">
      <span class="navbar__title--focus">WEB DEV</span>
      <h1 class="navbar__title--person">Personal page of Jakub Matusiak, map-oriented Frontend Developer</h1>
    </div>
    <ul class="navbar__menu">
      <li 
        class="navbar__menu--link"
        :class="{
          lab: tab.component === 'content-lab',
          active: tab.component === activeContent 
        }"
        v-if="tabs.length"
        v-for="tab in tabs"
        @click="goTo(tab.component)">
        <span>{{ tab.title }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  title: 'Navbar',

  computed: {
    ...mapGetters(['tabs', 'lab', 'activeContent']),
  },

  methods: {
    ...mapActions({ goTo: 'changeActiveContent' }),
  }

};
</script>

<style lang="less" scoped>
@import '../../global.less';
@import '../../mixins.less';

.navbar {
  width: 100vw;
  height: 10%;
  .flex(row, flex-start, center);

  &__title {
  display: flex;
  padding-left: 12px;
  .flex(row, space-between, center);

    &--logo {
      display: block;
      height: 50px;
      opacity: 0.8;
    }

    &--focus {
      width: 50px;
      // color: #fff;
      font-size: @navbar-title-font-size;
      font-weight: 300;
    }

    &--person {
      width: 160px;
      font-size: 10px;
      padding-left: 12px;
    }
  }

  &__menu {
    width: 100%;
    .flex(row, flex-start, center);
    
    &--link {
      cursor: pointer;
      font-size: @navbar-link-font-size;
      background: @navbar-link-background;
      text-align: center;
      width: 100px;
      margin: 0 10px;
      padding: 5px 10px;
      
      &:first-child {
        margin-left: 0;
      }
      
      &:last-child {
        margin-right: 0;
      }
      
      &.lab {
        background-color: @navbar-link-background-lab;
        
        &:hover {
          background-color: @navbar-link-background-lab-hover;
        }

        &.active {
          background-color: @navbar-link-background-lab-active;
        }
      }
      
      &:hover {
        background-color: @navbar-link-background-hover;
      }

      &.active {
        background-color: @navbar-link-background-active;
      }
    }
  }
}
</style>
