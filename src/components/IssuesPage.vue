<template>
  <div class="container">
    <FindingIssuesForm
      :classes="['issues-page__form']"
    />
  </div>
</template>

<script>
import FindingIssuesForm from './FindingIssuesForm.vue';

export default {
  name: 'IssuesPage',
  components: {
    FindingIssuesForm,
  },
};
</script>

<style lang="scss">
.issues-page {
  &__form {
    margin: 20px 0;

    @media (min-width: 767) {
      margin: 50px 0 30px;
    }
  }
}
</style>
