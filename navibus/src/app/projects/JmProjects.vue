<template>
  <div class="jm-projects">
    <!-- <span>Projects:</span> -->
    <ul class="jm-projects__list">      
      <li class="jm-projects__list__item" v-for="project in projects">
        <span class="jm-projects__list__item__period">{{project.start}} {{project.end}}</span>        
        <span class="jm-projects__list__item__url" :href="project.url">{{project.website}}</span>        
        <span class="jm-projects__list__item__company">{{project.company}}</span>        
        <span class="jm-projects__list__item__title">{{project.project}}</span>        
        <span class="jm-projects__list__item__description">{{project.description}}</span>        
        <!-- <span>{{project.}}</span>         -->
      </li>
    </ul>
  </div>
</template>

<script>
import portfolio from '../../assets/projects.json';
import _ from 'lodash';

export default {
  name: 'JmProjects',

  computed: {
    projects() {
      console.log(portfolio)
      return portfolio.map((i) => {
        return {
          ...i,
          start: i.start.substring(0, 4),
          end: i.end.substring(0, 4),
          website: i.url.length > 25 ? i.url.substring(0, 25) + '...' : i.url,
        };
      });
    }
  },
};
</script>

<style lang="less" scoped>
@import '../../mixins.less';

.jm-projects {
  width: 100%;
  height: 100%;

  .jm-projects__list {
    .jm-projects__list__item {
      font-size: 11px;
      width: 95%;
      height: 30px;
      background-color: #202020;
      margin: 5px;
      .flex(row, flex-start, center);

      .jm-projects__list__item__period {
        padding-left: 10px;
        width: 40px;
      }

      .jm-projects__list__item__url {
        width: 160px;
      }

      .jm-projects__list__item__company {
        width: 150px;
      }

      .jm-projects__list__item__occupation {
        width: 100px;
      }

      .jm-projects__list__item__title {
        width: 200px;      
      }

      .jm-projects__list__item__description {
        width: 300px;
      }
    }
  }
}
</style>
