import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { useFirebase } from './firebase';

const app = createApp(App);

app.use(store);
app.use(router);

useFirebase();

router.isReady()
  .then(() => app.mount('#app'));
