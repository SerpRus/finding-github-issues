import { mount } from '@vue/test-utils';
import issuesList from '../components/issuesList.vue';

describe('issuesList tests', () => {
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

  it('correct issuesData', () => {
    const wrapper = mount(issuesList, {
      props: {
        issuesData: data,
      },
    });

    expect(wrapper.findAll('.issue-item').length).toBe(data.length);
  });

  it('No issuesData', () => {
    const wrapper = mount(issuesList, {
      props: {
        issuesData: [],
      },
    });

    expect(wrapper.findAll('.issue-item').length).toBe(0);
  });

  it('issuesList current data snapshot', () => {
    const wrapper = mount(issuesList, {
      props: {
        issuesData: data,
      },
    });

    expect(wrapper.html()).toMatchSnapshot();
  });

  it('issuesList no data snapshot', () => {
    const wrapper = mount(issuesList, {
      props: {
        issuesData: [],
      },
    });

    expect(wrapper.html()).toMatchSnapshot();
  });
});
