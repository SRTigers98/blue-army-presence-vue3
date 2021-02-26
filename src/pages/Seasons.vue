<template>
  <section class="presence-container--flex">
    <MdcCard v-for="season in seasons" :key="season.id"
             class="presence-seasons__card" :class="{'presence-seasons__card--active': season.id === currentSeasonId}">
      <h2>{{ season.name }}</h2>
      <hr>
      <nav class="presence-seasons__card-actions">
        <MdcButton mode="danger" @click="deleteSeason(season)">
          <MdcIcon icon-name="delete" />
        </MdcButton>
        <MdcButton mode="outlined" :link="getSeasonEditLink(season.id)">Edit</MdcButton>
        <MdcButton :link="getSeasonGamesLink(season.id)">Open</MdcButton>
      </nav>
    </MdcCard>
    <MdcFAB icon-name="add" label="New Season" :link="{name: 'season:new'}" />
  </section>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useStore } from 'vuex';
import { MdcButton, MdcCard, MdcFAB, MdcIcon } from '../components';
import { Season } from '../types';

export default defineComponent({
  components: {
    MdcIcon,
    MdcCard,
    MdcButton,
    MdcFAB
  },
  setup() {
    const store = useStore();

    const seasons = computed(() => store.getters['season/seasons'] as Season[]);

    const currentSeasonId = computed(() => store.getters['season/currentSeasonId'] as string);

    const getSeasonEditLink = (seasonId: string) => ({ name: 'season:edit', params: { seasonId: seasonId } });
    const getSeasonGamesLink = (seasonId: string) => ({ name: 'season:games', params: { seasonId: seasonId } });

    const deleteSeason = (season: Season) => {
      if (confirm(`Delete Season "${season.name}"?`)) {
        store.dispatch('season/deleteSeason', season.id);
      }
    };

    return {
      seasons,
      currentSeasonId,
      getSeasonEditLink,
      getSeasonGamesLink,
      deleteSeason
    };
  }
});
</script>

<style lang="scss" scoped>
@use "../assets/style/presence-container";
@use "../assets/style/presence-color";

.presence-seasons__card {
  width: 25rem;
  max-width: 80%;
  text-align: center;
}

.presence-seasons__card--active {
  border: 0.25rem solid presence-color.$primary;
}

.presence-seasons__card-actions {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}
</style>
