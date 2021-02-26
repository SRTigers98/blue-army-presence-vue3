<template>
  <div class="mdc-switch" ref="materialSwitch">
    <div class="mdc-switch__track"></div>
    <div class="mdc-switch__thumb-underlay">
      <div class="mdc-switch__thumb"></div>
      <input v-model="switchValue" type="checkbox" id="material-switch"
             class="mdc-switch__native-control" role="switch">
    </div>
  </div>
  <label for="material-switch" class="presence-switch__label">
    <slot />
  </label>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';
import { MDCSwitch } from '@material/switch/component';

export default defineComponent({
  props: {
    modelValue: {
      type: Boolean
    }
  },
  setup(props, context) {
    const switchValue = ref<boolean>(props.modelValue);

    watch(switchValue, (newVal: boolean) => {
      context.emit('update:modelValue', newVal);
    });

    return {
      switchValue
    };
  },
  mounted() {
    new MDCSwitch(this.$refs.materialSwitch as Element);
  }
});
</script>

<style lang="scss" scoped>
.presence-switch__label {
  margin-left: 1rem;
}
</style>
