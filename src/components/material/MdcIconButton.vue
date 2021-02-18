<template>
  <button class="mdc-icon-button material-icons">
    {{ iconName }}
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    iconName: {
      type: String,
      required: true
    }
  }
});
</script>

<style lang="scss" scoped>
@use "~@material/icon-button";

@include icon-button.core-styles;
</style>
