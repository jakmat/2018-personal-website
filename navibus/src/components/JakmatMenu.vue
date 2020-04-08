<template>
  <div class="jakmat-menu">
    <div class="jakmat-menu__input" @click="onClickTextbox">
      <span class="jakmat-menu__input__value">{{ selection }}</span>
    </div>
    <div class="jakmat-menu__list" v-if="items && isMenuVisible">
      <div
          class="jakmat-menu__list__item"
          v-for="item in items"
          :key="item.id"
          @click="onSelection(item)">
        <span class="">{{ item.caption }}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'JakmatMenu',
    props: {
      items: Array,
      value: Number,
      input: Function,
    },
    data() {
      return {
        isMenuVisible: false
      };
    },
    computed: {
      selection() {
        const item = this.items.find(i => i.id === this.value);
        return item ? item.caption : '<select>';
      }
    },
    methods: {
      onClickTextbox() {
        this.isMenuVisible = true;
      },
      onSelection(item) {
        this.input(item.id);
        this.isMenuVisible = false;
      }
    }
  }
</script>

<style lang="less">
  .jakmat-menu {
    .jakmat-menu__input {
      color: red;
    }
  }
</style>
