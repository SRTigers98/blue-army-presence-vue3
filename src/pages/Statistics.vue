<template>
  <section class="presence-container--flex">
    <StatisticsCard />
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { StatisticsCard } from '../components';

export default defineComponent({
  components: {
    StatisticsCard
  }
});
</script>

<style lang="scss" scoped>
@use "../assets/style/presence-container";
</style>
