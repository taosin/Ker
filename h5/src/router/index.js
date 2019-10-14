import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);


const routes = [{
    name: 'home',
    path: '/',
    redirect: '/dashboard'
}, {
    name: 'dashboard',
    path: '/dashboard',
    component: () => import('@/views/index.vue')
}]

const routers = new Router({
    routes
});

// routers.beforeEach((to, from, next) => {
//     next()
// })

// routers.afterEach(to => {

// })
export default routers;
