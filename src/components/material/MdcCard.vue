<template>
  <section class="mdc-card presence-card">
    <div class="mdc-card__content presence-card__content">
      <slot></slot>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({});
</script>

<style lang="scss" scoped>
$spacing: 0.5rem;

.presence-card {
  height: calc(100% - 2 * #{$spacing});
  margin: $spacing;
  padding: $spacing;
  overflow-y: auto;
}

.presence-card__content {
  height: 100%;
  width: 100%;
}
</style>
