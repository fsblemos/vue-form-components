import { shallowMount } from '@vue/test-utils';
import VfInput from './field.vue';

describe('Field Component', () => {
  const shallowComponent = (propsData, { slots } = {}) =>
    shallowMount(VfInput, { propsData, slots });

  it('should render a default field', () => {
    const wrapper = shallowComponent();
    expect(wrapper.element).toMatchSnapshot();
  });

  it('should render a field with label and input', () => {
    const slots = { default: '<input />' };
    const wrapper = shallowComponent({ label: 'label' }, { slots });
    expect(wrapper.element).toMatchSnapshot();
  });
});
