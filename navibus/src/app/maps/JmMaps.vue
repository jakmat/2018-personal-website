<template>
  <div class="jm-maps">
    <jm-map-root/>
  </div>
</template>

<script>
import JmMapRoot from './JmMapRoot.vue'

export default {
  name: 'JmMaps',
 
  components: { 
    JmMapRoot 
  }
};
</script>

<style lang="less" scoped>
.jm-maps {
  width: 100%;
  height: 100%;  
}
</style>
