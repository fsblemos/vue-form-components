<template>
  <div class="vf-field">
    <label v-if="label">{{ label }}</label>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'VfForm',
  props: {
    label: String,
  },
};
</script>
