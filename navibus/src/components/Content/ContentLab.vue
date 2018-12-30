<template>
  <div class="content__lab">
    <!-- <jakmat-data/> -->
    <jakmat-lang/>
  </div>
</template>

<script>
import JakmatData from '../../modules/JakmatData';
import JakmatLang from '../../modules/JakmatLang';

export default {
  name: 'ContentLab',

  components: {
    JakmatData,
    JakmatLang
  }
};
</script>

<style lang="less" scoped>
.content__lab {
  width: 100%;
  height: 100%;
}
</style>
