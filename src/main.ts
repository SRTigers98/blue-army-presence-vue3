import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { useFirebase } from './firebase';

const firebase = useFirebase();

let appInitialized = false;
firebase.auth().onAuthStateChanged(() => {
  if (!appInitialized) {
    const app = createApp(App);

    app.use(store);
    app.use(router);

    router.isReady()
      .then(() => app.mount('#app'));

    appInitialized = true;
  }
});
