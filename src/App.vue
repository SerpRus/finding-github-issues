<template>
  <IssuesPage />
</template>

<script>
import IssuesPage from './components/IssuesPage.vue';

export default {
  name: 'App',
  components: {
    IssuesPage,
  },
};
</script>

<style lang="scss">
*,
*::before,
*::after {
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
