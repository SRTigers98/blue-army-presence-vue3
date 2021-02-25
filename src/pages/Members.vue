<template>
  <section class="presence-container--flex">
    <MdcCard v-for="member in members" :key="member.id" class="presence-members__card">
      <h2>
        <MdcIcon icon-name="person" class="presence-members__card-icon" :class="{'active': member.active}" />
        {{ member.lastName }}, {{ member.firstName }}
      </h2>
      <menu class="presence-members__card-actions">
        <MdcButton mode="danger">
          <MdcIcon icon-name="delete" />
        </MdcButton>
        <MdcButton>Edit</MdcButton>
      </menu>
    </MdcCard>
  </section>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useStore } from 'vuex';
import { MdcButton, MdcCard, MdcIcon } from '../components';
import { Member } from '../types';

export default defineComponent({
  components: {
    MdcButton,
    MdcCard,
    MdcIcon
  },
  setup() {
    const store = useStore();

    const members = computed(() => store.getters['member/members'] as Member[]);

    return {
      members
    };
  }
});
</script>

<style lang="scss" scoped>
@use "../assets/style/presence-container";
@use "../assets/style/presence-color";

.presence-members__card {
  width: 25rem;
  max-width: 80%;
}

.presence-members__card-icon {
  border-radius: 50%;
  background-color: darkgray;
  padding: 0.5rem;
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
