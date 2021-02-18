<template>
  <button :class="buttonClass" @click="goToLink">
    <span class="mdc-button__ripple" />
    <span class="mdc-button__label">{{ title }}</span>
  </button>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue';
import { LocationAsRelativeRaw, useRouter } from 'vue-router';

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
    },
    link: {
      type: Object as PropType<LocationAsRelativeRaw>
    }
  },
  setup(props) {
    const router = useRouter();

    const buttonClass = computed(() => `mdc-button ${getButtonModeClass(props.mode)}`);

    const goToLink = () => {
      if (props.link) {
        router.push(props.link);
      }
    };

    return {
      buttonClass,
      goToLink
    };
  }
});
</script>
