<template>
  <section class="presence-container--flex">
    <SeasonCard v-for="season in seasons" :key="season.id"
                :season="season" :current-season-id="currentSeasonId"
                :members="members" :editable="canEdit"
                @delete-season="deleteSeason" />
    <MdcFAB v-if="canEdit" icon-name="add" :link="{name: 'season:new'}"
            class="presence-fab__bottom-right--fixed" />
  </section>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useStore } from 'vuex';
import { MdcFAB, SeasonCard } from '../components';
import { Member, Season } from '../types';

export default defineComponent({
  components: {
    SeasonCard,
    MdcFAB
  },
  setup() {
    const store = useStore();

    const seasons = computed(() => store.getters['season/seasons'] as Season[]);
    const currentSeasonId = computed(() => store.getters['season/currentSeasonId'] as string);
    const members = computed(() => store.getters['member/members'] as Member[])
    const canEdit = computed(() => store.getters['auth/isEditor'] as boolean);

    const deleteSeason = (season: Season) => {
      if (confirm(`Delete Season "${season.name}"?`)) {
        store.dispatch('season/deleteSeason', season.id);
      }
    };

    return {
      seasons,
      currentSeasonId,
      members,
      canEdit,
      deleteSeason
    };
  }
});
</script>

<style lang="scss" scoped>
@use "../assets/style/presence-container";
@use "../assets/style/presence-ui";
</style>
