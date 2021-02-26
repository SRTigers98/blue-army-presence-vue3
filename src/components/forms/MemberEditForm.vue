<template>
  <EditFormContainer :on-submit="submitForm">
    <section class="presence-form__item">
      <label class="mdc-text-field mdc-text-field--filled" ref="firstNameTextField">
        <span class="mdc-text-field__ripple"></span>
        <span class="mdc-floating-label" id="first-name">First Name</span>
        <input v-model.trim="memberFirstName" class="mdc-text-field__input" type="text" aria-labelledby="first-name"
               required>
        <span class="mdc-line-ripple"></span>
      </label>
    </section>
    <section class="presence-form__item">
      <label class="mdc-text-field mdc-text-field--filled" ref="lastNameTextField">
        <span class="mdc-text-field__ripple"></span>
        <span class="mdc-floating-label" id="last-name">Last Name</span>
        <input v-model.trim="memberLastName" class="mdc-text-field__input" type="text" aria-labelledby="last-name"
               required>
        <span class="mdc-line-ripple"></span>
      </label>
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
import { MDCTextField } from '@material/textfield/component';
import EditFormContainer from './EditFormContainer.vue';
import { MdcSwitch } from '../material';

export default defineComponent({
  components: {
    MdcSwitch,
    EditFormContainer
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
  },
  mounted() {
    new MDCTextField(this.$refs.firstNameTextField as Element);
    new MDCTextField(this.$refs.lastNameTextField as Element);
  }
});
</script>

<style lang="scss" scoped>
@use "../../assets/style/presence-form";
</style>
