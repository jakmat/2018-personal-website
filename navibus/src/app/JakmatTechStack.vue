<template>
  <div class="jakmat-tech-stack">
    <ul class="jakmat-tech-stack__legend">
      <li v-for="description in legend">{{description}}</li>
    </ul>
    <ul class="jakmat-tech-stack__items">
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
  name: 'JakmatTechStack',

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

.jakmat-tech-stack {
  padding: 10px 0;

  .jakmat-tech-stack__legend {
    font-size: @appFontSize;
    margin-left: 2px;
    margin-top: 6px;
  }

  .jakmat-tech-stack__items {
    .flex(column, flex-start, flex-start);
    padding-left: 40px;

    li {
      .flex(row, space-between, center);
      font-size: @appFontSize;
      background-color: @itemBackgroundColor;
      border-radius: @appBorderRadius;
      width: 90%;
      margin: 2px 0;
      padding: 5px 15px;
    } 

    .responsive-sm({
      flex-wrap: wrap;
      height: 760px;

      li {
        width: 40%;
      }
    });

    .responsive-md({
      li {
        width: 40%;
      }
    });

    .responsive-lg({
      .flex(column, flex-start, flex-start);
      height: 500px;

      li {
        width: 30%;
        padding: 5px 15px;      
      }
    });

    .responsive-xl({
      height: 510px;
    });   
  }
}
</style>
