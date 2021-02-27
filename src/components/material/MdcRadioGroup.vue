<template>
  <section class="presence-radio__group">
    <section v-for="val in values" :key="val">
      <MdcRadio v-model="radioGroupValue" :label="val" :radio-value="val" :group="groupName" />
    </section>
  </section>
</template>

<script lang="ts">
import { defineComponent, PropType, ref, watch } from 'vue';
import { MdcRadio } from '.';

export default defineComponent({
  components: {
    MdcRadio
  },
  props: {
    modelValue: {
      type: String
    },
    values: {
      type: Object as PropType<Array<string>>,
      required: true
    },
    groupName: {
      type: String,
      default: 'radioGroup'
    }
  },
  setup(props, context) {
    const radioGroupValue = ref<string>(props.modelValue as string);

    watch(radioGroupValue, () => context.emit('update:modelValue', radioGroupValue.value));

    return {
      radioGroupValue
    };
  }
});
</script>

<style lang="scss" scoped>
.presence-radio__group {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
  width: 100%;
}
</style>
