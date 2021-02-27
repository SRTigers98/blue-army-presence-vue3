<template>
  <label class="mdc-text-field mdc-text-field--filled" ref="materialDateField">
    <span class="mdc-text-field__ripple"></span>
    <span class="mdc-floating-label" id="material-date">
      {{ label }}
    </span>
    <input v-model.trim="dateValue" class="mdc-text-field__input"
           type="date" aria-labelledby="material-date"
           :required="required">
    <span class="mdc-line-ripple"></span>
  </label>
</template>

<script lang="ts">
import { defineComponent, PropType, ref, watch } from 'vue';
import { MDCTextField } from '@material/textfield/component';
import { useDateParse } from './util';

export default defineComponent({
  props: {
    modelValue: {
      type: Object as PropType<Date>,
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
    const parseDate = useDateParse();
    const dateValue = ref<string>(parseDate(props.modelValue));

    watch(dateValue, (newVal: string) => {
      console.info(newVal);
      const newDate = new Date(newVal);
      context.emit('update:modelValue', newDate);
    });

    return {
      dateValue
    };
  },
  mounted() {
    new MDCTextField(this.$refs.materialDateField as Element);
  }
});
</script>
