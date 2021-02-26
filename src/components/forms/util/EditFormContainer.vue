<template>
  <form class="presence-container--flex" @submit.prevent="onSubmit">
    <slot></slot>
    <section class="presence-form__item presence-form__actions">
      <MdcButton mode="outlined" type="button" @click="goBack">Back</MdcButton>
      <MdcButton>Save</MdcButton>
    </section>
  </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
import { MdcButton } from '../../material';

export default defineComponent({
  components: {
    MdcButton
  },
  props: {
    onSubmit: {
      type: Function,
      required: true
    }
  },
  setup() {
    const router = useRouter();

    const goBack = () => router.back();

    return {
      goBack
    };
  }
});
</script>

<style lang="scss" scoped>
@use "../../../assets/style/presence-container";
@use "../../../assets/style/presence-form";
</style>
