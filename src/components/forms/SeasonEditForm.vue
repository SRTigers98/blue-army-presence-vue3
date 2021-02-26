<template>
  <EditFormContainer :on-submit="submitForm">
    <section class="presence-form__item">
      <label class="mdc-text-field mdc-text-field--filled" ref="seasonNameTextField">
        <span class="mdc-text-field__ripple"></span>
        <span class="mdc-floating-label" id="season-name">Season Name</span>
        <input v-model.trim="seasonName" class="mdc-text-field__input" type="text" aria-labelledby="season-name"
               required minlength="5">
        <span class="mdc-line-ripple"></span>
      </label>
    </section>
    <section class="presence-form__item presence-form__switch">
      <div class="mdc-switch" ref="isCurrentSeasonSwitch">
        <div class="mdc-switch__track"></div>
        <div class="mdc-switch__thumb-underlay">
          <div class="mdc-switch__thumb"></div>
          <input v-model="isCurrentSeason" type="checkbox" id="current-season"
                 class="mdc-switch__native-control" role="switch">
        </div>
      </div>
      <label for="current-season">Is Current Season</label>
    </section>
  </EditFormContainer>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { MDCTextField } from '@material/textfield/component';
import { MDCSwitch } from '@material/switch/component';
import EditFormContainer from './EditFormContainer.vue';

export default defineComponent({
  components: {
    EditFormContainer
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
  },
  mounted() {
    new MDCTextField(this.$refs.seasonNameTextField as Element);
    new MDCSwitch(this.$refs.isCurrentSeasonSwitch as Element);
  }
});
</script>

<style lang="scss" scoped>
@use "../../assets/style/presence-form";
</style>
