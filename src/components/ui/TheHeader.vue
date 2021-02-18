<template>
  <header class="mdc-top-app-bar presence-header">
    <div class="mdc-top-app-bar__row">
      <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
        <TheHeaderLogo />
        <span class="mdc-top-app-bar__title">Blue Army Presence</span>
      </section>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TheHeaderLogo from './TheHeaderLogo.vue';

export default defineComponent({
  components: {
    TheHeaderLogo
  }
});
</script>

<style lang="scss" scoped>
@use "~@material/top-app-bar/mdc-top-app-bar";

.presence-header {
  position: sticky;
}
</style>
