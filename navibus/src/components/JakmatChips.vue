<template>
  <div class="chips">
    <div class="chips__container">
        <div
            class="chips__container--chip"
            v-for="(item, index) in value"
            :key="index"
            v-if="item.isSelected">
            <span>{{item.id}} {{item.name}}</span>
        </div>
        <!-- <jakmat-chip/> -->
    </div>
    <div class="chips__combobox">
        <div
            class="chips__combobox--option"
            v-for="(item, index) in value"
            :key="index"
            v-if="value.length">
            <input type="checkbox" id="checkbox" v-model="item.isSelected">
            <label for="checkbox">{{item.id}} {{item.name}}</label>
        </div>
    </div>
  </div>
</template>

<script>
// import JakmatChip from './JakmatChip';

export default {
  name: 'JakmatChips',

  mounted() {
  },

  components: {
    //   JakmatChip
  },

  props: {
    value: Array,
  },

  data() {
    return {

    };
  },

  computed: {

  },
};
</script>

<style lang="less" scoped>
.chips {
  width: 100%;
  height: 100%;
}
</style>
