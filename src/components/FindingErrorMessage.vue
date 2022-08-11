<template>
  <div class="finding-error-message" v-if="isErrorMessage">
    {{(message) ? message : 'Nothing found'}}
  </div>
</template>

<script>
export default {
  name: 'FindingErrorMessage',
  props: {
    isErrorMessage: Boolean,
    message: String,
  },
};
</script>

<style lang="scss" scoped>
.finding-error-message {
  text-align: center;
}
</style>
