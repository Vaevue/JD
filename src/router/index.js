import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component : resolve => require(['../views/index'],resolve),
    redirect :'/home',
    children : [
      {
        path:'home',
        component : resolve => require(['../views/home'],resolve) 
      },
      {
        path : 'me',
        component : resolve => require(['../views/me'],resolve)
      }
    ]
  },
  {
    path : '/puy',
    component : resolve => require(['../views/puy'],resolve)
  },
  {
    path : '/search',
    component : resolve => require(['../views/search'],resolve),
  },
  {
    path : '/search/:name',
    component : resolve => require(['../components/search/searchInfo'],resolve)
  },
  {
    path :'/category',
    component : resolve => require(['../views/category'],resolve)
  },
  {
    path :'/cart',
    component : resolve => require(['../views/cart'],resolve)
  },
  {
    path :'/iteminfo/:id',
    component : resolve => require(['../views/iteminfo'],resolve)
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
