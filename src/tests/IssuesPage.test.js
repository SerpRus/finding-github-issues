import { mount } from '@vue/test-utils';
import IssuesPage from '../components/IssuesPage.vue';

describe('IssuesPage tests', () => {
  const data = [{
    html_url: 'https://github.com/vuejs/vue/pull/12737',
    number: 12737,
    state: 'open',
    created_at: '2022-08-11T09:27:06Z',
    title: 'feat(types): new Vue() improvements (#12730)',
    user: {
      login: 'gulewei',
      html_url: 'https://github.com/gulewei',
    },
  },
  {
    html_url: 'https://github.com/vuejs/vue/issues/12708',
    number: 12708,
    state: 'open',
    created_at: '2022-07-27T20:41:30Z',
    title: '::v-deep is not working',
    user: {
      login: 'handhikadj',
      html_url: 'https://github.com/handhikadj',
    },
  }];

  it('IssuesPage correct issuesData snapshot', () => {
    const wrapper = mount(IssuesPage, {
      data() {
        return {
          issuesData: data,
        };
      },
    });

    expect(wrapper.html()).toMatchSnapshot();
  });

  it('IssuesPage no issuesData snapshot', () => {
    const wrapper = mount(IssuesPage, {
      data() {
        return {
          issuesData: [],
        };
      },
    });

    expect(wrapper.html()).toMatchSnapshot();
  });
});
