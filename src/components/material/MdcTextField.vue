<template>
  <label class="mdc-text-field mdc-text-field--filled" ref="materialTextField">
    <span class="mdc-text-field__ripple"></span>
    <span class="mdc-floating-label" id="material-text">
      {{ label }}
    </span>
    <input v-model.trim="textValue" class="mdc-text-field__input" type="text" aria-labelledby="material-text"
           :required="required">
    <span class="mdc-line-ripple"></span>
  </label>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';
import { MDCTextField } from '@material/textfield/component';

export default defineComponent({
  props: {
    modelValue: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      required: true
    },
    required: {
      type: Boolean,
      default: false
    }
  },
  setup(props, context) {
    const textValue = ref<string>(props.modelValue);

    watch(textValue, (newVal: string) => context.emit('update:modelValue', newVal));

    return {
      textValue
    };
  },
  mounted() {
    new MDCTextField(this.$refs.materialTextField as Element);
  }
});
</script>
