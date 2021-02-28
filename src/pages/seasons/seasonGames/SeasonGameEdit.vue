<template>
  <MdcCard>
    <SeasonGameEditForm :game-data="game" :active-members="activeMembers"
                        @game-edit="editGame" />
  </MdcCard>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useStore } from 'vuex';
import { useRoute, useRouter } from 'vue-router';
import { MdcCard, SeasonGameEditForm } from '../../../components';
import { Member, SaveSeasonGamePayload, Season, SeasonGame } from '../../../types';

export default defineComponent({
  components: {
    MdcCard,
    SeasonGameEditForm
  },
  setup() {
    const store = useStore();
    const router = useRouter();
    const route = useRoute();

    const game = computed<SeasonGame | undefined>(() => {
      const seasons = store.getters['season/seasons'] as Season[];
      const season = seasons.find(s => s.id === route.params.seasonId);
      return season?.games.find(g => g.id === route.params.gameId);
    });
    const activeMembers = computed(() => store.getters['member/activeMembers'] as Member[]);

    const editGame = (editedGame: SeasonGame) => {
      const payload: SaveSeasonGamePayload = {
        seasonId: route.params.seasonId as string,
        game: {
          ...editedGame,
          id: (route.params.gameId || '') as string
        }
      };
      store.dispatch('season/saveGame', payload);
      router.replace({ name: 'season:games', params: { seasonId: route.params.seasonId } });
    };

    return {
      game,
      activeMembers,
      editGame
    };
  }
});
</script>
