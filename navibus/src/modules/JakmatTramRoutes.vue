<template>
  <div class="root">
    <jakmat-multiselect
        :items="items"
        :value="value"
        :input="input"/>
  </div>
</template>

<script>
import JakmatMultiselect from '@/components/JakmatMultiselect';

export default {
  name: 'JakmatTramRoutes',
  components: {
    JakmatMultiselect
  },
  props: {
    items: Array,
    value: Array,
    input: Function
  }
};
</script>

<style lang="less" scoped>
.root {
  width: 100%;
  height: 100%;
}
</style>
