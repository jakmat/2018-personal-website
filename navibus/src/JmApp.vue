<template>
  <div id="jm-app">
    <jm-home/>
  </div>
</template>

<script>
import store from 'vuex';
import JmHome from './app/shell/JmHome.vue';


export default {
  name: 'JmApp',

  components: {
    JmHome
  }  
};
</script>

<style lang="less">
@import url("~leaflet/dist/leaflet.css");
@import './global.less';
@import './mixins.less';

* {
    box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
  background-color: @background-main;
  color: @font-color-light;
  font-family: @font-app;

  .scrollbar();
 
  a {
    text-decoration: none;
    color: @font-color-light;
  }

  ul {
    list-style-type: none;
  }
}
</style>
