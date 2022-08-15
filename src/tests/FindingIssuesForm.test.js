import { mount } from '@vue/test-utils';
import axios from 'axios';
import FindingIssuesForm from '../components/FindingIssuesForm.vue';

jest.mock('axios');

describe('FindingIssuesForm tests', () => {
  it('Empty request button click', async () => {
    const wrapper = mount(FindingIssuesForm);

    wrapper.find('button').trigger('click');

    expect(axios.get).toHaveBeenCalledTimes(0);
  });

  it('Button click check url with repos name', async () => {
    const wrapper = mount(FindingIssuesForm, {
      props: {
        getIssuesData(data) {
          this.issuesData = data;
        },
      },
    });
    const query = 'vuejs/vue';
    const testData = { data: {} };
    axios.get.mockResolvedValueOnce(testData);

    wrapper.find('input').setValue(query);
    wrapper.find('button').trigger('click');

    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith(`https://api.github.com/repos/${query}/issues`);
  });

  it('FindingIssuesForm snapshot', () => {
    const wrapper = mount(FindingIssuesForm);

    expect(wrapper.html()).toMatchSnapshot();
  });

  it('FindingIssuesForm isLoader snapshot', () => {
    const wrapper = mount(FindingIssuesForm, {
      data() {
        return {
          isLoader: true,
        };
      },
    });

    expect(wrapper.html()).toMatchSnapshot();
  });

  it('FindingIssuesForm isErrorMessage snapshot', () => {
    const wrapper = mount(FindingIssuesForm, {
      data() {
        return {
          isErrorMessage: true,
        };
      },
    });

    expect(wrapper.html()).toMatchSnapshot();
  });

  it('FindingIssuesForm isErrorMessage with message snapshot', () => {
    const wrapper = mount(FindingIssuesForm, {
      data() {
        return {
          isErrorMessage: true,
          message: 'test message',
        };
      },
    });

    expect(wrapper.html()).toMatchSnapshot();
  });
});
