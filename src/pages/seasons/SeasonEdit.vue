<template>
  <MdcCard>
    <SeasonEditForm :name="seasonData.seasonName"
                    :is-current="seasonData.isCurrentSeason"
                    @season-edit="editSeason" />
  </MdcCard>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useStore } from 'vuex';
import { MdcCard, SeasonEditForm } from '../../components';
import { CreateSeasonPayload, Season, UpdateSeasonPayload } from '../../types';

export default defineComponent({
  components: {
    SeasonEditForm,
    MdcCard
  },
  setup() {
    const store = useStore();
    const route = useRoute();
    const router = useRouter();

    const season = computed(() => {
      const seasons = store.getters['season/seasons'] as Season[];
      return seasons.find(s => s.id === route.params.seasonId) as Season;
    });
    const currentSeasonId = computed(() => store.getters['season/currentSeasonId'] as string);

    const seasonData = ref({
      seasonName: season.value?.name || '',
      isCurrentSeason: season.value?.id === currentSeasonId.value
    });

    const editSeason = (seasonData: { seasonName: string; isCurrentSeason: boolean }) => {
      if (season.value) {
        const editedSeason: UpdateSeasonPayload = {
          id: season.value.id,
          name: seasonData.seasonName,
          created: season.value.created,
          isCurrentSeason: seasonData.isCurrentSeason
        };
        store.dispatch('season/updateSeason', editedSeason);
      } else {
        const createdSeason: CreateSeasonPayload = {
          name: seasonData.seasonName,
          isCurrentSeason: seasonData.isCurrentSeason
        };
        store.dispatch('season/createSeason', createdSeason);
      }
      router.replace({ name: 'seasons' })
    };

    return {
      seasonData,
      editSeason
    };
  }
});
</script>
