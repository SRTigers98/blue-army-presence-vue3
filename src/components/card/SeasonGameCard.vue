<template>
  <MdcCard class="presence-games__card">
    <h2>{{ seasonGame.home ? 'vs.' : '@' }} {{ seasonGame.opponent }}</h2>
    <section class="presence-games__game-info">
      <MdcIcon :icon-name="gameModeIcon" />
      <span>{{ seasonGame.date.toLocaleDateString() }}</span>
    </section>
    <hr>
    <menu v-if="editable" class="presence-games__card-menu">
      <MdcButton mode="danger" @click="onDelete">
        <MdcIcon icon-name="delete" />
      </MdcButton>
      <MdcButton :link="editLink">Edit</MdcButton>
    </menu>
  </MdcCard>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue';
import { LocationAsRelativeRaw } from 'vue-router';
import { MdcButton, MdcCard, MdcIcon } from '../material';
import { SeasonGame } from '../../types';

export default defineComponent({
  components: {
    MdcCard,
    MdcIcon,
    MdcButton
  },
  props: {
    seasonGame: {
      type: Object as PropType<SeasonGame>,
      required: true
    },
    seasonId: {
      type: String,
      required: true
    },
    editable: {
      type: Boolean,
      default: false
    }
  },
  setup(props, context) {
    const gameModeIcon = computed<string>(() => {
      switch (props.seasonGame.mode) {
        case 'regular':
          return 'event';
        case 'playoffs':
          return 'whatshot';
        default:
          return 'error';
      }
    });
    const editLink = computed<LocationAsRelativeRaw>(() => ({
      name: 'season:game:edit',
      params: {
        seasonId: props.seasonId,
        gameId: props.seasonGame.id
      }
    }));

    const onDelete = () => context.emit('delete-game', props.seasonGame);

    return {
      gameModeIcon,
      editLink,
      onDelete
    };
  }
});
</script>

<style lang="scss" scoped>
.presence-games__card {
  width: 80%;
  max-width: 25rem;
  text-align: center;
}

.presence-games__game-info {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
}

.presence-games__card-menu {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding: 0;
  margin: 0.5rem 0;
}
</style>
