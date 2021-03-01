import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { useInitStore } from './store/initStore';
import { useFirebase } from './firebase';

const firebase = useFirebase();
const initStore = useInitStore();

let appInitialized = false;
firebase.auth().onAuthStateChanged(user => {
  if (!appInitialized) {
    const app = createApp(App);

    app.use(store);
    app.use(router);

    router.isReady()
      .then(() => app.mount('#app'));

    appInitialized = true;
  }
  if (user) {
    initStore(store);
  }
});
