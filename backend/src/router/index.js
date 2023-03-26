import {createRouter, createWebHistory} from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import Login from "../views/Login.vue";
import RequestPassword from "../views/RequestPassword.vue";
import ResetPassword from "../views/ResetPassword.vue";
import GuestLayout from "../components/GuestLayout.vue";
import AppLayout from "../components/AppLayout.vue";
import Products from "../views/Products/Products.vue";
import store from "../store";
import Orders from "../views/Orders/Orders.vue";
import Customers from "../views/Customers/Customers.vue";
import Users from "../views/Users/Users.vue";
import Reports from "../views/Reports/Reports.vue";
import NotFound from "../views/NotFound.vue";
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
            ,
            {
                path : "customers",
                name : "app.customers",
                component : Customers

            },
            {
                path : "orders",
                name : "app.orders",
                component : Orders

            },
            {
                path : "users",
                name : "app.users",
                component : Users

            },
            {
                path : "reports",
                name : "app.reports",
                component : Reports

            }
        ]
    },
    {
        path : '/',
        name : 'guestLayout',
        component  : GuestLayout,
        meta :{
            requiresGuest : true,
        },
    },
    {
        path : '/dashboard',
        name : 'dashboard',
        component  : Dashboard,
        meta :{
            requiresGuest : true,
        },
    },
    {
        path: '/request-password',
        name: 'request_password',
        component: RequestPassword,
        meta :{
            requiresGuest : true,
        },
    },
    {
        path: '/reset-password',
        name: 'reset_password',
        component: ResetPassword,
        meta :{
            requiresGuest : true,
        },
    },
    {
        path : '/login',
        name : 'login',
        component  : Login,
        meta :{
            requiresGuest : true,
        },
    },
    {
        path: "/:pathMatch(.*)",
        name: "notfound",
        component: NotFound
    }
];
const router = createRouter({
    history : createWebHistory(),
    routes
})


router.beforeEach((to , from   , next )=>{
    if(to.meta.requiresAuth && !store.state.user.token){
        next({name : "login"});
    }
    else if (to.meta.requiresGuest && store.state.user.token){
        next({name  : "app.dashboard"})
    }else {
        next()
    }
})
export default router;
