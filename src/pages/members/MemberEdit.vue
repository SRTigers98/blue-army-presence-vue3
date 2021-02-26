<template>
  <MdcCard>
    <MemberEditForm :first-name="member.firstName"
                    :last-name="member.lastName"
                    :active="member.active"
                    @member-edit="editMember" />
  </MdcCard>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';
import { MdcCard, MemberEditForm } from '../../components';
import { Member } from '../../types';

export default defineComponent({
  components: {
    MdcCard,
    MemberEditForm
  },
  setup() {
    const route = useRoute();

    const member = computed(() => {
      const members = useStore().getters['member/members'] as Member[];
      return members.find(m => m.id === route.params.memberId) as Member;
    });

    const editMember = (editedMember: { firstName: string; lastName: string; active: boolean }) => {
      console.info(editedMember);
    };

    return {
      member,
      editMember
    };
  }
});
</script>
