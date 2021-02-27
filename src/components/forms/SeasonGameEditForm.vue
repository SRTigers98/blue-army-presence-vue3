<template>
  <EditFormContainer :on-submit="submitForm">
    <section class="presence-form__item">
      <MdcTextField v-model="opponent" label="Opponent" required />
    </section>
    <section class="presence-form__item">
      <MdcSwitch v-model="home" :label="home ? 'Home' : 'Away'" />
    </section>
  </EditFormContainer>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue';
import { EditFormContainer } from './util';
import { MdcSwitch, MdcTextField } from '../material';
import { SeasonGame } from '../../types';

export default defineComponent({
  components: {
    EditFormContainer,
    MdcTextField,
    MdcSwitch
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

    const submitForm = () => context.emit('game-edit', {
      opponent: opponent.value,
      home: home.value
    } as SeasonGame);

    return {
      opponent,
      home,
      submitForm
    };
  }
});
</script>

<style lang="scss" scoped>
@use "../../assets/style/presence-form";
</style>
