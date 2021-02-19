<template>
  <router-link :to="{name: pathName}" class="mdc-tab mdc-tab--stacked" :class="{'mdc-tab--active': isCurrentTab}"
               role="tab" :aria-selected="isCurrentTab">
    <span class="mdc-tab__content">
      <span class="mdc-tab__icon material-icons" aria-hidden="true">{{ iconName }}</span>
      <span class="mdc-tab__text-label">{{ pathName }}</span>
    </span>
    <span class="mdc-tab-indicator" :class="{'mdc-tab-indicator--active': isCurrentTab}">
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
    },
    tabName: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const route = useRoute();

    const isCurrentTab = computed<boolean>(() => !!route.meta[props.tabName]);

    return {
      isCurrentTab
    };
  }
});
</script>
