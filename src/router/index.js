import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import Bars from '@/components/bars'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      // name: 'index',
      component: Index,
      children:[
      	{
      	 path: '/',
		     name: 'bar',
		     component: Bars
      	}
      ]
    }
  ]
})
