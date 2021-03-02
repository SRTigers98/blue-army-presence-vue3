<template>
  <tr>
    <td><b>{{ index + 1 }}</b></td>
    <td>{{ statistic.member.lastName }}, {{ statistic.member.firstName }}</td>
    <td class="presence-statistics--home">{{ statistic.homeGames }}</td>
    <td class="presence-statistics--away">{{ statistic.awayGames }}</td>
    <td class="presence-statistics--total">{{ statistic.totalGames }}</td>
  </tr>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { SeasonMemberStatistic } from '../../../../types';

export default defineComponent({
  props: {
    statistic: {
      type: Object as PropType<SeasonMemberStatistic>,
      required: true
    },
    index: {
      type: Number,
      required: true
    }
  }
});
</script>

<style lang="scss" scoped>
@use "../../../../assets/style/presence-statistics";

tr:first-child {
  background-color: #e2b007;
}

tr:nth-child(2) {
  background-color: #c0c0c0;
}

tr:nth-child(3) {
  background-color: #bf8970;
}

td {
  height: 2rem;
  padding: 0.25rem;
}
</style>
