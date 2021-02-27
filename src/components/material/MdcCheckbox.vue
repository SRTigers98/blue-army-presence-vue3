<template>
  <section class="presence-checkbox__container">
    <div class="mdc-checkbox" ref="materialCheckbox">
      <input type="checkbox" v-model="checkboxValue" :value="checkedValue"
             id="material-checkbox" class="mdc-checkbox__native-control" />
      <div class="mdc-checkbox__background">
        <svg class="mdc-checkbox__checkmark"
             viewBox="0 0 24 24">
          <path class="mdc-checkbox__checkmark-path"
                fill="none"
                d="M1.73,12.91 8.1,19.28 22.79,4.59" />
        </svg>
        <div class="mdc-checkbox__mixedmark"></div>
      </div>
      <div class="mdc-checkbox__ripple"></div>
    </div>
    <label for="material-checkbox">{{ label }}</label>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';
import { MDCCheckbox } from '@material/checkbox/component';

type CheckboxType = string | boolean;

export default defineComponent({
  props: {
    modelValue: {
      type: [Array, Boolean]
    },
    label: {
      type: String,
      required: true
    },
    checkedValue: {
      type: String,
      default: ''
    }
  },
  setup(props, context) {
    const checkboxValue = ref<CheckboxType>(props.modelValue as CheckboxType);

    watch(checkboxValue, (newVal: CheckboxType) => {
      context.emit('update:modelValue', newVal);
    });

    return {
      checkboxValue
    };
  },
  mounted() {
    new MDCCheckbox(this.$refs.materialCheckbox as Element);
  }
});
</script>

<style lang="scss" scoped>
.presence-checkbox__container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
</style>
