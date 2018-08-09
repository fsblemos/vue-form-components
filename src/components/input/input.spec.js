import { shallowMount } from '@vue/test-utils';
import VfInput from './input.vue';

describe('Input Component', () => {
  const shallowComponent = (propsData, { methods } = {}) =>
    shallowMount(VfInput, { propsData, methods });

  it('should pass value to input element', () => {
    const value = 'value';
    const wrapper = shallowComponent({ value });
    expect(wrapper.element.value).toBe(value);
  });

  it('should call onInput on input event', () => {
    const value = 'value';
    const methods = { onInput: jest.fn() };
    const wrapper = shallowComponent(null, { methods });
    const input = wrapper.find('input');
    input.element.value = value;
    input.trigger('input');
    expect(methods.onInput).toHaveBeenCalledWith(expect.any(Event));
  });

  it('should emit an input event with target value', () => {
    const value = 'value';
    const wrapper = shallowComponent();
    const eventMock = { target: { value } };
    wrapper.vm.onInput(eventMock);
    expect(wrapper.emitted().input).toEqual([[value]]);
  });
});
