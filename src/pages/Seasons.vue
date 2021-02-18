<template>
  <section class="presence-container--flex">
    <MdcCard v-for="season in seasons" :key="season.id"
             class="presence-season__card" :class="{'presence-season__card--active': season.isCurrentSeason}">
      <h2>{{ season.name }}</h2>
      <hr>
      <nav class="presence-season__card-actions">
        <MdcButton title="Edit" mode="outlined" />
        <MdcButton title="Open" />
      </nav>
    </MdcCard>
  </section>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useStore } from 'vuex';
import { MdcButton, MdcCard } from '../components';
import { Season } from '../store/seasons';

export default defineComponent({
  components: {
    MdcCard,
    MdcButton
  },
  setup() {
    const seasons = computed(() => useStore().getters['seasons/getSeasons'] as Season[]);

    return {
      seasons
    };
  }
});
</script>

<style lang="scss" scoped>
@use "../assets/style/presence-container";
@use "../assets/style/presence-color";

.presence-season__card {
  width: 25rem;
  max-width: 80%;
  text-align: center;
}

.presence-season__card--active {
  border: 2px solid presence-color.$primary;
}

.presence-season__card-actions {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}
</style>
