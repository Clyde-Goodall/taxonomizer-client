import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import InGameView from '../views/InGameView.vue'; // why teh fuck is this erring out, it literally works

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: InGameView,
    },
    {
      path: '/user',
      name: 'user',
      component: InGameView,
    },
    {
      path: '/game',
      name: 'game',
      component: InGameView,
    },
  ],
})

export default router
