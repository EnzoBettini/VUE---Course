import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.min.vue'
import ProfileView from '../views/ProfileView.min.vue'
import LoginView from '../views/LoginView.min.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path: '/', component: HomeView},
    {path: '/profile', component: ProfileView},
    {path: '/login', component: LoginView},
  ],
})

export default router
