import { shallowMount, createLocalVue } from '@vue/test-utils';
import JakmatMultiselect from '@/components/JakmatMultiselect.vue';
import Vuex from 'vuex';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('JakmatMultiselect', () => {
  let wrapper;
  let store;
  let actions;

  const availableItems = [
    {
      id: '1',
      name: 'Doły - Chojny',
    },
    {
      id: '2',
      name: 'Teofilów - Dąbrowa',
    },
    {
      id: '3',
      name: 'Marysin - Augustów',
    },
    {
      id: '4',
      name: 'Helenówek - Dąbrpwa',
    },
  ];

  const selectedItems = ['2', '4'];

  const factory = () => {
    wrapper = shallowMount(JakmatMultiselect, {
      store,
      localVue,
      propsData: {
        items: availableItems,
        value: selectedItems,
        input: jest.fn(),
      },
    });
  };

  beforeEach(() => {
    actions = {
      changeActiveContent: jest.fn(),
    };
    store = new Vuex.Store({
      state: {},
      getters: {
        tabs: jest.fn(),
        lab: jest.fn(),
        activeContent: jest.fn(),
      },
      actions,
    });
    factory();
  });

  it('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  it('has list of 3 available items', () => {
    expect(wrapper.vm.items).toHaveLength(4);
  });

  it('has an empty list of selected items', () => {
    expect(wrapper.vm.value).toHaveLength(2);
  });

  it('calls input method with first item', () => {
    const { id } = wrapper.vm.items[0];
    const f = jest.fn();
    wrapper.vm.input = f;
    f(id);
    expect(f).toHaveBeenCalledWith('1');
  });

  it('calls input method with third item', () => {
    const { id } = wrapper.vm.items[2];
    wrapper.vm.input = jest.fn(id => wrapper.vm.value.push(id));
    wrapper.vm.input(id);
    expect(wrapper.vm.value).toHaveLength(3);
  });
});
