<template>
  <router-link v-if="isLink" class="mdc-fab presence-fab" :class="{'mdc-fab--extended': !!label}"
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
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    iconName: {
      type: String,
      required: true
    },
    label: {
      type: String
    },
    isLink: {
      type: Boolean,
      default: false
    }
  }
});
</script>

<style lang="scss" scoped>
.presence-fab {
  margin: 1rem;
}
</style>
