<template>
  <MdcCard>
    <section class="presence-container--flex">
      <h1>{{ season.name }}</h1>
    </section>
  </MdcCard>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';
import { MdcCard } from '../../components';
import { Season } from '../../store/seasons';

export default defineComponent({
  components: {
    MdcCard
  },
  setup() {
    const store = useStore();
    const route = useRoute();

    const season = computed(() => {
      const seasons = store.getters['seasons/seasons'] as Season[];
      return seasons.find(s => s.id === route.params.id) as Season;
    });

    return {
      season
    };
  }
});
</script>

<style lang="scss">
@use "../../assets/style/presence-container";
</style>
