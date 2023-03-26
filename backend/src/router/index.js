import {createRouter, createWebHistory} from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import Login from "../views/Login.vue";
import RequestPassword from "../views/RequestPassword.vue";
import ResetPassword from "../views/ResetPassword.vue";
import GuestLayout from "../components/GuestLayout.vue";
import AppLayout from "../components/AppLayout.vue";
import Products from "../views/Products.vue";
import store from "../store";
const routes = [
    {
        path : "/app",
        name: 'app',
        component: AppLayout,
        meta :{
            requiresAuth : true,
        },
        children : [
            {
                path : "dashboard",
                name : "app.dashboard",
                component : Dashboard

            },
            {
                path : "products",
                name : "app.products",
                component : Products

            }
        ]
    },
    {
        path : '/',
        name : 'guestLayout',
        component  : GuestLayout
    },
    {
        path : '/dashboard',
        name : 'dashboard',
        component  : Dashboard
    },
    {
        path: '/request-password',
        name: 'request_password',
        component: RequestPassword
    },
    {
        path: '/reset-password',
        name: 'reset_password',
        component: ResetPassword
    },
    {
        path : '/login',
        name : 'login',
        component  : Login
    },
];
const router = createRouter({
    history : createWebHistory(),
    routes
})


router.beforeEach((to , from   , next )=>{
    if(to.meta.requiresAuth && !store.state.user.token){
        next({name : "login"});
    }
    else if (!to.meta.requiresAuth && store.state.user.token){
        next({name  : "app.dashboard"})
    }else {
        next()
    }
})
export default router;
