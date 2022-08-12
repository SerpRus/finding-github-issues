import {mount} from '@vue/test-utils';
import FindingErrorMessage from '../components/FindingErrorMessage.vue';

describe('FindingErrorMessage tests', () => {
  it('FindingErrorMessage isErrorMessage: true with message', () => {
    const wrapper = mount(FindingErrorMessage, {
      props: {
        isErrorMessage: true,
        message: 'test1',
      },
    });

    expect(wrapper.text()).toBe('test1');
  });

  it('FindingErrorMessage isErrorMessage: true no message', () => {
    const wrapper = mount(FindingErrorMessage, {
      props: {
        isErrorMessage: true,
      },
    });

    expect(wrapper.text()).toBe('Nothing found');
  });

  it('FindingErrorMessage isErrorMessage: false', () => {
    const wrapper = mount(FindingErrorMessage, {
      props: {
        isErrorMessage: false,
        message: 'test1',
      },
    });

    expect(wrapper.html()).toBe('<!--v-if-->');
  });

  it('FindingErrorMessage isErrorMessage: true snapshot', () => {
    const wrapper = mount(FindingErrorMessage, {
      props: {
        isErrorMessage: true,
      },
    });

    expect(wrapper.html()).toMatchSnapshot();
  });

  it('FindingErrorMessage isErrorMessage: false snapshot', () => {
    const wrapper = mount(FindingErrorMessage, {
      props: {
        isErrorMessage: false,
      },
    });

    expect(wrapper.html()).toMatchSnapshot();
  });
})
