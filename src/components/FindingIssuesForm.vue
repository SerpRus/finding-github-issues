<template>
  <form
    class="finding-form"
    v-bind:class="classes"
  >
    <label
      for="finding-repository"
      class="finding-form__label"
    >
      <input
        id="finding-repository"
        class="finding-form__input"
        type="text"
        name="finding-input"
        placeholder="vuejs/vue"
        v-model="repositoryName"
      >
    </label>

    <button
      class="finding-form__button"
      type="submit"
      v-on:click="findingBtnHandler"
    >
      Search
    </button>
  </form>
</template>

<script>
import axios from 'axios';

export default {
  name: 'FindingIssuesForm',
  props: {
    classes: Array,
  },
  data() {
    return {
      repositoryName: '',
    };
  },
  methods: {
    async findingBtnHandler(e) {
      e.preventDefault();

      if (this.repositoryName === '') return;

      this.fetchIssues();
    },
    async fetchIssues() {
      const api = 'https://api.github.com/repos/';
      const url = `${api}${this.repositoryName}/issues`;

      try {
        const { data } = (await axios.get(url));

        return data;
      } catch (err) {
        console.error(err);

        return null;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.finding-form {
  display: flex;
  align-content: center;
  justify-content: center;

  &__label {
    display: flex;
  }

  &__input {
    font-size: 20px;

    width: 100%;
    margin-right: 20px;
    padding: 10px 15px;

    border: 2px solid brown;
    border-radius: 8px;

    &:focus {
      border: 2px solid orange;
      outline: none;
    }
  }

  &__button {
    font-size: 20px;

    padding: 10px 15px;

    cursor: pointer;

    border: 2px solid brown;
    border-radius: 8px;
    background-color: #fff;

    &:hover,
    &:focus {
      border: 2px solid orange;
      outline: none;
    }
  }
}

</style>
