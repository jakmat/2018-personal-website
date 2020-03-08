import { mount } from '@vue/test-utils';
import JakmatHome from './JakmatHome.vue';

describe('JakmatHome', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(JakmatHome)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})