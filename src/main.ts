import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { useFirebase } from './firebase';

const app = createApp(App);

app.use(store);
app.use(router);

const firebase = useFirebase();

let appInitialized = false;
router.isReady()
  .then(() => {
    firebase.auth().onAuthStateChanged(() => {
      if (!appInitialized) {
        appInitialized = true;
        app.mount('#app');
      }
    })
  });
