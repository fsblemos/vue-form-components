<template>
  <input :value="value">
</template>

<script>
export default {
  name: 'VfInput',
  props: {
    value: [String, Number],
  },
};
</script>
