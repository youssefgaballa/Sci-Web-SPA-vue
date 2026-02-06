import { createRouter, createWebHistory } from 'vue-router';

import HomePage from './HomePage.vue';
import CreatePage from './CreatePage.vue';
import LoginPage from './auth/LoginPage.vue';
import SignInPage from './auth/SignInPage.vue';

const routes = [
  { path: '/', component: HomePage, name: 'Home' },
  { path: '/create', component: CreatePage, name: 'Create' },
  { path: '/login', component: LoginPage, name: 'Login' },
  { path: '/signin', component: SignInPage, name: 'SignIn' },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
