<template>
  <div class="jm-header">
    <div class="jm-header__title">
      <img class="jm-header__title__logo" src="../../assets/logo2.png" alt="Logo złożone z połączonych liter inicjałów JAKMAT">
      <h1 class="jm-header__title__person">Personal website of Jakub Matusiak, map-oriented Frontend Developer</h1>
    </div>
    <ul class="jm-header__menu">
      <li 
        class="jm-header__menu__link"
        :class="{
          lab: tab.component === 'jm-lab',
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
  title: 'JmHeader',

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

.jm-header {
  width: 100vw;
  height: 10%;
  .flex(row, flex-start, center);

  .jm-header__title {
  display: flex;
  padding-left: 12px;
  .flex(row, space-between, center);

    .jm-header__title__logo {
      display: block;
      height: 50px;
      opacity: 0.8;
    }

    .jm-header__title__person {
      width: 180px;
      font-size: 10px;
      padding-left: 5px;
      text-align: center;
    }
  }

  .jm-header__menu {
    width: 100%;
    .flex(row, flex-start, center);
    
    .jm-header__menu__link {
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
