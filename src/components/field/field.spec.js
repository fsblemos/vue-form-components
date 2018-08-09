import { shallowMount } from '@vue/test-utils';
import VfInput from './field.vue';

describe('Field Component', () => {
  const shallowComponent = (propsData, { methods } = {}) =>
    shallowMount(VfInput, { propsData, methods });

  it('should render a default field', () => {
    const wrapper = shallowComponent();
    expect(wrapper.element).toMatchSnapshot();
  });
});
