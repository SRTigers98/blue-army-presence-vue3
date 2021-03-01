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
import { useStore } from 'vuex';
import { useFirebase } from './firebase';
import { TheFooter, TheHeader } from './components';

export default defineComponent({
  components: {
    TheHeader,
    TheFooter
  },
  setup() {
    const store = useStore();
    const firebase = useFirebase();

    // Initialize Member Store
    store.dispatch('member/initMembers');

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

body {
  font-family: Roboto, sans-serif;
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
  overflow-x: hidden;
  overflow-y: auto;
  background-color: lightgray;
}
</style>
