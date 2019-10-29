import Vue from "vue";
import Router from "vue-router";
import Home1 from "./components/user/homepage/Home1.vue";
import About from "./components/user/homepage/About.vue";

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: "/home",
            component: Home1
        },
        {
            path: "/about",
            component: About
        }
    ]
});