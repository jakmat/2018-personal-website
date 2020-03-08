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
  padding: 20px 0;

  .jakmat-tech-stack__legend {
    font-size: @appFontSize;
    margin-left: 2px;
    margin-top: 6px;
  }

  .jakmat-tech-stack__items {
    .flex(column, flex-start, space-around);
    flex-wrap: wrap;
    max-width: 95%;

    li {
      .flex(row, space-between, center);
      font-size: @appFontSize;
      background-color: @itemBackgroundColor;
      border-radius: @appBorderRadius;
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

      li {
        width: 30%;
        margin: 5px 10px;      
      }
    });

    .responsive-xl({
      li {
        width: 25%;
        padding: 5px 15px;      
      }
    });   
  }
}
</style>
