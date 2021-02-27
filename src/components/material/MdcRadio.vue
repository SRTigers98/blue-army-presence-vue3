<template>
  <div class="mdc-radio" ref="materialRadio">
    <input v-model="radioModel" type="radio" id="material-radio" :value="radioValue" :name="group"
           class="mdc-radio__native-control">
    <div class="mdc-radio__background">
      <div class="mdc-radio__outer-circle"></div>
      <div class="mdc-radio__inner-circle"></div>
    </div>
    <div class="mdc-radio__ripple"></div>
  </div>
  <label for="material-radio" class="presence-radio__label">
    {{ label }}
  </label>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';
import { MDCRadio } from '@material/radio/component';

export default defineComponent({
  props: {
    modelValue: {
      type: String
    },
    radioValue: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    group: {
      type: String,
      default: 'radios'
    }
  },
  setup(props, context) {
    const radioModel = ref<string>(props.modelValue as string);

    watch(radioModel, (newVal: string) => {
      if (newVal === props.radioValue) {
        context.emit('update:modelValue', newVal);
      }
    });

    return {
      radioModel
    };
  },
  mounted() {
    new MDCRadio(this.$refs.materialRadio as Element);
  }
});
</script>

<style lang="scss" scoped>
.presence-radio__label {
  text-transform: capitalize;
}
</style>
