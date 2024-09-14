import { createApp } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import App from './App.vue';
import List from './components/TheCarList.vue';
import Form from './components/TheCarForm.vue';
import Car from './components/TheCar.vue';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', redirect: '/cars' },
    { path: '/cars', component: List },
    { path: '/cars/:carId', component: Car, props: true }, // props: true - carId будет передаваться в компонент Car в массив props
    { path: '/cars/new', component: Form },
    { path: '/add-car', component: Form },
  ],
});

const app = createApp(App);
app.use(router);
app.mount('#app');
