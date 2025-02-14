import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router';
import Login from './components/pages/Login.vue';
import ListView from './components/pages/ListView.vue';
import ChartView from './components/pages/ChartView.vue';
import Experiment from './components/pages/Experiment.vue';
import Experiment2 from './components/pages/Experiment2.vue';
import TableList from './components/pages/TableList.vue';

const router = createRouter({
  history: createWebHashHistory(), // Use hash mode
  routes: [
    { path: '/list', name: 'List', component: ListView },
    { path: '/chart', name: 'Pair', component: ChartView },
    { path: '/login', name: 'Login', component: Login },
    { path: '/table2', name: 'Experiment', component: Experiment },
    { path: '/table3', name: 'Experiment2', component: Experiment2 },
    { path: '/', name: 'Table4', component: TableList },
  ],
});


createApp(App).use(router).mount('#app')
