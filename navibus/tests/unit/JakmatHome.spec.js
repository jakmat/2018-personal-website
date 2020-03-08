import { shallowMount, createLocalVue } from '@vue/test-utils';
import JakmatMultiselect from '@/components/JakmatMultiselect.vue';
import Vuex from 'vuex';

const localVue = createLocalVue()
localVue.use(Vuex);

describe('JakmatMultiselect', () => {
  let wrapper;
  let propsData;
  let store;
  let actions;

  beforeEach(() => {    
    actions = {
      changeActiveContent: jest.fn()
    };
    store = new Vuex.Store({
      state: {},
      getters: {
        tabs: jest.fn(),
        lab: jest.fn(),
        activeContent: jest.fn(),
      },
      actions
    });
    propsData = {
      items: [
        {
          id: '1',
          name: 'Doły - Chojny'
        },
        {
          id: '2',
          name: 'Teofilów - Dąbrowa'
        },
        {
          id: '3',
          name: 'Marysin - Augustów'
        }
      ],
      value: [],
    };
    wrapper = shallowMount(JakmatMultiselect, { store, localVue, propsData });
  });

  it('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  it('has list of 3 available items', () => {
    expect(wrapper.vm.items).toHaveLength(3);
  });

  it('has an empty list of selected items', () => {
    expect(wrapper.vm.value).toHaveLength(0);
  });

  it('calls input method with first item', () => {
    const [item1, item2, item3] = wrapper.vm.items;
    const f = jest.fn();
    wrapper.vm.input = f;
    f(item1.id);
    expect(f).toHaveBeenCalledWith(item1.id);
  });

  it('calls input method with third item', () => {
    const [item1, item2, item3] = wrapper.vm.items;
    const f = jest.fn();
    wrapper.vm.input = f;
    f(item3.id);
    expect(f).toHaveBeenCalledWith(item3.id);
  });
})