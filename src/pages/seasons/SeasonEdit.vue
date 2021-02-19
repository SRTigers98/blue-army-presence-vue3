<template>
  <MdcCard>
    <SeasonEditForm :name="seasonData.seasonName"
                    :is-current="seasonData.isCurrentSeason"
                    @season-edit="editSeason" />
  </MdcCard>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';
import { MdcCard, SeasonEditForm } from '../../components';
import { Season } from '../../store/seasons';

export default defineComponent({
  components: {
    SeasonEditForm,
    MdcCard
  },
  setup() {
    const store = useStore();
    const route = useRoute();

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
      console.info(seasonData);
    };

    return {
      seasonData,
      editSeason
    };
  }
});
</script>
