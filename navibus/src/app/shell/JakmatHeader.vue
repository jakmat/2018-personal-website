<template>
  <div class="jakmat-header">
    <div class="jakmat-header__logo">
      <div class="jakmat-header__logo__title">
        <img class="jakmat-header__logo__title__logo" src="../../assets/logo2.png" alt="Logo złożone z połączonych liter inicjałów JAKMAT">
        <h1 class="jakmat-header__logo__title__person">Personal Website of Jakub Matusiak, Map-Oriented Web Developer</h1>
      </div>
    </div>
    <ul class="jakmat-header__menu">
      <li 
        class="jakmat-header__menu__link"
        :class="{
          lab: tab.component === 'jakmat-lab',
          active: tab.component === activeContent 
        }"
        v-if="tabList.length"
        v-for="tab in tabList"
        @click="changeActiveContent(tab.component)">
        <span>{{ tab.title }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  title: 'JakmatHeader',

  computed: {
    ...mapGetters(['tabs', 'lab', 'activeContent']),

    tabList() {
      return this.lab ? this.tabs : this.tabs.filter(t => t.component !== 'jakmat-lab');
    }
  },

  methods: {
    ...mapActions(['changeActiveContent']),
  }

};
</script>

<style lang="less" scoped>
@import '../../global.less';
@import '../../mixins.less';

.jakmat-header {  
  .flex(row, center, center);
  background-color: @background-main;
  flex-wrap: wrap;
  padding-top: 20px;
    
  .responsive-sm({
    .flex(row, flex-start, center);
  });

  .responsive-md({
    padding-top: 0;
  });
  
  .responsive-lg({    
    flex-wrap: nowrap;
  });

  .jakmat-header__logo {
    padding: 0 40px;

    .jakmat-header__logo__title {
      .size(auto, 56px);
      .flex(row, center, center);

      .jakmat-header__logo__title__logo {
        display: block;
        height: 50px;
        opacity: 0.8;
      }

      .jakmat-header__logo__title__person {
        width: 180px;
        font-size: 10px;
        padding: 1px 0 0 5px;
        text-align: center;
        user-select: none;
        line-height: 15px;
      }
    }
  }

  .jakmat-header__menu {
    .flex(row, center, flex-start);
    flex-wrap: wrap;
    padding: 0 40px;


    .responsive-lg({    
      .flex(row, flex-start, flex-start);
      flex-wrap: nowrap;
    });
    
    .jakmat-header__menu__link {
      cursor: pointer;
      font-size: @navbar-link-font-size;
      background: @navbar-link-background;
      text-align: center;
      .size(200px, 50px);
      .flex(row, center, center);
      margin: 15px 10px;
      padding: 5px 10px;
      border-radius: @appBorderRadius;
      user-select: none;

      // &:first-child {
      //   margin-left: 0;
      //   margin-right: 0;
      // }

      .responsive-lg({
        .size(100px, auto);
        margin: 5px 10px;
      });
      
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
