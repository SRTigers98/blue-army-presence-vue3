<template>
  <MdcCard>
    <section class="presence-container--flex">
      <h1>Member Edit</h1>
      <ul>
        <li>First Name: {{ member.firstName }}</li>
        <li>Last Name: {{ member.lastName }}</li>
        <li>Status: {{ member.active ? 'active' : 'passive' }}</li>
      </ul>
    </section>
  </MdcCard>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';
import { MdcCard } from '../../components';
import { Member } from '../../types';

export default defineComponent({
  components: {
    MdcCard
  },
  setup() {
    const route = useRoute();

    const member = computed(() => {
      const members = useStore().getters['member/members'] as Member[];
      return members.find(m => m.id === route.params.memberId) as Member;
    });

    return {
      member
    };
  }
});
</script>

<style lang="scss" scoped>
@use "../../assets/style/presence-container";
</style>
