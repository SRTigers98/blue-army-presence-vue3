<template>
  <MdcButton mode="csv" :href="csvDownload" :download="csvDownloadName">
    <MdcIcon icon-name="file_download" />
  </MdcButton>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue';
import { MdcButton, MdcIcon } from '@/components/material'
import { Member, Season } from '@/types';

export default defineComponent({
  components: {
    MdcIcon,
    MdcButton
  },
  props: {
    season: {
      type: Object as PropType<Season>,
      required: true
    },
    members: {
      type: Array as PropType<Member[]>,
      required: true
    }
  },
  setup(props) {
    const csvDownload = computed(() => {
      const gamesData = props.season.games
          .flatMap(game => game.presentMembers.map(memberId => {
            const presentMember = props.members.find(m => m.id === memberId);
            return {
              opponent: game.opponent,
              home: game.home,
              mode: game.mode,
              date: game.date.toJSON().substring(0, 10),
              presentMember: presentMember
                  ? `${presentMember.lastName} ${presentMember.firstName}`
                  : memberId
            };
          }))
          .map(entry => Object.values(entry)
              .map(val => val.toString())
              .join(','));
      const csvData = ['Opponent,Home,Mode,Date,PresentMember'].concat(gamesData)
          .join('\n');
      return `data:text/csv;charset=utf-8,${csvData}`;
    });
    const csvDownloadName = computed(
        () => `${props.season.name.replaceAll(' ', '_')}.csv`
    );

    return {
      csvDownload,
      csvDownloadName
    };
  }
});
</script>
