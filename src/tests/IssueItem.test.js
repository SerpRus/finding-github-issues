import { mount } from '@vue/test-utils';
import IssueItem from '../components/IssueItem.vue';

describe('IssueItem tests', () => {
  const data = {
    html_url: 'https://github.com/vuejs/vue/pull/12737',
    comments: 2,
    labels: [{
      color: '8437DA',
      name: '2.7',
    }, {
      color: '1D76DB',
      name: 'feat:types',
    }],
    number: 12737,
    state: 'open',
    created_at: '2022-08-11T09:27:06Z',
    title: 'feat(types): new Vue() improvements (#12730)',
    user: {
      login: 'gulewei',
      html_url: 'https://github.com/gulewei',
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

  it('check title', () => {
    expect(wrapper.find('.issue-item__title').attributes().href).toBe(data.html_url);
    expect(wrapper.find('.issue-item__title').text()).toBe(data.title);
  });

  it('check labels', () => {
    const convertHex = (color) => {
      color = color.replace('#', '');
      const r = parseInt(color.substring(0, 2), 16);
      const g = parseInt(color.substring(2, 4), 16);
      const b = parseInt(color.substring(4, 6), 16);
      return `rgb(${r}, ${g}, ${b});`;
    };

    const $labels = wrapper.findAll('.issue-item__label');

    for (let i = 0; i < $labels.length; i++) {
      expect(`background-color: ${convertHex(data.labels[i].color)}`).toBe($labels[i].attributes().style);
      expect(data.labels[i].name).toBe($labels[i].text());
    }
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

  it('check comments', () => {
    expect(wrapper.find('.issue-item__comments span').text()).toBe(String(data.comments));
  });

  it('IssueItem snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});
