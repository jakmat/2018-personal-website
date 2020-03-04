<template>
  <div id="jakmat-app">
    <jakmat-home/>
  </div>
</template>

<script>
import store from 'vuex';
import JakmatHome from './app/shell/JakmatHome.vue';


export default {
  name: 'JakmatApp',

  components: {
    JakmatHome
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

html {
  width: 100vw;
  height: 100vh;


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
}

</style>
