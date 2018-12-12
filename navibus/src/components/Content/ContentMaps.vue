<template>
  <div class="content__maps">
    <chart />
  </div>
</template>

<script>
import Chart from '../../map/Chart.vue'

export default {
  name: 'ContentMaps',
 
  components: { 
    Chart 
  }
};
</script>

<style lang="less" scoped>
.content__maps {
  width: 100%;
  height: 100%;  
}
</style>
