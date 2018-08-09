import { shallowMount } from '@vue/test-utils';
import VfInput from './input.vue';

describe('Input Component', () => {
  const shallowComponent = propsData => shallowMount(VfInput, { propsData });

  it('should pass value to input element', () => {
    const value = 'value';
    const wrapper = shallowComponent({ value });
    expect(wrapper.element.value).toBe(value);
  });
});
