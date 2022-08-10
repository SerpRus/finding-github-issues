<template>
  <form
    class="search-form"
    v-bind:class="classes"
  >
    <label for="search-repository">
      <input
        id="search-repository"
        class="search-form__input"
        type="text"
        name="search-input"
        placeholder="vuejs/vue"
        v-model="repositoryName"
      >
    </label>

    <button
      class="search-form__button"
      type="submit"
      v-on:click="searchBtnHandler"
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
    async searchBtnHandler(e) {
      e.preventDefault();

      const url = 'https://api.github.com/repos/';

      try {
        const response = await axios.get(`${url}${this.repositoryName}/issues`);
        const data = await response.data;

        console.log(data);
      } catch (err) {
        console.error(err);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.search-form {
  display: flex;
  align-content: center;
  justify-content: center;

  &__input {
    font-size: 20px;

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
