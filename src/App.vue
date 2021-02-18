<template>
  <TheHeader />
  <main>
    <router-view />
  </main>
  <TheFooter />
</template>

<script lang="ts">
import { TheFooter, TheHeader } from './components';

export default {
  components: {
    TheHeader,
    TheFooter
  }
}
</script>

<style>
@import url("https://fonts.googleapis.com/icon?family=Material+Icons");
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;700&display=swap');

body {
  font-family: Ubuntu, sans-serif;
  margin: 0;
  height: 100vh;
}

#app {
  height: 100%;
  display: flex;
  flex-direction: column;
}

#app > main {
  flex-grow: 1;
  overflow-y: auto;
}
</style>
