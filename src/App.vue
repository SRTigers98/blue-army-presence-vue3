<template>
  <TheHeader />
  <main>
    <router-view v-slot="{Component}">
      <transition name="page-slide" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </main>
  <TheFooter v-if="isAuthenticated" />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useFirebase } from './firebase';
import { TheFooter, TheHeader } from './components';

export default defineComponent({
  components: {
    TheHeader,
    TheFooter
  },
  setup() {
    const firebase = useFirebase();

    const isAuthenticated = ref<boolean>(!!firebase.auth().currentUser);
    firebase.auth().onAuthStateChanged(user => isAuthenticated.value = !!user);

    return {
      isAuthenticated
    };
  }
});
</script>

<style lang="scss">
@use "assets/style/material";
@use "assets/style/presence-route-animation";

@import url("https://fonts.googleapis.com/icon?family=Material+Icons");

html, body, #app {
  height: 100%;
  width: 100%;
}

body {
  font-family: Roboto, sans-serif;
  margin: 0;
}

#app {
  display: flex;
  flex-direction: column;
}

#app > main {
  flex-grow: 1;
  overflow-x: hidden;
  overflow-y: auto;
  background-color: lightgray;
}
</style>
