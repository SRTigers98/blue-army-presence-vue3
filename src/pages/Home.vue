<template>
  <MdcCard>
    <section class="presence-container--flex">
      <h1>Blue Army Presence</h1>
      <img src="../assets/img/logo.png" alt="Blue Army Logo" class="presence-home__logo">
      <MdcButton @click="goToCurrentSeason">Current Season</MdcButton>
    </section>
  </MdcCard>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { MdcButton, MdcCard } from "../components";

export default defineComponent({
  components: {
    MdcCard,
    MdcButton
  },
  setup() {
    // todo go to current season
    const goToCurrentSeason = () => console.info('Going to current season...');

    return {
      goToCurrentSeason
    };
  }
});
</script>

<style lang="scss" scoped>
@use "../assets/style/presence-container";

.presence-home__logo {
  margin-bottom: 1rem;
}
</style>
