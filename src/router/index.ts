import { createRouter, createWebHistory } from 'vue-router';
import routes from './routes';
import { useRouteProtection } from './routeProtection';

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

const routeProtection = useRouteProtection();
router.beforeEach(routeProtection.beforeEach);

export default router;
