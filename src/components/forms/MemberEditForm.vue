<template>
  <EditFormContainer :on-submit="submitForm">
    <section class="presence-form__item">
      <MdcTextField v-model="memberFirstName" label="First Name" required />
    </section>
    <section class="presence-form__item">
      <MdcTextField v-model="memberLastName" label="Last Name" required />
    </section>
    <section class="presence-form__item">
      <MdcSwitch v-model="memberActive" :label="activeLabel" />
    </section>
  </EditFormContainer>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue';
import { EditFormContainer } from './util';
import { MdcSwitch, MdcTextField } from '../material';

export default defineComponent({
  components: {
    EditFormContainer,
    MdcSwitch,
    MdcTextField
  },
  props: {
    firstName: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true
    },
    active: {
      type: Boolean,
      required: true
    }
  },
  setup(props, context) {
    const memberFirstName = ref<string>(props.firstName);
    const memberLastName = ref<string>(props.lastName);
    const memberActive = ref<boolean>(props.active);

    const activeLabel = computed(() => memberActive.value ? 'Active' : 'Passive');

    const submitForm = () => context.emit(
        'member-edit',
        { firstName: memberFirstName.value, lastName: memberLastName.value, active: memberActive.value }
    );

    return {
      memberFirstName,
      memberLastName,
      memberActive,
      activeLabel,
      submitForm
    };
  }
});
</script>

<style lang="scss" scoped>
@use "../../assets/style/presence-form";
</style>
