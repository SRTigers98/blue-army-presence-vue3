<template>
  <MdcCard>
    <section class="presence-container--flex">
      <h2>Login</h2>
      <LoginForm @login="login" />
      <span v-if="authError" class="presence-login__error">
        <span><b>Authentication failed!</b></span>
        <br>
        <span>Please check e-mail and/or password.</span>
      </span>
    </section>
  </MdcCard>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useFirebase } from '../firebase';
import { LoginForm, MdcCard } from '../components';

export default defineComponent({
  components: {
    MdcCard,
    LoginForm
  },
  setup() {
    const router = useRouter();
    const firebase = useFirebase();

    const authError = ref<boolean>(false);

    const login = (loginData: { email: string; password: string }) => {
      firebase.auth().signInWithEmailAndPassword(loginData.email, loginData.password)
          .then(() => {
            router.replace({ name: 'home' });
          })
          .catch(() => authError.value = true);
    };

    return {
      login,
      authError
    };
  }
});
</script>

<style lang="scss" scoped>
@use "../assets/style/presence-container";
@use "../assets/style/presence-color";

.presence-login__error {
  background-color: presence-color.$error;
  color: presence-color.$on-error;
  border-radius: 1rem;
  padding: 1rem;
  line-height: 1.5;
}
</style>
