<template>
  <EditFormContainer :on-submit="submitForm">
    <section class="presence-form__item">
      <MdcTextField v-model="seasonName" label="Season Name" required />
    </section>
    <section class="presence-form__item">
      <MdcSwitch v-model="isCurrentSeason" label="Is Current Season" />
    </section>
  </EditFormContainer>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { EditFormContainer } from './util';
import { MdcSwitch, MdcTextField } from '../material';

export default defineComponent({
  components: {
    EditFormContainer,
    MdcSwitch,
    MdcTextField
  },
  props: {
    name: {
      type: String,
      required: true
    },
    isCurrent: {
      type: Boolean,
      required: true
    }
  },
  setup(props, context) {
    const seasonName = ref<string>(props.name);
    const isCurrentSeason = ref<boolean>(props.isCurrent);

    const submitForm = () => context.emit(
        'season-edit',
        { seasonName: seasonName.value, isCurrentSeason: isCurrentSeason.value }
    );

    return {
      seasonName,
      isCurrentSeason,
      submitForm
    };
  }
});
</script>

<style lang="scss" scoped>
@use "../../assets/style/presence-form";
</style>
