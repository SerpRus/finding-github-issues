import { mount } from "@vue/test-utils";
import axios from 'axios';
import FindingIssuesForm from '../components/FindingIssuesForm.vue';

jest.mock("axios");

describe('FindingIssuesForm', () => {
  it('Empty request button click', async () => {
    const wrapper = mount(FindingIssuesForm);

    wrapper.find('button').trigger('click');

    expect(axios.get).toHaveBeenCalledTimes(0);
  });

  it('Button click check url with repos name', async () => {
    const wrapper = mount(FindingIssuesForm);
    const query = 'vuejs/vue';
    const testData = {data: {}};
    axios.get.mockResolvedValueOnce(testData);
    
    wrapper.find('input').setValue(query);
    wrapper.find('button').trigger('click');

    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith(`https://api.github.com/repos/${query}/issues`)
  });

  it('should return null', async () => {
    const message = "Network Error";
    axios.get.mockRejectedValueOnce(message);

    const data = await FindingIssuesForm.methods.fetchIssues();

    expect(axios.get).toHaveBeenCalledTimes(2);
    expect(data).toEqual(null);
  });

  it('should return data', async () => {
    const testData = {data: {}};
    axios.get.mockResolvedValueOnce(testData);

    const data = await FindingIssuesForm.methods.fetchIssues();

    expect(axios.get).toHaveBeenCalledTimes(3);
    expect(data).toEqual(testData.data);
  });

  it('FindingIssuesForm snapshot', () => {
    const wrapper = mount(FindingIssuesForm);

    expect(wrapper.html()).toMatchSnapshot();
  });
});
