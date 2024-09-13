import { createApp } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import App from './App.vue';
import List from './components/TheCarList.vue';
import Form from './components/TheCarForm.vue';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', component: List },
    { path: '/add-car', component: Form },
  ],
});

const app = createApp(App);
app.use(router);
app.mount('#app');
