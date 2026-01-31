import { createRouter, createWebHistory } from 'vue-router'

import Home from './Home.vue'
import Workspace from './Workspace.vue'

const routes = [
  { path: '/', component: Home, name: 'Home' },
  { path: '/workspace', component: Workspace, name: 'Workspace' },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
