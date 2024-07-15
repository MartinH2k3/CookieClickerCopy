import { createRouter, createWebHistory } from 'vue-router'

import Shop from "@/views/Shop.vue";
import Main from "@/views/Main.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Main
    },
    {
      path: '/shop',
      name: 'shop',
      component: Shop
    }
  ]
})


export default router
