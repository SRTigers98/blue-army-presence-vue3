<template>
  <router-link :to="{name: pathName}" class="mdc-tab mdc-tab--stacked" :class="{'mdc-tab--active': isCurrentPath}"
               role="tab" :aria-selected="isCurrentPath">
    <span class="mdc-tab__content">
      <span class="mdc-tab__icon material-icons" aria-hidden="true">{{ iconName }}</span>
      <span class="mdc-tab__text-label">{{ pathName }}</span>
    </span>
    <span class="mdc-tab-indicator" :class="{'mdc-tab-indicator--active': isCurrentPath}">
      <span class="mdc-tab-indicator__content mdc-tab-indicator__content--underline"></span>
    </span>
    <span class="mdc-tab__ripple"></span>
  </router-link>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useRoute } from 'vue-router';

export default defineComponent({
  props: {
    iconName: {
      type: String,
      required: true
    },
    pathName: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const isCurrentPath = computed<boolean>(() => !!useRoute().matched.find(r => r.name === props.pathName));

    return {
      isCurrentPath
    };
  }
});
</script>

<style lang="scss" scoped>
@use "~@material/tab-indicator/mdc-tab-indicator";
@use "~@material/tab/mdc-tab";
</style>
