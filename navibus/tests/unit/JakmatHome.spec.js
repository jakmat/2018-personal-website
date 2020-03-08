import { shallowMount, createLocalVue } from '@vue/test-utils';
import JakmatHome from '@/app/shell/JakmatHome.vue';
import Vuex from 'vuex';

const localVue = createLocalVue()
localVue.use(Vuex);

describe('JakmatHome', () => {
  let actions;
  let store;

  beforeEach(() => {    
    actions = {
      changeActiveContent: jest.fn()
    };
    store = new Vuex.Store({
      state: {},
      getters: {
        tabs: jest.fn(),
        lab: jest.fn(),
        activeContent: jest.fn()
      },
      actions
    });
  });

  it('is a Vue instance', () => {
    const wrapper = shallowMount(JakmatHome, { store, localVue });
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})