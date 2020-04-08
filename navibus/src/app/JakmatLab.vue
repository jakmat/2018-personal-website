<template>
  <div class="jakmat-lab">
    <jakmat-observer/>
  </div>
</template>

<script>
import JakmatObserver from '../modules/JakmatObserver';

export default {
  name: 'JakmatLab',
  components: {
    JakmatObserver
  }
};
</script>

<style lang="less" scoped>
.jakmat-lab {
  width: 100%;
  height: 100%;
  padding: 20px 40px;
}
</style>
