// import Vue from 'vue'
import VueRouter from 'vue-router';
import Todo from './components/Todo.vue';
import EmplyeeData from './components/EmplyeeData.vue';



// import VueRouter from 'vue-router'

// Vue.use(VueRouter)



const routes = [
    {
        // name: "Todo",
        path: "/",
        component:Todo
    },

    {
        // name: "Employee",
        path: "/employee",
        component:EmplyeeData
    }

]

const router = new VueRouter({
    routes // short for `routes: routes`
  })

// const router =new createRouter({
//    history : createWebHistory(),
//     routes,
//     base: 'configure-admin',
//     linkActiveClass: 'active'
// });

// console.log(router)
export default router;