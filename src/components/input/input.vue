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
    onInput() {
      
    }
  }
};
</script>
