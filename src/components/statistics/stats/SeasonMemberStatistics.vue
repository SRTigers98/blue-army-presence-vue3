<template>
  <table class="presence-statistics__member-statistics">
    <tr>
      <th>#</th>
      <th>Name</th>
      <th class="presence-statistics--home">Home</th>
      <th class="presence-statistics--away">Away</th>
      <th class="presence-statistics--total">Total</th>
    </tr>
    <tr v-for="(statistic, i) in sortedStatistics" :key="i">
      <td>{{ i + 1 }}</td>
      <td>{{ statistic.member.lastName }}, {{ statistic.member.firstName }}</td>
      <td class="presence-statistics--home">{{ statistic.homeGames }}</td>
      <td class="presence-statistics--away">{{ statistic.awayGames }}</td>
      <td class="presence-statistics--total">{{ statistic.totalGames }}</td>
    </tr>
  </table>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue';
import { SeasonMemberStatistic } from '../../../types';

export default defineComponent({
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
@use "../../../assets/style/presence-statistics";

.presence-statistics__member-statistics {
  width: 100%;
}
</style>
