<template>
  <EditFormContainer :on-submit="submitForm">
    <section class="presence-form__item">
      <MdcTextField v-model="memberFirstName" required>First Name</MdcTextField>
    </section>
    <section class="presence-form__item">
      <MdcTextField v-model="memberLastName" required>Last Name</MdcTextField>
    </section>
    <section class="presence-form__item">
      <MdcSwitch v-model="memberActive">
        <span v-if="memberActive">Active</span>
        <span v-else>Passive</span>
      </MdcSwitch>
    </section>
  </EditFormContainer>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import EditFormContainer from './EditFormContainer.vue';
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

    const submitForm = () => context.emit(
        'member-edit',
        { firstName: memberFirstName.value, lastName: memberLastName.value, active: memberActive.value }
    );

    return {
      memberFirstName,
      memberLastName,
      memberActive,
      submitForm
    };
  }
});
</script>

<style lang="scss" scoped>
@use "../../assets/style/presence-form";
</style>
