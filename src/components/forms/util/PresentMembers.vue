<template>
  <div class="mdc-chip-set presence-members__container" role="grid" ref="memberSet">
    <div v-for="member in availableMembers" :key="member.id" role="row"
         class="mdc-chip" :class="{'active': containsMember(member.id)}">
      <div class="mdc-chip__ripple"></div>
      <span role="gridcell">
      <span role="button" tabindex="0" class="mdc-chip__primary-action" @click="toggleMember(member.id)">
        <span class="mdc-chip__text">{{ member.lastName }}, {{ member.firstName }}</span>
      </span>
    </span>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue';
import { MDCChipSet } from '@material/chips/chip-set/component';
import { Member } from '../../../types';

export default defineComponent({
  props: {
    modelValue: {
      type: Array as PropType<string[]>
    },
    availableMembers: {
      type: Array as PropType<Member[]>,
      required: true
    }
  },
  setup(props, context) {
    const presentMembers = computed<string[]>(() => props.modelValue || []);

    const containsMember = (memberId: string): boolean => presentMembers.value.includes(memberId);
    const toggleMember = (memberId: string) => {
      const present = [...presentMembers.value];
      const entryIdx = present.findIndex(id => id === memberId);
      if (~entryIdx) {
        present.splice(entryIdx, 1);
      } else {
        present.push(memberId);
      }
      context.emit('update:modelValue', present);
    };

    return {
      containsMember,
      toggleMember
    };
  },
  mounted() {
    new MDCChipSet(this.$refs.memberSet as Element);
  }
});
</script>

<style lang="scss" scoped>
@use "../../../assets/style/presence-color";

.presence-members__container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 0;
}

.mdc-chip {
  transition: all 0.5s ease-out;
}

.mdc-chip.active {
  background-color: presence-color.$primary;
  color: presence-color.$on-primary;
}
</style>
