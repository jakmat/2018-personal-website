<template>
  <div class="content__projects">
    <span>Projects:</span>
    <ul class="content__projects--list">      
      <li class="content__projects--list__item" v-for="project in projects">
        <span class="content__projects--list__item--period">{{project.start}} {{project.end}}</span>        
        <span class="content__projects--list__item--url">{{project.url}}</span>        
        <span class="content__projects--list__item--company">{{project.company}}</span>        
        <span class="content__projects--list__item--title">{{project.title}}</span>        
        <span class="content__projects--list__item--description">{{project.description}}</span>        
        <!-- <span>{{project.}}</span>         -->
      </li>
    </ul>
  </div>
</template>

<script>
import portfolio from '../../assets/projects.json';
import _ from 'lodash';

export default {
  name: 'ContentProjects',

  computed: {
    projects() {
      console.log(portfolio)
      return portfolio;
    }
  }
};
</script>

<style lang="less" scoped>
@import '../../mixins.less';

.content__projects {
  width: 100%;
  height: 100%;

  &--list {
    &__item {
      font-size: 11px;
      width: 100%;
      height: 30px;
      background-color: #202020;
      margin: 5px;
      .flex(row, flex-start, center);

      &--period {
        padding-left: 10px;
        width: 40px;
      }

      &--url {
        width: 160px;
      }

      &--company {
        width: 150px;
      }

      &--occupation {
        width: 100px;
      }

      &--title {
        width: 200px;      
      }

      &--description {
        width: 300px;
      }
    }
  }
}
</style>
