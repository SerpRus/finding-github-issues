import {mount} from '@vue/test-utils';
import IssueItem from '../components/IssueItem.vue';

describe('IssueItem tests', () => {
  const data = {
    html_url: 'https://github.com/vuejs/vue/pull/12737',
    number: 12737,
    state: 'open',
    created_at: '2022-08-11T09:27:06Z',
    title: 'feat(types): new Vue() improvements (#12730)',
    user: {
      login: 'gulewei',
      html_url: 'https://github.com/gulewei'
    },
  };

  const wrapper = mount(IssueItem, {
    props: {
      value: data,
    },
  });

  it('check state', () => {
    expect(wrapper.find('.issue-item__state-value').text()).toBe(data.state);
  });

  it('check link', () => {
    expect(wrapper.find('.issue-item__link').attributes().href).toBe(data.html_url);
    expect(wrapper.find('.issue-item__link').text()).toBe(data.title);
  });

  it('check number', () => {
    expect(wrapper.find('.issue-item__number').text()).toBe(`#${data.number}`);
  });

  it('check date', () => {
    expect(wrapper.find('.issue-item__date').text()).toBe('opened on 11 Aug');
  });

  it('check author', () => {
    expect(wrapper.find('.issue-item__login').attributes().href).toBe(data.user.html_url);
    expect(wrapper.find('.issue-item__login').text()).toBe(data.user.login);
  });

  it('IssueItem snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});
