import { NavigationGuardNext, RouteLocationNormalized } from 'vue-router';
import { useFirebase } from '../firebase';

function beforeEach(to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) {
  const firebase = useFirebase();
  const isLoginPage = to.name === 'login';
  const isUserLoggedIn = !!firebase.auth().currentUser;

  if (!isLoginPage && !isUserLoggedIn) {
    next({ name: 'login' });
  } else if (isLoginPage && isUserLoggedIn) {
    next({ name: 'home' });
  } else {
    next();
  }
}

export const useRouteProtection = () => ({
  beforeEach
});
