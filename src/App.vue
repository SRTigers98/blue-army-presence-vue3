<template>
  <TheHeader />
  <main>
    <router-view />
  </main>
</template>

<script lang="ts">
import { TheHeader } from './components';

export default {
  components: {
    TheHeader
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;700&display=swap');

body {
  font-family: Ubuntu, sans-serif;
  margin: 0;
}
</style>
