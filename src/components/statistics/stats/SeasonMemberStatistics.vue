<template>
  <section class="presence-statistics__container">
    <table class="presence-statistics__member-statistics">
      <StatisticsTableHeader />
      <tbody>
      <StatisticsTableRow v-for="(statistic, index) in sortedStatistics" :key="index"
                          :statistic="statistic" :index="index" />
      </tbody>
    </table>
  </section>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue';
import { StatisticsTableHeader, StatisticsTableRow } from './table';
import { SeasonMemberStatistic } from '../../../types';

export default defineComponent({
  components: {
    StatisticsTableHeader,
    StatisticsTableRow
  },
  props: {
    statistics: {
      type: Array as PropType<SeasonMemberStatistic[]>,
      required: true
    }
  },
  setup(props) {
    const sortedStatistics = computed(() => {
      return [...(props.statistics as SeasonMemberStatistic[])]
          .filter(stat => stat.totalGames > 0)
          .sort((stat1, stat2) => stat2.totalGames - stat1.totalGames);
    });

    return {
      sortedStatistics
    };
  }
});
</script>

<style lang="scss" scoped>
.presence-statistics__container {
  overflow-x: auto;
}

.presence-statistics__member-statistics {
  width: 100%;
  border-spacing: 0;
  border-collapse: collapse;
}
</style>
