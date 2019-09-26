import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import About from '@/components/about'
import Product from '@/components/product'
import Pro1 from '@/components/pro/pro1'
import Pro2 from '@/components/pro/pro2'
import Search from '@/components/search'
import NotFound from '@/components/NotFound'
const ImportAbc=()=>import('@/components/Abc')


Vue.use(Router)

export default new Router({
  	routes: [
	    {
	      	path: '/',
	      	name: 'HelloWorld',
	      	component: HelloWorld,
	      	children:[
	      	 	{
				    path: '/home',
				    name: 'Home',
				    component: Home
			    },
	      		{
				    path: '/about',
				    name: 'About',
				    component: About,
				    children:[
			      	{
				      	path: '/Abc',
				      	name: 'Abc',
				      	component: ImportAbc
			    	}
			      ]
			    },
			    {
			    	path:'/product',
			    	name:'product',
			    	component:Product,
			    	children:[
			    		{
			    			path:'/product/pro1',
					    	name:'pro1',
					    	component:Pro1
			    		},
			    		{
			    			path:'/product/pro2',
					    	name:'pro2',
					    	component:Pro2
			    		}
			    	]
			    }
	    	],
	    	redirect:'/home'
	    },
	    {
			path: '/search',
			name: 'Search',
			component: Search
		},
		{
			path:'*',
			name:'NotFound',
			component:NotFound
		}
  	]
})
