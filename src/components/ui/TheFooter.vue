<template>
  <footer>
    <div class="mdc-tab-bar" role="tablist">
      <div class="mdc-tab-scroller">
        <div class="mdc-tab-scroller__scroll-area">
          <div class="mdc-tab-scroller__scroll-content">
            <TabButton path-name="home" icon-name="home" />
            <TabButton path-name="about" icon-name="info" />
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TabButton from './TabButton.vue';

export default defineComponent({
  components: {
    TabButton
  }
});
</script>

<style lang="scss" scoped>
@use "~@material/tab-bar/mdc-tab-bar";
@use "~@material/tab-scroller/mdc-tab-scroller";
</style>
