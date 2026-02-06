import { createApp } from 'vue';
import App from './App.vue';
import './global.css';
import { router } from './pages/routes';
import PrimeVue from 'primevue/config';
import Material from '@primeuix/themes/material';

const app = createApp(App);
app.use(router);
//app.use(PrimeVue, { unstyled: true })
app.use(PrimeVue, {
  theme: {
    preset: Material,
    options: { prefix: 'p', darkModeSelector: '.p-dark', cssLayer: false },
  },
});
app.mount('#app');
