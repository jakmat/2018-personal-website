<template>
  <div class="content__about">
    <span>Tech Stack:</span>
    <ul>
      <li v-for="technology in stack">{{technology.name}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ContentAbout',

  data() {
    return {
      stack: [
        {
          name: 'HTML',
          logo: '',
          level: 0
        },
        {
          name: 'CSS',      
          logo: '',
          level: 0
        },
        {
          name: 'JavaScript',
          logo: '',
          level: 0
        },
        {
          name: 'Angular 5',
          logo: '',
          level: 0
        },
        {
          name: 'Vue.js',
          logo: '',
          level: 0
        },
        {
          name: 'React',
          logo: '',
          level: 0
        },
        {
          name: ' ',
          logo: '',
          level: 0
        },
        {
          name: '',
          logo: '',
          level: 0
        },
        {
          name: '',
          logo: '',
          level: 0
        },
        {
          name: '',
          logo: '',
          level: 0
        },
        {
          name: '',
          logo: '',
          level: 0
        },
        {
          name: '',
          logo: '',
          level: 0
        },
        {
          name: '',
          logo: '',
          level: 0
        },
        {
          name: '',
          logo: '',
          level: 0
        },
      ]
    };
  }
};
</script>

<style lang="less" scoped>
.content__about {
  width: 100%;
  height: 100%;  
}
</style>
