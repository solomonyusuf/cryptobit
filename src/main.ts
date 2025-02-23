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
import Transactions from './components/pages/Transactions.vue';
import StakeDetails from './components/pages/StakeDetails.vue';
import SupplyDetail from './components/pages/SupplyDetail.vue';
import Navmenu from './components/pages/Navmenu.vue';
import BorrowDetail from './components/pages/BorrowDetail.vue';

const router = createRouter({
  history: createWebHashHistory(), // Use hash mode
  routes: [
    { path: '/', name: 'Table4', component: TableList },
    { path: '/nav-menu', name: 'Nav', component: Navmenu },
    { path: '/supply-detail', name: 'SupplyDetail', component: SupplyDetail },
    { path: '/borrow-detail', name: 'BorrowDetail', component: BorrowDetail },
    { path: '/stake-detail', name: 'StakeDetails', component: StakeDetails },
    { path: '/list', name: 'Experiment', component: Experiment },
    { path: '/chart', name: 'Pair', component: ChartView },
    { path: '/login', name: 'Login', component: Login },
    { path: '/governance', name: 'Governance', component: Governance },
    { path: '/dashboard', name: 'Dashboard', component: Dashboard },
    { path: '/stake', name: 'stake', component: Stake },
    { path: '/transactions', name: 'transactions', component: Transactions },
  ],
});


createApp(App).use(router).mount('#app')
