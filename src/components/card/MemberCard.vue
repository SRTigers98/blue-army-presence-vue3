<template>
  <MdcCard class="presence-members__card">
    <h2 class="presence-members__card-header">
      <MdcIcon icon-name="person" class="presence-members__card-icon" :class="{'active': member.active}" />
      <span>{{ member.lastName }}, {{ member.firstName }}</span>
    </h2>
    <menu v-if="editable" class="presence-members__card-actions">
      <MdcButton mode="danger" @click="onDelete">
        <MdcIcon icon-name="delete" />
      </MdcButton>
      <MdcButton :link="{name: 'member:edit', params: {memberId: member.id}}">Edit</MdcButton>
    </menu>
  </MdcCard>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { MdcButton, MdcCard, MdcIcon } from '../material';
import { Member } from '../../types';

export default defineComponent({
  components: {
    MdcCard,
    MdcIcon,
    MdcButton
  },
  props: {
    member: {
      type: Object as PropType<Member>,
      required: true
    },
    editable: {
      type: Boolean,
      default: false
    }
  },
  setup(props, context) {
    const onDelete = () => context.emit('delete-member', props.member);

    return {
      onDelete
    };
  }
});
</script>

<style lang="scss" scoped>
@use "../../assets/style/presence-color";

.presence-members__card {
  width: 25rem;
  max-width: 80%;
}

.presence-members__card-header {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.presence-members__card-icon {
  border-radius: 50%;
  background-color: darkgray;
  padding: 0.5rem;
  margin-right: 0.5rem;
}

.presence-members__card-icon.active {
  background-color: presence-color.$primary;
  color: presence-color.$on-primary;
}

.presence-members__card-actions {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding: 0;
}
</style>
