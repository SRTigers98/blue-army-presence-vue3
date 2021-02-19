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
import { Season } from '../../store/seasons';
import { UpdateSeasonPayload } from '../../store/seasons/actions';

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
      const seasons = store.getters['seasons/seasons'] as Season[];
      return seasons.find(s => s.id === route.params.id) as Season;
    });
    const currentSeasonId = computed(() => store.getters['seasons/currentSeasonId'] as string);

    const seasonData = ref({
      seasonName: season.value.name,
      isCurrentSeason: season.value.id === currentSeasonId.value
    });

    const editSeason = (seasonData: { seasonName: string; isCurrentSeason: boolean }) => {
      const editedSeason = {
        id: season.value.id,
        name: seasonData.seasonName,
        created: season.value.created,
        isCurrentSeason: seasonData.isCurrentSeason
      } as UpdateSeasonPayload;
      store.dispatch('seasons/updateSeason', editedSeason);
      router.replace({ name: 'seasons' })
    };

    return {
      seasonData,
      editSeason
    };
  }
});
</script>
