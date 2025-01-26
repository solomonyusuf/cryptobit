import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router';
import Login from './components/pages/Login.vue';
import ListView from './components/pages/ListView.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login,
    },
    {
      path: '/list',
      name: 'List',
      component: ListView,
    },
  ],
});

createApp(App).use(router).mount('#app')
