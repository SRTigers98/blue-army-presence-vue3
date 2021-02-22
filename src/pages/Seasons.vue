<template>
  <section class="presence-container--flex">
    <MdcCard v-for="season in seasons" :key="season.id"
             class="presence-seasons__card" :class="{'presence-seasons__card--active': season.id === currentSeasonId}">
      <h2>{{ season.name }}</h2>
      <hr>
      <nav class="presence-seasons__card-actions">
        <MdcButton mode="outlined" :link="getSeasonEditLink(season.id)">Edit</MdcButton>
        <MdcButton>Open</MdcButton>
      </nav>
    </MdcCard>
    <MdcFAB icon-name="add" label="New Season"
            :is-link="true" :to="{name: 'season:new'}" />
  </section>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useStore } from 'vuex';
import { MdcButton, MdcCard, MdcFAB } from '../components';
import { Season } from '../store/seasons';

export default defineComponent({
  components: {
    MdcCard,
    MdcButton,
    MdcFAB
  },
  setup() {
    const store = useStore();

    const seasons = computed(() => store.getters['seasons/seasons'] as Season[]);

    const currentSeasonId = computed(() => store.getters['seasons/currentSeasonId'] as string);

    const getSeasonEditLink = (seasonId: string) => ({ name: 'season:edit', params: { id: seasonId } });

    return {
      seasons,
      currentSeasonId,
      getSeasonEditLink
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
