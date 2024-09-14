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
    {
      path: '/cars',
      component: List,
      children: [
        { path: ':carId', component: Car, props: true }, // props: true - carId будет передаваться в компонент Car в массив props
        { path: 'new', component: Form },
      ],
    },
    { path: '/add-car', component: Form },
    // undefined routes
    { path: '/:notFound(.*)', /*component: NotFoundPage */ redirect: '/cars' },
  ],
});

const app = createApp(App);
app.use(router);
app.mount('#app');
