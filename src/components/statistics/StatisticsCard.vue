<template>
  <MdcCard class="presence-statistics__card">
    <h2>{{ season.name }}</h2>
    <SeasonStatistic :statistic="seasonStatistic" />
  </MdcCard>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue';
import { MdcCard } from '../material';
import { SeasonStatistic } from './stats';
import { Member, Season } from '../../types';
import { useStatistic } from './api';

export default defineComponent({
  components: {
    MdcCard,
    SeasonStatistic
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

    return {
      seasonStatistic
    };
  }
});
</script>

<style lang="scss" scoped>
.presence-statistics__card {
  width: 90%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
