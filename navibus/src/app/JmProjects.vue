<template>
  <div class="jm-projects">
    <ul class="jm-projects__list">      
      <li class="jm-projects__list__item project-list-header">
        <span class="jm-projects__list__item__time">Start End</span>        
        <span class="jm-projects__list__item__website">Website</span>        
        <span class="jm-projects__list__item__company">Company</span>        
        <span class="jm-projects__list__item__title">Project</span>        
        <span class="jm-projects__list__item__description">Description</span>
        <span class="jm-projects__list__item__stack">Tech Stack</span>
        <span class="jm-projects__list__item__role">Role</span>
      </li>
      <li class="jm-projects__list__item" v-for="project in projects">
        <span class="jm-projects__list__item__time">{{project.start}} {{project.end}}</span>        
        <span class="jm-projects__list__item__website" :href="project.url">{{project.website}}</span>        
        <span class="jm-projects__list__item__company">{{project.company}}</span>        
        <span class="jm-projects__list__item__title">{{project.project}}</span>        
        <span class="jm-projects__list__item__description">{{project.description}}</span>
        <span class="jm-projects__list__item__stack">{{project.stack}}</span>
        <span class="jm-projects__list__item__role">{{project.role}}</span>       
      </li>
    </ul>
  </div>
</template>

<script>
import portfolio from '../assets/projects.json';
import _ from 'lodash';

export default {
  name: 'JmProjects',

  computed: {
    projects() {
      console.log(portfolio);
      return portfolio.map((i) => {
        return {
          ...i,
          start: i.start.substring(0, 4),
          end: i.end.substring(0, 4),
          website: i.url.length > 20 ? i.url.substring(0, 20) + '...' : i.url,
          stack: this.addSpaces(i.stack)
        };
      });
    }
  },

  methods: {
    addSpaces(item) {
      const stack = item.split(',');
      return stack.join(' - ');
    }
  }
};
</script>

<style lang="less" scoped>
@import '../mixins.less';
@import '../global.less';

.jm-projects {

  .jm-projects__list {
    .flex(column, center, flex-start);

    .jm-projects__list__item {
      .size(96%, 30px);
      .flex(row, flex-start, center);
      font-size: @appFontSize;
      background-color: @itemBackgroundColor;
      border-radius: @appBorderRadius;
      margin: 5px 0;
      padding: 3px 0;

      &.project-list-header {
        color: @font-color-light-disabled;
        position: sticky;
      }

      .jm-projects__list__item__time {
        width: @projectTimeWidth;
        padding-left: 10px;
      }

      .jm-projects__list__item__website {
        width: @projectWebsiteWidth;
      }

      .jm-projects__list__item__company {
        width: @projectCompanyWidth;
      }

      .jm-projects__list__item__occupation {
        width: @projectOccupationWidth;
      }

      .jm-projects__list__item__title {
        width: @projectTitleWidth;
      }

      .jm-projects__list__item__description {
        width: @projectDescriptionWidth;      
      }

     .jm-projects__list__item__stack {
       width: @projectStackWidth;
      }

      .jm-projects__list__item__role {
        width: @projectRoleWidth;
        padding-right: 10px;
      }
    }
  }
}
</style>
