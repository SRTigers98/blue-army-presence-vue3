<template>
  <section class="presence-container--flex">
    <MdcCard class="presence-members__card">
      <h2>
        <MdcIcon icon-name="person" class="presence-members__card-icon" />
        Max Mustermann
      </h2>
      <menu class="presence-members__card-actions">
        <MdcButton mode="danger">Delete</MdcButton>
        <MdcButton>Edit</MdcButton>
      </menu>
    </MdcCard>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { MdcButton, MdcCard, MdcIcon } from '../components';

export default defineComponent({
  components: {
    MdcButton,
    MdcCard,
    MdcIcon
  }
});
</script>

<style lang="scss" scoped>
@use "../assets/style/presence-container";

.presence-members__card {
  width: 25rem;
  max-width: 80%;
}

.presence-members__card-icon {
  border-radius: 50%;
  background-color: darkgray;
  padding: 0.5rem;
}

.presence-members__card-actions {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding: 0;
}
</style>
