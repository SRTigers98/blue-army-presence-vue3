<template>
  <footer class="presence-footer">
    <div class="mdc-tab-bar" role="tablist">
      <div class="mdc-tab-scroller">
        <div class="mdc-tab-scroller__scroll-area">
          <div class="mdc-tab-scroller__scroll-content">
            <TabButton path-name="home" icon-name="home" tab-name="home" />
            <TabButton path-name="seasons" icon-name="sports_hockey" tab-name="seasons" />
            <TabButton path-name="members" icon-name="group" tab-name="members" />
            <TabButton path-name="statistics" icon-name="bar_chart" tab-name="statistics" />
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
@use "../../assets/style/presence-ui";

.presence-footer {
  height: presence-ui.$footer-height;
}
</style>
