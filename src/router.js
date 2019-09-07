import Vue from 'vue'
import Router from 'vue-router'
import Cards from './components/Cards'
import MyCollection from './components/MyCollection'
import Wishlist from './components/Wishlist'


Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'cards',
            component: Cards
        },
        {
            path: '/mycollection',
            name: 'myCollection',
            component: MyCollection
        },
        {
            path: '/wishlist',
            name: 'wishlist',
            component: Wishlist
        },
    ]
})