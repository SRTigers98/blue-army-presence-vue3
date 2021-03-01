import { NavigationGuardNext, RouteLocationNormalized } from 'vue-router';
import { useFirebase } from '../firebase';

function beforeEach(to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) {
  const firebase = useFirebase();

  if (to.name !== 'login' && !firebase.auth().currentUser) {
    next({ name: 'login' });
  } else {
    next();
  }
}

export const useRouteProtection = () => ({
  beforeEach
});
