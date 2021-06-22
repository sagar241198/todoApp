import { createRouter, createWebHashHistory } from 'vue-router'
import Todo from '../components/Todo.vue';
import EmplyeeData from '../components/EmplyeeData.vue';

const routes = [  
    {
      path: "/",
      component:Todo
    },
    {
        path: "/employee",
        component:EmplyeeData
    }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
