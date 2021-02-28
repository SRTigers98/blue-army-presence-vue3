<template>
  <section class="presence-container--flex">
    <StatisticsCard v-for="season in seasons" :key="season.id"
                    :season="season" :members="members" />
  </section>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useStore } from 'vuex';
import { StatisticsCard } from '../components';
import { Member, Season } from '../types';

export default defineComponent({
  components: {
    StatisticsCard
  },
  setup() {
    const store = useStore();

    const seasons = computed(() => store.getters['season/seasons'] as Season[]);
    const members = computed(() => store.getters['member/members'] as Member[]);

    return {
      seasons,
      members
    };
  }
});
</script>

<style lang="scss" scoped>
@use "../assets/style/presence-container";
</style>
