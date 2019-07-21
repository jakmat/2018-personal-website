<template>
  <div id="jm-app">
    <jm-header />
    <div class="jm-main">
      <jm-menu />
      <jm-content />
    </div>
  </div>
</template>

<script>
import store from 'vuex';
import JmHeader from './app/shell/JmHeader.vue';
import JmMenu from './app/shell/JmMenu.vue';
import JmContent from './app/shell/JmContent.vue';

export default {
  name: 'JmApp',

  components: {
    JmHeader,
    JmMenu,
    JmContent,
  },

  mounted() {
    this.updateVariable(1987);
  },

  computed: {
    // ...mapGetters(['variable'])
  },

  methods: {
    async updateVariable(value) {
      console.log(this.$store);

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
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;

  .jm-main {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    height: 90%;
  }
}
</style>
