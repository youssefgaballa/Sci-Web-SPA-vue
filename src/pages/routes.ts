import { createRouter, createWebHistory } from 'vue-router'

import Home from './Home.vue'
import Workspace from './Workspace.vue'
import Login from './auth/Login.vue'
import SignIn from './auth/SignIn.vue'

const routes = [
  { path: '/', component: Home, name: 'Home' },
  { path: '/workspace', component: Workspace, name: 'Workspace' },
  { path: '/login', component: Login, name: 'Login' },
  { path: '/signin', component: SignIn, name: 'SignIn' },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
