<template>
  <TheHeader />
  <main>
    <router-view v-slot="{Component}">
      <transition name="page-slide" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </main>
  <TheFooter />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { TheFooter, TheHeader } from './components';

export default defineComponent({
  components: {
    TheHeader,
    TheFooter
  }
});
</script>

<style>
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

.page-slide-enter-active {
  animation: slide-in 0.3s ease-out;
}

.page-slide-leave-active {
  animation: slide-out 0.3s ease-in;
}

@keyframes slide-in {
  from {
    transform: translateX(50px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes slide-out {
  from {
    transform: translateX(0px);
    opacity: 1;
  }
  to {
    transform: translateX(-50px);
    opacity: 0;
  }
}
</style>
