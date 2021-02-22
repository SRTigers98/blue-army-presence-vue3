<template>
  <router-link v-if="!!link" :to="link" :class="buttonClass">
    <span class="mdc-button__ripple" />
    <span class="mdc-button__label">
      <slot />
    </span>
  </router-link>
  <button v-else :class="buttonClass">
    <span class="mdc-button__ripple" />
    <span class="mdc-button__label">
      <slot />
    </span>
  </button>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue';
import { LocationAsRelativeRaw } from 'vue-router';

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
    mode: {
      type: String as PropType<MdcButtonMode>,
      default: 'primary'
    },
    link: {
      type: Object as PropType<LocationAsRelativeRaw>
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
