<template>
  <div class="container">
    <FindingIssuesForm
      :getIssuesData="getIssuesData"
      :classes="['issues-page__form']"
    />

    <IssuesList :issuesData="issuesData" />
  </div>
</template>

<script>
import FindingIssuesForm from './FindingIssuesForm.vue';
import IssuesList from './IssuesList.vue';

export default {
  name: 'IssuesPage',
  data() {
    return {
      issuesData: [],
    };
  },
  components: {
    FindingIssuesForm,
    IssuesList,
  },
  methods: {
    getIssuesData(data) {
      this.issuesData = data;
      console.log(data);
    },
  },
};
</script>

<style lang="scss">
.issues-page {
  &__form {
    margin: 20px 0 10px;

    @media (min-width: 767px) {
      margin: 50px 0 30px;
    }
  }
}
</style>
