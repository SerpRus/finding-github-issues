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
  margin: 0;
  padding: 0;

  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 10px;

  @media (min-width: 767px) {
    padding: 0 15px;
  }
}
</style>
