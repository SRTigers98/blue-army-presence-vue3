<template>
  <form class="presence-container--flex presence-login__form" @submit.prevent="onLogin">
    <section class="presence-form__item">
      <MdcTextField v-model="email" label="E-Mail" required />
    </section>
    <section class="presence-form__item">
      <MdcTextField v-model="password" label="Password" password required />
    </section>
    <section class="presence-form__item">
      <MdcButton>Login</MdcButton>
    </section>
  </form>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { MdcButton, MdcTextField } from '../material';

export default defineComponent({
  components: {
    MdcTextField,
    MdcButton
  },
  setup(_, context) {
    const email = ref<string>('');
    const password = ref<string>('');

    const onLogin = () => context.emit('login', {
      email: email.value,
      password: password.value
    });

    return {
      email,
      password,
      onLogin
    }
  }
});
</script>

<style lang="scss" scoped>
@use "../../assets/style/presence-container";
@use "../../assets/style/presence-form";

.presence-login__form {
  width: 100%;
}
</style>
