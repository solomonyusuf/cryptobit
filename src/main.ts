import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router';
import Login from './components/pages/Login.vue';
import ListView from './components/pages/ListView.vue';
import ChartView from './components/pages/ChartView.vue';
import Experiment from './components/pages/Experiment.vue';
import Experiment2 from './components/pages/Experiment2.vue';
import TableList from './components/pages/TableList.vue';
import Dashboard from './components/pages/Dashboard.vue';
import Governance from './components/pages/Governance.vue';
import Stake from './components/pages/Stake.vue';

const router = createRouter({
  history: createWebHashHistory(), // Use hash mode
  routes: [
    { path: '/', name: 'Table4', component: TableList },
    //{ path: '/list', name: 'List', component: ListView },
    { path: '/chart', name: 'Pair', component: ChartView },
    { path: '/login', name: 'Login', component: Login },
    { path: '/governance', name: 'Governance', component: Governance },
    { path: '/dashboard', name: 'Dashboard', component: Dashboard },
    { path: '/stake', name: 'stake', component: Stake },
    { path: '/transactions', name: 'transactions', component: Dashboard },
  ],
});


createApp(App).use(router).mount('#app')
