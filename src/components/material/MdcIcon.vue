<template>
  <span class="material-icons">{{ iconName }}</span>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    iconName: {
      type: String,
      required: true
    }
  }
});
</script>
