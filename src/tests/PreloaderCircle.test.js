import { mount } from '@vue/test-utils';
import PreloaderCircle from '../components/PreloaderCircle.vue';

describe('PreloaderCircle tests', () => {
  it('PreloaderCircle isLoader: true', () => {
    const wrapper = mount(PreloaderCircle, {
      props: {
        isLoader: true,
      },
    });

    expect(wrapper.html()).toBe('<div class="preloader"></div>');
  });

  it('PreloaderCircle isLoader: false', () => {
    const wrapper = mount(PreloaderCircle, {
      props: {
        isLoader: false,
      },
    });

    expect(wrapper.html()).toBe('<!--v-if-->');
  });

  it('PreloaderCircle isLoader: null', () => {
    const wrapper = mount(PreloaderCircle, {
      props: {
        isLoader: null,
      },
    });

    expect(wrapper.html()).toBe('<!--v-if-->');
  });

  it('PreloaderCircle isLoader: undefined', () => {
    const wrapper = mount(PreloaderCircle, {
      props: {
        isLoader: undefined,
      },
    });

    expect(wrapper.html()).toBe('<!--v-if-->');
  });

  it('PreloaderCircle no props', () => {
    const wrapper = mount(PreloaderCircle);

    expect(wrapper.html()).toBe('<!--v-if-->');
  });

  it('PreloaderCircle visible snapshot', () => {
    const wrapper = mount(PreloaderCircle, {
      props: {
        isLoader: true,
      },
    });

    expect(wrapper.html()).toMatchSnapshot();
  });

  it('PreloaderCircle hidden snapshot', () => {
    const wrapper = mount(PreloaderCircle, {
      props: {
        isLoader: false,
      },
    });

    expect(wrapper.html()).toMatchSnapshot();
  });
});
