<template>
  <MdcCard>
    <section class="presence-container--flex">
      <span class="presence-not-found__404">404</span>
      <span class="presence-not-found__text">Not Found</span>
    </section>
  </MdcCard>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { MdcCard } from '../components';

export default defineComponent({
  components: {
    MdcCard
  }
});
</script>

<style lang="scss" scoped>
@use "../assets/style/presence-container";
@use "../assets/style/presence-color";

.presence-not-found__404 {
  font-size: 5rem;
  font-weight: bold;
}

.presence-not-found__text {
  font-size: 3rem;
}

.presence-not-found__404,
.presence-not-found__text {
  animation: color-blink 4s linear infinite;
}

@keyframes color-blink {
  0% {
    color: black;
    transform: scale(1);
  }
  25% {
    color: presence-color.$primary;
    transform: scale(1.1);
  }
  50% {
    color: presence-color.$secondary;
    transform: scale(1);
  }
  75% {
    color: presence-color.$error;
    transform: scale(1.1);
  }
  100% {
    color: black;
    transform: scale(1);
  }
}
</style>
