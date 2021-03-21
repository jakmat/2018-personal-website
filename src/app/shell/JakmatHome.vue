<template>
  <div class="jakmat-home">
    <jakmat-header/>
    <jakmat-content/>
    <jakmat-footer/>
  </div>
</template>

<script>
import JakmatHeader from './JakmatHeader.vue';
import JakmatContent from './JakmatContent.vue';
import JakmatFooter from './JakmatFooter.vue';

export default {
  name: 'JakmatHome',

  components: {
    JakmatHeader,
    JakmatContent,
    JakmatFooter,
  },
};
</script>

<style lang="less">
@import '../../mixins.less';

.jakmat-home {
  .flex(column, flex-start, flex-start);

  .jakmat-header {
    .size(100%, auto);
  }

  .jakmat-content {
    .size(100%, auto);
    overflow-y: auto;
    padding: 40px 0;
  }

  .jakmat-footer {
    .size(100%, 50px);
  }

  .responsive-lg({
    width: 100vw;
    height: 100vh;
    overflow: hidden;

    .jakmat-header {
      .size(100%, 10%);
    }

    .jakmat-content {
      .size(100%, 85%);
      overflow-y: auto;
      overflow-x: visible;
    }

    .jakmat-footer {
      .size(100%, 5%);
    }
  });
}
</style>
