<template>
  <div class="jm-tech-stack">
    <ul class="jm-tech-stack__legend">
      <li v-for="description in legend">{{description}}</li>
    </ul>
    <ul class="jm-tech-stack__items">
      <li v-for="technology in stack">{{technology.name}} {{technology.stars}}</li>
    </ul>
  </div>
</template>

<script>
import technologies from '../../assets/technologies.json';

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
@import '../../mixins.less';

.jm-tech-stack {

  .jm-tech-stack__legend {

  }

  .jm-tech-stack__items {
    margin-top: 50px;
    .flex(column, flex-start, flex-start);
    flex-wrap: wrap;
    height: 500px;

    li {
      width: 300px;
      margin: 0;
    }    
  }

}
</style>
