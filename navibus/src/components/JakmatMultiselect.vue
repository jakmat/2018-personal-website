<template>
  <div class="jakmat-multiselect">
    <div 
        class="jakmat-multiselect__item"
        v-for="(item, index) in items"
        :v-key="index">
        <div>{{ getSelection(item.id) }}</div>
        <span @click="toggleSelection(item.id)">{{ item.id }} {{ item.name }}</span>
    </div>  
  </div>
</template>

<script>
export default {
  name: 'JakmatMultiselect',
  props: {
    items: Array,
    value: Array,
    input: Function
  },
  methods: {
    isSelected(id) {
      return this.value.includes(id);
    },
    toggleSelection(id) {
      const selection = this.isSelected(id) ? this.value.filter(i => i !== id) : [ ...this.value, id ];
      this.input(selection);
    },
    getSelection(id) {
        return this.isSelected(id) ? '[x]' : '[_]';
    }
  }
};
</script>

<style lang="less" scoped>
@import '../mixins.less';

.jakmat-multiselect {
  width: 100%;
  height: 100%;

  .jakmat-multiselect__item {
    .flex(row, flex-start, center);

    span {
      margin-left: 10px;
    }
  }
}
</style>
