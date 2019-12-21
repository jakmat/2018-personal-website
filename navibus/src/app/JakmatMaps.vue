<template>
  <div class="jakmat-maps">
    <jakmat-map-root/>
  </div>
</template>

<script>
import JakmatMapRoot from './maps/JakmatMapRoot.vue'

export default {
  name: 'JakmatMaps',
 
  components: { 
    JakmatMapRoot 
  }
};
</script>

<style lang="less" scoped>
.jakmat-maps {
  width: 100%;
  height: 100%;  
}
</style>
