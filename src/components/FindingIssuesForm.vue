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

  <PreloaderCircle :isLoader="isLoader"/>

  <FindingErrorMessage
    :isErrorMessage="isErrorMessage"
    :message="message"
  />
</template>

<script>
import axios from 'axios';
import PreloaderCircle from './PreloaderCircle.vue';
import FindingErrorMessage from './FindingErrorMessage.vue';

export default {
  name: 'FindingIssuesForm',
  props: {
    getIssuesData: Function,
    classes: Array,
  },
  components: {
    PreloaderCircle,
    FindingErrorMessage,
  },
  data() {
    return {
      lastRepositoryName: '',
      repositoryName: '',
      isLoader: false,
      isErrorMessage: false,
      message: 'Nothing found',
    };
  },
  methods: {
    async findingBtnHandler(e) {
      e.preventDefault();

      // Если поле поиска пустое, ничего не делаем
      if (this.repositoryName === '') return;

      // Если последний запрос совпадает с текущим, ничего не делаем
      if (this.lastRepositoryName === this.repositoryName) return;

      this.lastRepositoryName = this.repositoryName;

      this.getIssuesData([]);

      this.isLoader = true;

      const result = await this.fetchIssues();

      this.isLoader = false;

      if (result === null) {
        this.isErrorMessage = true;
      } else {
        this.isErrorMessage = false;
      }
    },
    async fetchIssues() {
      const api = 'https://api.github.com/repos/';
      const url = `${api}${this.repositoryName}/issues`;

      try {
        const { data } = (await axios.get(url));

        this.getIssuesData(data);

        return data;
      } catch (err) {
        this.getIssuesData([]);

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
    flex-grow: 1;
  }

  &__input {
    font-size: 16px;

    width: 100%;
    margin-right: 10px;
    padding: 5px 10px;

    border: 2px solid brown;
    border-radius: 8px;

    @media (min-width: 767px) {
      font-size: 20px;

      margin-right: 20px;
      padding: 10px 15px;
    }

    &:focus {
      border: 2px solid orange;
      outline: none;
    }

    &::placeholder {
      color: #aaa;
    }
  }

  &__button {
    font-size: 16px;

    padding: 5px 10px;

    cursor: pointer;

    border: 2px solid brown;
    border-radius: 8px;
    background-color: #fff;

    @media (min-width: 767px) {
      font-size: 20px;

      padding: 10px 15px;
    }

    &:hover,
    &:focus {
      border: 2px solid orange;
      outline: none;
    }
  }
}

</style>
