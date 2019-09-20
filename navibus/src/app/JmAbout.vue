<template>
  <div class="jm-tech-stack">
    <ul class="jm-tech-stack__legend">
      <li v-for="description in legend">{{description}}</li>
    </ul>
    <ul class="jm-tech-stack__items">
      <li v-for="technology in stack">
        <span>{{technology.name}}</span> 
        <span>{{technology.stars}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import technologies from '../assets/technologies.json';

export default {
  name: 'JmAbout',

  data() {
    return {
      legend: [
        'Technology usage:',
        '***** // on daily basis, in current projects',
        '**** // repeatedly, in current projects',
        '*** // widely, in past projects',
        '** // in order to fulfill minor tasks in the past projects',
        '* // aiming to acquire some basic understanding'
      ]
    };
  },

  computed: {
    stack() {
      return technologies.map((i) => {
        return {
          ...i,
          stars: this.getStars(i)
        };
      }).sort((i,j) => j.level - i.level);
    }
  },
 
  methods: {
    getStars(item) {
      let stars = '';
      for (let i = 0; i < item.level; i += 1) {
        stars += '*';
      }
      return stars;
    }
  }
};
</script>

<style lang="less" scoped>
@import '../mixins.less';
@import '../global.less';

.jm-tech-stack {
  padding: 10px 0;

  .jm-tech-stack__legend {
    font-size: @appFontSize;
    margin-left: 2px;
  }

  .jm-tech-stack__items {
    .flex(column, flex-start, flex-start);
    flex-wrap: wrap;
    height: 61vh;
    padding-top: 10px;

    li {
      font-size: @appFontSize;
      background-color: @itemBackgroundColor;
      border-radius: @appBorderRadius;
      width: 19vw;
      margin: 2px 0;
      padding: 5px 15px;
      .flex(row, space-between, center);
    }    
  }

}
</style>
