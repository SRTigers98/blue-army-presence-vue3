<template>
  <router-link :to="{name: 'home'}" class="presence-header__logo">
    <img src="../../assets/img/logo.png" alt="Blue Army Logo">
  </router-link>
</template>

<style scoped>
.presence-header__logo,
.presence-header__logo > img {
  border-radius: 100%;
  width: 3rem;
  height: 3rem;
}
</style>
