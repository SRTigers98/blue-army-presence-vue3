<template>
  <MdcCard class="presence-statistics__card">
    <h2>{{ season.name }}</h2>
    <SeasonStatistic :statistic="seasonStatistic" />
    <hr>
    <SeasonMemberStatistics :statistics="seasonMemberStatistics" />
  </MdcCard>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue';
import { MdcCard } from '../material';
import { SeasonMemberStatistics, SeasonStatistic } from './stats';
import { Member, Season } from '../../types';
import { useStatistic } from './api';

export default defineComponent({
  components: {
    MdcCard,
    SeasonStatistic,
    SeasonMemberStatistics
  },
  props: {
    season: {
      type: Object as PropType<Season>,
      required: true
    },
    members: {
      type: Array as PropType<Member[]>,
      required: true
    }
  },
  setup(props) {
    const statistic = useStatistic();

    const seasonStatistic = computed(() => statistic.getSeasonStatistic(props.season));
    const seasonMemberStatistics = computed(() =>
        props.members.map(member => statistic.getSeasonMemberStatistic(props.season, member)));

    return {
      seasonStatistic,
      seasonMemberStatistics
    };
  }
});
</script>

<style lang="scss" scoped>
.presence-statistics__card {
  width: 90%;
  max-width: 30rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
