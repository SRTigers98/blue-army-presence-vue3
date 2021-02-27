<template>
  <EditFormContainer :on-submit="submitForm">
    <section class="presence-form__item">
      <MdcTextField v-model="opponent" label="Opponent" required />
    </section>
    <section class="presence-form__item">
      <MdcSwitch v-model="home" :label="home ? 'Home' : 'Away'" />
    </section>
    <section class="presence-form__item">
      <MdcDateField v-model="date" label="Date" required />
    </section>
    <section class="presence-form__item">
      <MdcRadioGroup v-model="mode" :values="['regular', 'playoffs']" />
    </section>
  </EditFormContainer>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue';
import { EditFormContainer } from './util';
import { MdcDateField, MdcRadioGroup, MdcSwitch, MdcTextField } from '../material';
import { SeasonGame } from '../../types';

export default defineComponent({
  components: {
    EditFormContainer,
    MdcTextField,
    MdcSwitch,
    MdcDateField,
    MdcRadioGroup
  },
  props: {
    gameData: {
      type: Object as PropType<SeasonGame>,
      required: true
    }
  },
  setup(props, context) {
    const opponent = ref<string>(props.gameData?.opponent || '');
    const home = ref<boolean>(props.gameData ? props.gameData.home : true);
    const date = ref<Date>(props.gameData?.date || new Date());
    const mode = ref<'regular' | 'playoffs'>(props.gameData?.mode || 'regular');

    const submitForm = () => context.emit('game-edit', {
      opponent: opponent.value,
      home: home.value,
      date: date.value,
      mode: mode.value
    } as SeasonGame);

    return {
      opponent,
      home,
      date,
      mode,
      submitForm
    };
  }
});
</script>

<style lang="scss" scoped>
@use "../../assets/style/presence-form";
</style>
