<template>
  <section class="presence-container--flex">
    <MdcCard v-for="game in seasonGames" :key="game.id" class="presence-games__card">
      <h2>{{ game.home ? 'vs.' : '@' }} {{ game.opponent }}</h2>
      <section class="presence-games__game-info">
        <MdcIcon :icon-name="getGameModeIcon(game)" />
        <span>{{ game.date.toLocaleDateString() }}</span>
      </section>
      <hr>
      <menu class="presence-games__card-menu">
        <MdcButton mode="danger">
          <MdcIcon icon-name="delete" />
        </MdcButton>
        <MdcButton :link="getEditLink(game.id)">Edit</MdcButton>
      </menu>
    </MdcCard>
  </section>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useStore } from 'vuex';
import { LocationAsRelativeRaw, useRoute } from 'vue-router';
import { MdcButton, MdcCard, MdcIcon } from '../../components';
import { Season, SeasonGame } from '../../types';

export default defineComponent({
  components: {
    MdcCard,
    MdcIcon,
    MdcButton
  },
  setup() {
    const store = useStore();
    const route = useRoute();

    const seasonGames = computed(() => {
      const seasons = store.getters['season/seasons'] as Season[];
      return (seasons.find(s => s.id === route.params.seasonId)?.games || [])
          .sort((g1, g2) => g2.date.getTime() - g1.date.getTime());
    });

    const getGameModeIcon = (game: SeasonGame): string => {
      switch (game.mode) {
        case 'regular':
          return 'event';
        case 'playoffs':
          return 'whatshot';
      }
    };

    const getEditLink = (gameId: string): LocationAsRelativeRaw => ({
      name: 'season:game:edit',
      params: {
        seasonId: route.params.seasonId,
        gameId
      }
    });

    return {
      seasonGames,
      getGameModeIcon,
      getEditLink
    };
  }
});
</script>

<style lang="scss" scoped>
@use "../../assets/style/presence-container";

.presence-games__card {
  width: 80%;
  max-width: 25rem;
  text-align: center;
}

.presence-games__game-info {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
}

.presence-games__card-menu {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding: 0;
  margin: 0.5rem 0;
}
</style>
