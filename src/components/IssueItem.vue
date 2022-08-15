<template>
  <li
    class="issue-item"
  >
    <div class="issue-item__left-content">
      <div
        class="issue-item__state"
      >
        State:
        <span
          class="issue-item__state-value"
          v-bind:class="[{'issue-item__state-value--closed': isStateClosed}]"
        >
          {{ value.state }}
        </span>
      </div>

      <div class="issue-item__title-wrapper">
        <a
          class="issue-item__title"
          :href="value.html_url"
        >
          {{ value.title }}
        </a>

        <span
          class="issue-item__label"
          v-for="label in value.labels"
          v-bind:key="label.id"
          :style="{backgroundColor: `#${label.color}`}"
        >
          {{ label.name }}
        </span>
      </div>

      <div class="issue-item__info">
        <div class="issue-item__number-with-date">
          <div class="issue-item__number">
            #{{ value.number }}
          </div>

          <div class="issue-item__date">
            opened on {{ getDate() }}
          </div>
        </div>

        <div class="issue-item__author">
          by

          <a
            class="issue-item__login"
            :href="value.user.html_url"
          >
            {{ value.user.login }}
          </a>
        </div>
      </div>
    </div>

    <div class="issue-item__right-content">
      <a
        class="issue-item__comments"
        :href="value.html_url"
        v-if="value.comments > 0"
      >
        <img
          class="issue-item__icon-comment"
          src="../assets/icons/icon-comment.png"
          alt=""
        >

        <span>
          {{ value.comments }}
        </span>
      </a>
    </div>
  </li>
</template>

<script>
export default {
  name: 'IssueItem',
  props: {
    value: Object,
  },
  data() {
    return {
      isStateClosed: this.value.state === 'closed',
    };
  },
  methods: {
    getDate() {
      const date = new Date(this.value.created_at);
      const formatter = new Intl.DateTimeFormat('en', { month: 'short' });

      const dayOfMonth = date.getDate();
      const month = formatter.format(date);

      return `${dayOfMonth} ${month}`;
    },
  },
};
</script>

<style lang="scss" scoped>
.issue-item {
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 0;
  padding: 5px 10px;

  list-style: none;

  border-top: 2px solid brown;
  border-right: 2px solid brown;
  border-left: 2px solid brown;

  @media (min-width: 767px) {
    padding: 10px 15px;
  }

  &:first-child {
    border-radius: 8px 8px 0 0;
  }

  &:last-child {
    border-bottom: 2px solid brown;
    border-radius: 0 0 8px 8px;
  }

  &__left-content {
    padding-right: 5px;
  }

  &__state {
    padding: 5px 0;

    &-value {
      color: green;

      &--closed {
        color: red;
      }
    }
  }

  &__title {
    display: inline-flex;

    margin: 5px 10px 5px 0;

    color: #000;

    &:hover {
      color: brown;
    }

    &:focus {
      outline: 2px solid orange;
    }
  }

  &__label {
    font-size: 12px;
    font-weight: 500;

    display: inline-flex;

    padding: 4px 7px;

    color: #fff;
    border-radius: 16px;

    &:not(:last-child) {
      margin-right: 5px;
    }
  }

  &__info {
    margin: 5px 0;

    @media (min-width: 767px) {
      display: flex;
    }
  }

  &__number-with-date,
  &__author {
    display: flex;
  }

  &__number-with-date {
    @media (min-width: 767px) {
      padding-right: 5px;
    }
  }

  &__number {
    padding-right: 5px;
  }

  &__login {
    margin-left: 5px;

    color: #000;

    &:hover {
      color: brown;
    }

    &:focus {
      outline: 2px solid orange;
    }
  }

  &__comments {
    font-size: 14px;

    display: flex;
    align-items: center;

    text-decoration: none;

    color: #000;
  }

  &__icon-comment {
    width: 24px;
    margin-right: 3px;
  }
}
</style>
