<template>
  <MdcCard class="presence-statistics__card">
    <h1>Statistics</h1>
  </MdcCard>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { MdcCard } from '../material';

export default defineComponent({
  components: {
    MdcCard
  }
});
</script>

<style lang="scss" scoped>
.presence-statistics__card {
  width: 90%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
