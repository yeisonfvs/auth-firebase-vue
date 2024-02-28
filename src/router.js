import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';
import Login from './views/Login.vue';
import Register from './views/Register.vue';
import { useUserStore } from './stores/user';

const requireAuth = async (to, from, next) => {
  const userStore = useUserStore();
  const user = await userStore.currentUser();
  if (user) {
    next('/');
  } else {
    next('/login');
  }
};

const routes = [
  { path: '/', component: Home, beforeEnter: requireAuth },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
];

const history = createWebHistory();

const router = createRouter({
  history,
  routes,
});

export default router;
