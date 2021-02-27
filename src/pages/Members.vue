<template>
  <section class="presence-container--flex">
    <MemberCard v-for="member in members" :key="member.id"
                :member="member" @delete-member="deleteMember" />
    <MdcFAB icon-name="add" label="New Member" :link="{name: 'member:new'}" />
  </section>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useStore } from 'vuex';
import { MdcFAB, MemberCard } from '../components';
import { Member } from '../types';

export default defineComponent({
  components: {
    MemberCard,
    MdcFAB
  },
  setup() {
    const store = useStore();

    const members = computed(() => store.getters['member/members'] as Member[]);

    const deleteMember = (member: Member) => {
      if (confirm(`Delete user "${member.lastName}, ${member.firstName}"?`)) {
        store.dispatch('member/deleteMember', member.id);
      }
    };

    return {
      members,
      deleteMember
    };
  }
});
</script>

<style lang="scss" scoped>
@use "../assets/style/presence-container";
</style>
