<template>
  <section class="mdc-card presence-card">
    <div class="mdc-card__content">
      <slot></slot>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({});
</script>

<style lang="scss" scoped>
@use "~@material/card";

@include card.core-styles;

$spacing: 0.5rem;

.presence-card {
  height: calc(100% - 2 * #{$spacing});
  margin: $spacing;
  padding: $spacing;
  overflow-y: auto;
}
</style>
