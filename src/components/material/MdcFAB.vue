<template>
  <router-link v-if="!!link" :to="link" class="mdc-fab presence-fab" :class="{'mdc-fab--extended': !!label}"
               :aria-label="iconName">
    <div class="mdc-fab__ripple"></div>
    <span class="mdc-fab__icon material-icons">{{ iconName }}</span>
    <span v-if="!!label" class="mdc-fab__label">{{ label }}</span>
  </router-link>
  <button v-else class="mdc-fab presence-fab" :class="{'mdc-fab--extended': !!label}"
          :aria-label="iconName">
    <div class="mdc-fab__ripple"></div>
    <span class="mdc-fab__icon material-icons">{{ iconName }}</span>
    <span v-if="!!label" class="mdc-fab__label">{{ label }}</span>
  </button>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { LocationAsRelativeRaw } from 'vue-router';

export default defineComponent({
  props: {
    iconName: {
      type: String,
      required: true
    },
    label: {
      type: String
    },
    link: {
      type: Object as PropType<LocationAsRelativeRaw>
    }
  }
});
</script>

<style lang="scss" scoped>
.presence-fab {
  margin: 0.5rem;
}
</style>
