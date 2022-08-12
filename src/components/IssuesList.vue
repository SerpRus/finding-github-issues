<template>
  <ul
    v-if="issuesData.length"
    id="issues-list"
    class="issues-list"
  >
    <IssueItem
      v-for="value in issuesData"
      v-bind:key="value.id"
      v-bind:value="value"
    />
  </ul>
</template>

<script>
import IssueItem from './IssueItem.vue';

export default {
  name: 'IssuesList',
  props: {
    issuesData: Array,
  },
  components: {
    IssueItem,
  },
};
</script>

<style lang="scss" scoped>
.issues-list {
  margin: 0 0 30px 0;
  padding: 0;

  @media (min-width: 767px) {
    margin: 0 0 100px 0;
  }
}
</style>
