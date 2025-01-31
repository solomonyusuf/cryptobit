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
      name: 'List',
      component: ListView,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
  ],
});

createApp(App).use(router).mount('#app')
