<template>
  <header class="mdc-top-app-bar presence-header">
    <div class="mdc-top-app-bar__row">
      <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
        <TheHeaderLogo />
        <span class="mdc-top-app-bar__title">Blue Army Presence</span>
      </section>
      <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-end">
        <MdcIcon icon-name="logout" class="presence-header__logout" @click="logout" />
      </section>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
import { useFirebase } from '../../firebase';
import TheHeaderLogo from './TheHeaderLogo.vue';
import { MdcIcon } from '../material';

export default defineComponent({
  components: {
    TheHeaderLogo,
    MdcIcon
  },
  setup() {
    const router = useRouter();
    const firebase = useFirebase();

    const logout = () => {
      firebase.auth().signOut()
          .then(() => router.replace({ name: 'login' }));
    };

    return {
      logout
    };
  }
});
</script>

<style lang="scss" scoped>
.presence-header {
  position: sticky;
}

.presence-header__logout {
  margin: 0 1rem;
  cursor: pointer;
}
</style>
