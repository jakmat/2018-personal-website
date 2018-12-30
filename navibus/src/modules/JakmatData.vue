<template>
  <div class="root">
    <jakmat-chips v-model="lines"/>
  </div>
</template>

<script>
import JakmatChips from './JakmatChips';

export default {
  name: 'JakmatData',

  components: {
    JakmatChips
  },

  data() {
    return {
         lines: [
             {
                 id: '1',
                 name: 'Doły - Chojny',
                 isSelected: false
             },
             {
                 id: '2',
                 name: 'Teofilów - Dąbrowa',
                 isSelected: false
             },
             {
                 id: '3',
                 name: 'Marysin - Augustów',
                 isSelected: false
             },
             {
                 id: '4',
                 name: 'Helenówek - Dąbrpwa',
                 isSelected: false
             },
             {
                 id: '5',
                 name: 'Żabieniec - Kurczaki',
                 isSelected: false
             },
             {
                 id: '6',
                 name: 'Doły - Kurczaki',
                 isSelected: false
             },
             {
                 id: '7',
                 name: 'Koziny - Niższa',
                 isSelected: false
             },
             {
                 id: '8',
                 name: 'Kochanówka - Lodowa',
                 isSelected: false
             },
             {
                 id: '9',
                 name: 'Olechów - Zdrowie',
                 isSelected: false
             },

         ]
    };
  }
};
</script>

<style lang="less" scoped>
.root {
  width: 100%;
  height: 100%;
}
</style>
