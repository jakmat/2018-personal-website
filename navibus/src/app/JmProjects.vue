<template>
  <div class="jm-projects">
    <ul class="jm-projects__list">      
      <li class="jm-projects__list__item jm-projects__list__item--header">
        <span class="jm-projects__list__item__caption jm-projects__list__item__caption--time">Start End</span>        
        <span class="jm-projects__list__item__caption jm-projects__list__item__caption--website">Website</span>        
        <span class="jm-projects__list__item__caption jm-projects__list__item__caption--company">Company</span>        
        <span class="jm-projects__list__item__caption jm-projects__list__item__caption--title">Project</span>        
        <span class="jm-projects__list__item__caption jm-projects__list__item__caption--description">Description</span>
        <span class="jm-projects__list__item__caption jm-projects__list__item__caption--stack">Tech Stack</span>
        <span class="jm-projects__list__item__caption jm-projects__list__item__caption--role">Role</span>
      </li>
      <li class="jm-projects__list__item" v-for="project in projects">
        <span class="jm-projects__list__item__caption jm-projects__list__item__caption--time">{{project.start}} {{project.end}}</span>        
        <span class="jm-projects__list__item__caption jm-projects__list__item__caption--website" :href="project.url">{{project.website}}</span>        
        <span class="jm-projects__list__item__caption jm-projects__list__item__caption--company">{{project.company}}</span>        
        <span class="jm-projects__list__item__caption jm-projects__list__item__caption--title">{{project.project}}</span>        
        <span class="jm-projects__list__item__caption jm-projects__list__item__caption--description">{{project.description}}</span>
        <span class="jm-projects__list__item__caption jm-projects__list__item__caption--stack">{{project.stack}}</span>
        <span class="jm-projects__list__item__caption jm-projects__list__item__caption--role">{{project.role}}</span>       
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
          website: i.url.length > 30 ? i.url.substring(0, 30) + '...' : i.url,
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
    margin: 10px 0;

    .jm-projects__list__item {
      .size(94vw, auto);
      min-height: 30px;
      // flex-wrap: wrap;
      font-size: @appFontSize;
      background-color: @itemBackgroundColor;
      border-radius: @appBorderRadius;
      margin: 5px 0;
      padding: 3px 0;

      .flex(column, flex-start, flex-start);

      
      .responsive-lg({
        .flex(row, space-between, center);
      });

      &--header {
        background-color: @itemBackgroundColorDisabled;
        color: @font-color-light-disabled;

        & span {
          text-align: center;
          padding-right: 30px;
          
          &:first-child {
            padding-right: 0;
          }
        }
      }
      
      .jm-projects__list__item__caption {
        // background-color: black;
        margin: 0 15px;
        word-break: break-word;

        .responsive-lg({
          
          &--time {
            width: @projectTimeWidth;
            text-align: center;
          }
  
          &--website {
            width: @projectWebsiteWidth;
          }
  
          &--company {
            width: @projectCompanyWidth;
          }
  
          &--occupation {
            width: @projectOccupationWidth;
          }
  
          &--title {
            width: @projectTitleWidth;
          }
  
          &--description {
            width: @projectDescriptionWidth;
          }
  
          &--stack {
            width: @projectStackWidth;
          }
  
          &--role {
            width: @projectRoleWidth;
          }
        });


      }
    }
  }

  .projects() {
    
  }
}
</style>
