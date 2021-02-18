<template>
  <button :class="buttonClass">
    <span class="mdc-button__ripple" />
    <span class="mdc-button__label">{{ title }}</span>
  </button>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue';

type MdcButtonMode = 'primary' | 'outlined';

function getButtonModeClass(buttonMode: MdcButtonMode): string {
  switch (buttonMode) {
    case 'primary':
      return 'mdc-button--raised';
    case 'outlined':
      return 'mdc-button--outlined';
    default:
      return '';
  }
}

export default defineComponent({
  props: {
    title: {
      type: String,
      required: true
    },
    mode: {
      type: String as PropType<MdcButtonMode>,
      default: 'primary'
    }
  },
  setup(props) {
    const buttonClass = computed(() => `mdc-button ${getButtonModeClass(props.mode)}`);

    return {
      buttonClass
    };
  }
});
</script>

<style lang="scss" scoped>
@use "~@material/button/button";

@include button.core-styles;
</style>
