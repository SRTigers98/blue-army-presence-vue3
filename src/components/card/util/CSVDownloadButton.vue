<template>
  <MdcButton mode="csv" :href="csvDownload" :download="csvDownloadName">
    <MdcIcon icon-name="file_download" />
  </MdcButton>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue';
import { MdcButton, MdcIcon } from '@/components/material'
import { Season } from '@/types';

export default defineComponent({
  components: {
    MdcIcon,
    MdcButton
  },
  props: {
    season: {
      type: Object as PropType<Season>,
      required: true
    }
  },
  setup(props) {
    const csvDownload = computed(() => {
      const csvData = props.season.games
          .flatMap(game => game.presentMembers.map(member => ({
            opponent: game.opponent,
            home: game.home,
            mode: game.mode,
            date: game.date.toJSON().substring(0, 10),
            presentMembers: member
          })))
          .map(entry => Object.values(entry)
              .map(val => val.toString())
              .join(','))
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
