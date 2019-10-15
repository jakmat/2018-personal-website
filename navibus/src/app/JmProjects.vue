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
    flex-wrap: wrap;
    width: 100%;

    .jm-projects__list__item {
      .flex(column, flex-start, flex-start);
      .size(88%, auto);
      min-height: 30px;
      font-size: @appFontSize;
      background-color: @itemBackgroundColor;
      border-radius: @appBorderRadius;
      margin: 5px 0;
      padding: 10px 0;
      
      .responsive-sm({
        .size(92%, auto);
      });

      .responsive-md({
        .size(95%, auto);
      });

      .responsive-lg({
        .flex(row, space-between, center);
        .size(98%, auto);
      });

      &--header {
        display: none;
        background-color: @itemBackgroundColorDisabled;
        color: @font-color-light-disabled;

        & span {
          text-align: center;
          padding-right: 30px;
          
          &:first-child {
            padding-right: 0;
          }
        }

        .responsive-lg({
          display: flex;
        });
      }
      
      .jm-projects__list__item__caption {
        margin: 0 15px;
        word-break: break-word;
        padding: 5px 0;

        .responsive-lg({
          height: 50px;
          padding: 0;
                    
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

        .responsive-xl({         
          height: 40px;
          
          &--time {
            width: @projectTimeWidthXL;
            text-align: center;
          }
  
          &--website {
            width: @projectWebsiteWidthXL;
          }
  
          &--company {
            width: @projectCompanyWidthXL;
          }
  
          &--occupation {
            width: @projectOccupationWidthXL;
          }
  
          &--title {
            width: @projectTitleWidthXL;
          }
  
          &--description {
            width: @projectDescriptionWidthXL;
          }
  
          &--stack {
            width: @projectStackWidthXL;
          }
  
          &--role {
            width: @projectRoleWidthXL;
          }
        });
      }
    }
  }
}
</style>
