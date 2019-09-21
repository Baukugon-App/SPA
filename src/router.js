import Vue from 'vue';
import Router from 'vue-router';
import Cards from './views/Cards';
import Home from './views/Home';
import About from './views/About';
import Ping from './components/Ping';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/cards',
            name: 'cards',
            component: Cards
        },
        {
            path: '/about',
            name: 'about',
            component: About
        },
        {
            path: '/ping',
            name: 'Ping',
            component: Ping,
        },
    ]
})