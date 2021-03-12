<template>
  <section class="presence-container--flex">
    <SeasonGameCard v-for="game in seasonGames" :key="game.id"
                    :season-game="game" :season-id="seasonId"
                    :editable="canEdit" @delete-game="deleteGame" />
    <MdcFAB v-if="canEdit" icon-name="add" :link="newGameLink"
            class="presence-fab__bottom-right--fixed" />
  </section>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useStore } from 'vuex';
import { LocationAsRelativeRaw, useRoute } from 'vue-router';
import { MdcFAB, SeasonGameCard } from '../../components';
import { DeleteSeasonGamePayload, Season, SeasonGame } from '../../types';

export default defineComponent({
  components: {
    SeasonGameCard,
    MdcFAB
  },
  setup() {
    const store = useStore();
    const route = useRoute();

    const seasonGames = computed(() => {
      const seasons = store.getters['season/seasons'] as Season[];
      return (seasons.find(s => s.id === route.params.seasonId)?.games || [])
          .sort((g1, g2) => g2.date.getTime() - g1.date.getTime());
    });
    const seasonId = computed<string>(() => route.params.seasonId as string);

    const newGameLink = computed<LocationAsRelativeRaw>(() => ({
      name: 'season:game:new',
      params: {
        seasonId: route.params.seasonId
      }
    }));
    const deleteGame = (game: SeasonGame) => {
      if (confirm(`Delete game against ${game.opponent}?`)) {
        const payload: DeleteSeasonGamePayload = { gameId: game.id, seasonId: seasonId.value };
        store.dispatch('season/deleteGame', payload);
      }
    };

    const canEdit = computed(() => store.getters['auth/isEditor'] as boolean);

    return {
      seasonGames,
      seasonId,
      newGameLink,
      deleteGame,
      canEdit
    };
  }
});
</script>

<style lang="scss" scoped>
@use "../../assets/style/presence-container";
@use "../../assets/style/presence-ui";
</style>
