<template>
  <section class="presence-statistics__season-statistic">
    <span class="presence-statistics--home">Home - {{ statistic.homeGames }}</span>
    <span class="presence-statistics--away">Away - {{ statistic.awayGames }}</span>
    <span class="presence-statistics--total">Total - {{ statistic.totalGames }}</span>
  </section>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { SeasonStatistic } from '../../../types';

export default defineComponent({
  props: {
    statistic: {
      type: Object as PropType<SeasonStatistic>,
      required: true
    }
  }
});
</script>

<style lang="scss" scoped>
@use "../../../assets/style/presence-statistics";

.presence-statistics__season-statistic {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
}
</style>
