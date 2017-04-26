import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
//import route from './router/index.js'//这里是为了引进hello.vue页面但是有了下面的内容 就不能引进来了 有这句就行了const router = new VueRouter({routes})
import VueResource from 'vue-resource'
import goods from './components/goods/goods.vue'
import seller from './components/seller/seller.vue'

Vue.use(VueRouter)
Vue.use(VueResource)

// const Foo = { template: '<div>这个是在main.js里面创建的div内容《商家》</div>' }
// const Bar = { template: '<div>商品</div>' }

// const routes = [
//   { path: '/user/foo', component: Foo },
//   { path: '/user/bar', component: Bar }
// ]//这个是路由的开始
// const router = new VueRouter({
//   routes
// })
// const User = {
// 	template: '<div>{{$route.params.id}}</div>'
// }

const router = new VueRouter({
	routes: [
	{ path: '/goods', component: goods },
    { path: '/seller', component: seller }
	],//这个是动态路由匹配
	linkActiveClass: 'active'
})

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
router.push('/goods');//默认显示指定的v-bind:to="'/goods'"

// const router = new VueRouter({
// 	routes: [{//这个是嵌套路由的使用
// 		path: '/', 
// 		  component: goods, 
// 		  children: [{
// 		  	path: '/goods', 
// 		  	component: goods
// 		  },
// 		  {
// 		  	path: '/seller',
// 		  	component: seller
// 		  }]
// 		  }],
// 	  'linkActiveClass': 'active'
// })

// new Vue({
//   el: '#app',
//   router,
//   template: '<App/>',
//   components: { App }
// }).$mount('#app')
//const app = new Vue({ router }).$mount('#app')