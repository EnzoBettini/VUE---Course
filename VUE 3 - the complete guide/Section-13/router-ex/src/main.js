import { createApp } from 'vue';
import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router';
import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';

import App from './App.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        // { path: '/', redirect: '/teams' },
        { path: '/teams', component: TeamsList, alias: '/' },
        { path: '/users', component: UsersList },
        { path: '/teams/:teamId', component: TeamMembers, props: true },
        { path: '/:notFound(.*)', redirect: '/'}
    ]
});

const app = createApp(App)

app.use(router);

app.mount('#app');
