<template>
  <input :value="value" @input="onInput">
</template>

<script>
export default {
  name: 'VfInput',
  props: {
    value: [String, Number],
  },
  methods: {
    onInput(event) {
      this.$emit('input', event.target.value);
    },
  },
};
</script>
