<template>
  <div class="root">
    <jakmat-multiselect v-model="data" :input="onSelection"/>
    <!-- <jakmat-treeview v-model="data" :input="onSelection"/> -->
  </div>
</template>

<script>
import JakmatMultiselect from './JakmatMultiselect';

export default {
  name: 'JakmatData',

  components: {
    JakmatMultiselect
  },

  props: {
    data: Array,
    input: Function
  },

  methods: {
    onSelection(items) {
        this.input(items.filter(i => i.isSelected));
    }
  }
};
</script>

<style lang="less" scoped>
.root {
  width: 100%;
  height: 100%;
}
</style>
