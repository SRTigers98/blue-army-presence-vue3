<template>
  <div class="mdc-chip-set presence-members__container" role="grid" ref="memberSet">
    <div v-for="member in availableMembers" :key="member.id" class="mdc-chip" role="row">
      <div class="mdc-chip__ripple"></div>
      <span role="gridcell">
      <span role="button" tabindex="0" class="mdc-chip__primary-action">
        <span class="mdc-chip__text">{{ member.lastName }}, {{ member.firstName }}</span>
      </span>
    </span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { MDCChipSet } from '@material/chips/chip-set/component';
import { Member } from '../../../types';

export default defineComponent({
  props: {
    modelValue: {
      type: Array
    },
    availableMembers: {
      type: Array as PropType<Member[]>,
      required: true
    }
  },
  mounted() {
    new MDCChipSet(this.$refs.memberSet as Element);
  }
});
</script>

<style lang="scss" scoped>
.presence-members__container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 0;
}
</style>
