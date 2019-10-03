import Vue from "vue";
import Router from "vue-router";
import Login from "./components/user/auth/Login.vue";
import Register from "./components/user/auth/Login.vue";
import Homepage from "./components/user/homepage/BusinessClearance.vue";

Vue.use(Router);

export default new Router({
    routes: [{
            path: "/",
            redirect: {
                name: "login"
            }
        },
        {
            path: "/login",
            name: "login",
            component: Homepage
        }, {
            path: "/register",
            name: "register",
            component: Register
        },
        {
            path: "/home",
            name: "home",
            component: Homepage
        },
        
    ]
});