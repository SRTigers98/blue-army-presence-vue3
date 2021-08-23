<template>
  <router-link v-if="!!link && !disabled" :to="link" :class="buttonClass">
    <span class="mdc-button__ripple" />
    <span class="mdc-button__label">
      <slot />
    </span>
  </router-link>
  <a v-else-if="!!href && !disabled" :href="href" :class="buttonClass">
    <span class="mdc-button__ripple" />
    <span class="mdc-button__label">
      <slot />
    </span>
  </a>
  <button v-else :class="buttonClass" :disabled="disabled">
    <span class="mdc-button__ripple" />
    <span class="mdc-button__label">
      <slot />
    </span>
  </button>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue';
import { LocationAsRelativeRaw } from 'vue-router';

type MdcButtonMode = 'primary' | 'outlined' | 'danger' | 'csv';

function getButtonModeClass(buttonMode: MdcButtonMode): string {
  switch (buttonMode) {
    case 'primary':
      return 'mdc-button--raised';
    case 'outlined':
      return 'mdc-button--outlined';
    case 'danger':
      return 'mdc-button--outlined presence-button--danger';
    case 'csv':
      return 'mdc-button--outlined presence-button--csv';
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
    },
    href: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
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
@use "../../assets/style/presence-color";

.presence-button--danger {
  color: presence-color.$error !important;
}

.presence-button--csv {
  color: presence-color.$secondary !important;
}
</style>
