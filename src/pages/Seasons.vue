<template>
  <section class="presence-container--flex">
    <SeasonCard v-for="season in seasons" :key="season.id"
                :season="season" :current-season-id="currentSeasonId" @delete-season="deleteSeason" />
    <MdcFAB icon-name="add" label="New Season" :link="{name: 'season:new'}" />
  </section>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useStore } from 'vuex';
import { MdcFAB, SeasonCard } from '../components';
import { Season } from '../types';

export default defineComponent({
  components: {
    SeasonCard,
    MdcFAB
  },
  setup() {
    const store = useStore();

    const seasons = computed(() => store.getters['season/seasons'] as Season[]);
    const currentSeasonId = computed(() => store.getters['season/currentSeasonId'] as string);

    const deleteSeason = (season: Season) => {
      if (confirm(`Delete Season "${season.name}"?`)) {
        store.dispatch('season/deleteSeason', season.id);
      }
    };

    return {
      seasons,
      currentSeasonId,
      deleteSeason
    };
  }
});
</script>

<style lang="scss" scoped>
@use "../assets/style/presence-container";
</style>
