<template>
  <div class="jakmat-projects">
    <ul class="jakmat-projects__list">
      <li class="jakmat-projects__list__item jakmat-projects__list__item--header">
        <span class="jakmat-projects__list__item__caption jakmat-projects__list__item__caption--time">Start - End</span>
        <span class="jakmat-projects__list__item__caption jakmat-projects__list__item__caption--website">Website</span>
        <span class="jakmat-projects__list__item__caption jakmat-projects__list__item__caption--company">Company</span>
        <span class="jakmat-projects__list__item__caption jakmat-projects__list__item__caption--title">Project</span>
        <span class="jakmat-projects__list__item__caption jakmat-projects__list__item__caption--description">Description</span>
        <span class="jakmat-projects__list__item__caption jakmat-projects__list__item__caption--stack">Tech Stack</span>
        <span class="jakmat-projects__list__item__caption jakmat-projects__list__item__caption--role">Role</span>
      </li>
      <li class="jakmat-projects__list__item jakmat-projects__list__item--content" v-for="(project, index) in projects" :key="index">
        <span class="jakmat-projects__list__item__caption jakmat-projects__list__item__caption--time">{{project.start}} - {{project.end}}</span>
        <span class="jakmat-projects__list__item__caption jakmat-projects__list__item__caption--website" :href="project.url">{{project.website}}</span>
        <span class="jakmat-projects__list__item__caption jakmat-projects__list__item__caption--company">{{project.company}}</span>
        <span class="jakmat-projects__list__item__caption jakmat-projects__list__item__caption--title">{{project.project}}</span>
        <span class="jakmat-projects__list__item__caption jakmat-projects__list__item__caption--description">{{project.description}}</span>
        <span class="jakmat-projects__list__item__caption jakmat-projects__list__item__caption--stack">{{project.stack}}</span>
        <span class="jakmat-projects__list__item__caption jakmat-projects__list__item__caption--role">{{project.role}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import _ from 'lodash';
import portfolio from '../assets/projects.json';

export default {
  name: 'JakmatProjects',

  computed: {
    projects() {
      return portfolio.map(i => ({
        ...i,
        start: i.start.substring(0, 4),
        end: i.end.substring(0, 4),
        website: i.url.length > 30 ? `${i.url.substring(0, 30)}...` : i.url,
        stack: this.addSpaces(i.stack),
      }));
    },
  },

  methods: {
    addSpaces(item) {
      const stack = item.split(',');
      return stack.join(' - ');
    },
  },
};
</script>

<style lang="less" scoped>
@import '../mixins.less';
@import '../global.less';

.jakmat-projects {
  position: relative;

  .jakmat-projects__list {
    .flex(column, center, flex-start);
    flex-wrap: wrap;
    width: 100%;

    .jakmat-projects__list__item {
      .flex(column, flex-start, flex-start);
      .size(88%, auto);
      font-size: @appFontSize;
      background-color: @itemBackgroundColor;
      border-radius: @appBorderRadius;
      margin: 5px 0;

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

      &.jakmat-projects__list__item--header {
        position: sticky;
        top: 0;

      .jakmat-projects__list__item__caption {

        }
      }

      &.jakmat-projects__list__item--content {
        padding: 9px 0 10px;

        .jakmat-projects__list__item__caption {

        }
      }


      .jakmat-projects__list__item__caption {
        margin: 0 15px;
        word-break: break-word;
        padding: 5px 0;
        .flex(row, flex-start, center);

        .responsive-lg({
          min-height: 30px;
          padding: 0;

          &--time {
            min-width: @projectTimeWidth;
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
          // min-height: 30px;

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
