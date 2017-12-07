// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import router from './router'
import VueRouter from 'vue-router'
import Layout from './components/layout'
import IndexPage from './pages/index'
import VueResource from 'vue-resource'
import DetailPage from './pages/detail'
import DetailOwPage from './pages/detail/ow'
import DetailHrPage from './pages/detail/hr'
import DetailLolPage from './pages/detail/lol'
import DetailSgsPage from './pages/detail/sgs'
import OrderListPage from './pages/orderList'


Vue.use(VueRouter)
Vue.use(VueResource) //引入VueResource
var bus = new Vue();
let router = new VueRouter({
  mode: 'history',
  routes: [
  {
    path: '/',
    component: IndexPage,
  },
   {
    path: '/orderlist',
    component: OrderListPage,
  },
  {
    path:'/detail',
    redirect: '/detail/ow', //当用户访问/detail路由时，直接访问 /detail/analysis 路由
    component: DetailPage,
    children: [
      {
        path: 'ow',
        component:DetailOwPage
      },
      {
        path: 'hr',
        component:DetailHrPage
      },
      {
        path: 'lol',
        component:DetailLolPage
      },
      {
        path: 'sgs',
        component:DetailSgsPage
      },
    ]
  },
  ]
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<Layout/>',
  //layout一般作为根节点组件
  components: { Layout }
})
