<template>
  <MdcCard>
    <section class="presence-container--flex">
      <h1>About</h1>
    </section>
  </MdcCard>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { MdcCard } from "../components";

export default defineComponent({
  components: {
    MdcCard
  }
});
</script>


<style lang="scss" scoped>
@use "../assets/style/presence-container";
</style>
