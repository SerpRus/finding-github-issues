<template>
  <li
    class="issue-item"
  >
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

    <a
      class="issue-item__link"
      :href="value.html_url"
    >
      {{ value.title }}
    </a>

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

  &__state {
    padding: 5px 0;

    &-value {
      color: green;

      &--closed {
        color: red;
      }
    }
  }

  &__link {
    display: inline-flex;

    margin: 5px 0;

    color: #000;

    &:hover {
      color: brown;
    }

    &:focus {
      outline: 2px solid orange;
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
}
</style>
