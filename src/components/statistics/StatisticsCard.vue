<template>
  <MdcCard class="presence-statistics__card">
    <h2>{{ season.name }}</h2>
  </MdcCard>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { MdcCard } from '../material';
import { Member, Season } from '../../types';

export default defineComponent({
  components: {
    MdcCard
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
