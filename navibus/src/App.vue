<template>
  <div id="app">
    <navbar />
    <div class="main">
      <panel />
      <content-root />
    </div>
  </div>
</template>

<script>
import store from 'vuex';
import Navbar from './components/Navbar/Navbar.vue';
import Panel from './components/Panel/Panel.vue';
import ContentRoot from './components/Content/ContentRoot.vue';

export default {
  name: 'App',

  components: {
    Navbar,
    Panel,
    ContentRoot,
  },

  mounted() {
    console.log(this);
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

#app {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;

  .main {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    height: 90%;
  }
}
</style>
