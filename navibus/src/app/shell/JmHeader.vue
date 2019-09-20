<template>
  <div class="jm-header">
    <jm-logo/>
    <ul class="jm-header__menu">
      <li 
        class="jm-header__menu__link"
        :class="{
          lab: tab.component === 'jm-lab',
          active: tab.component === activeContent 
        }"
        v-if="tabList.length"
        v-for="tab in tabList"
        @click="goTo(tab.component)">
        <span>{{ tab.title }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import JmLogo from './JmLogo.vue';
import { mapGetters, mapActions } from 'vuex';

export default {
  title: 'JmHeader',

  components: {
    JmLogo
  },

  computed: {
    ...mapGetters(['tabs', 'lab', 'activeContent']),

    tabList() {
      return this.lab ? this.tabs : this.tabs.filter(t => t.component !== 'jm-lab');
    }
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
  width: 100%;
  .flex(row, flex-start, center);
  background-color: @background-main;
  padding-left: 40px;

  .jm-header__menu {
    width: 100%;
    .flex(row, flex-start, flex-start);
    
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
