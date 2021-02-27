<template>
  <section class="presence-container--flex">
    <SeasonGameCard v-for="game in seasonGames" :key="game.id"
                    :season-game="game" :season-id="seasonId" />
  </section>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';
import { SeasonGameCard } from '../../components';
import { Season } from '../../types';

export default defineComponent({
  components: {
    SeasonGameCard
  },
  setup() {
    const store = useStore();
    const route = useRoute();

    const seasonGames = computed(() => {
      const seasons = store.getters['season/seasons'] as Season[];
      return (seasons.find(s => s.id === route.params.seasonId)?.games || [])
          .sort((g1, g2) => g2.date.getTime() - g1.date.getTime());
    });
    const seasonId = computed(() => route.params.seasonId);

    return {
      seasonGames,
      seasonId
    };
  }
});
</script>

<style lang="scss" scoped>
@use "../../assets/style/presence-container";
</style>
