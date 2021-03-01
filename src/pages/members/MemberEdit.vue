<template>
  <MdcCard>
    <MemberEditForm :first-name="member?.firstName || ''"
                    :last-name="member?.lastName || ''"
                    :active="member ? member.active : true"
                    @member-edit="editMember" />
  </MdcCard>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useStore } from 'vuex';
import { useRoute, useRouter } from 'vue-router';
import { MdcCard, MemberEditForm } from '../../components';
import { Member, SaveMemberPayload } from '../../types';

export default defineComponent({
  components: {
    MdcCard,
    MemberEditForm
  },
  setup() {
    const store = useStore();
    const route = useRoute();
    const router = useRouter();

    const member = computed(() => {
      const members = store.getters['member/members'] as Member[];
      return members.find(m => m.id === route.params.memberId) as Member;
    });

    const editMember = (editedMember: { firstName: string; lastName: string; active: boolean }) => {
      const updateData: SaveMemberPayload = {
        id: route.params.memberId as (string | undefined),
        ...editedMember
      }
      store.dispatch('member/saveMember', updateData);
      router.replace({ name: 'members' });
    };

    return {
      member,
      editMember
    };
  }
});
</script>
