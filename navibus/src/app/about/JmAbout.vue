<template>
  <div class="jm-about">
    <ul>
      <li v-for="description in legend">{{description}}</li>
    </ul>
    <ul>
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
.jm-about {
  width: 100%;
  height: 100%;  
}
</style>
