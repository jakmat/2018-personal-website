<template>
  <div class="jm-home">
    <jm-header/>
    <jm-content/>
    <jm-footer/>
  </div>
</template>

<script>
import JmHeader from './JmHeader.vue';
import JmContent from './JmContent.vue';
import JmFooter from './JmFooter.vue';

export default {
  name: 'JmHome',

  components: {
    JmHeader,
    JmContent,
    JmFooter
  },
};
</script>

<style lang="less">
@import '../../mixins.less';

.jm-home {
  .flex(column, flex-start, flex-start);
    
  .jm-header {
    .size(100%, auto);
  }

  .jm-content {
    .size(100%, auto);
    overflow-y: auto;
  }
  
  .jm-footer {
    .size(100%, 50px);
  }

  .responsive-lg({
    width: 100vw;
    height: 100vh;
    overflow: hidden;

    .jm-header {
      .size(100%, 10%);
    }

    .jm-content {
      .size(100%, 85%);
      overflow-y: auto;
    }

    .jm-footer {
      .size(100%, 5%);
    }
  });  
}
</style>
