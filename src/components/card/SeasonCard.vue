<template>
  <MdcCard class="presence-seasons__card" :class="{'presence-seasons__card--active': season.id === currentSeasonId}">
    <h2>{{ season.name }}</h2>
    <hr>
    <nav class="presence-seasons__card-actions">
      <MdcButton v-if="editable" mode="danger" @click="onDelete">
        <MdcIcon icon-name="delete" />
      </MdcButton>
      <MdcButton v-if="editable" mode="outlined" :link="editLink">Edit</MdcButton>
      <MdcButton :link="gamesLink">Open</MdcButton>
    </nav>
  </MdcCard>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue';
import { MdcButton, MdcCard, MdcIcon } from '../material';
import { Season } from '../../types';

export default defineComponent({
  components: {
    MdcCard,
    MdcIcon,
    MdcButton
  },
  props: {
    season: {
      type: Object as PropType<Season>,
      required: true
    },
    currentSeasonId: {
      type: String
    },
    editable: {
      type: Boolean,
      default: false
    }
  },
  setup(props, context) {
    const editLink = computed(() => ({ name: 'season:edit', params: { seasonId: props.season.id } }));
    const gamesLink = computed(() => ({ name: 'season:games', params: { seasonId: props.season.id } }));

    const onDelete = () => context.emit('delete-season', props.season);

    return {
      editLink,
      gamesLink,
      onDelete
    };
  }
});
</script>

<style lang="scss" scoped>
@use "../../assets/style/presence-color";

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
