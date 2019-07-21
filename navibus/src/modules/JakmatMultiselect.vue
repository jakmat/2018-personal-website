<template>
  <div class="jm-multiselect">
    <div 
        class="jm-multiselect__item"
        v-for="(item, index) in value"
        :v-key="index">
        <div>{{ getSelection(item) }}</div>
        <span @click="toggleSelection(item)">{{ item.name }}</span>
    </div>  
  </div>
</template>

<script>
// import JakmatMultiselectItem from './JakmatMultiselectItem';

export default {
  name: 'JakmatMultiselect',

  components: {
    //   JakmatMultiselectItem
  },

  props: {
      value: Array,
      input: Function
  },

  methods: {
    toggleSelection(item) {
        item.isSelected = !item.isSelected;
        this.input(this.value);
    },
    getSelection(item) {
        return item.isSelected ? '[ x ]' : '[  ]';
    }
  }
};
</script>

<style lang="less" scoped>
.js-multiselect {
  width: 100%;
  height: 100%;
}
</style>
