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
  },

  mounted() {
    this.updateVariable(1987);
  },

  computed: {
    // ...mapGetters(['variable'])
  },

  methods: {
    async updateVariable(value) {
      await this.$store.dispatch('changeVariable', value);
    },
  },
};
</script>

<style lang="less">
@import url("~leaflet/dist/leaflet.css");
@import './global.less';

body {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  background-color: @background-main;
  color: @font-color-light;
  font-family: @font-app;

  a {
    text-decoration: none;
    color: @font-color-light;
  }

  ul {
    list-style-type: none;
  }
  // font-family: 
}

#jm-app {
  // width: 100vw;
  // height: 100vh;
  // overflow-y: hidden;
  // display: flex;
  // flex-direction: column;

  // .jm-main {
  //   display: flex;
  //   flex-direction: row;
  //   justify-content: flex-start;
  //   align-items: flex-start;
  //   width: 100%;
  //   height: 90%;
  // }
}
</style>
