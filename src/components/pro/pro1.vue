<template>
	<div class="box1">
		<h4>商品列表</h4>
		<div>
			<goods :bs='products'></goods>
		</div>
	</div>
</template>
<script>
	import Goods from '@/components/pro/goods'
	export default{
		data(){
			return{
				products:[
					{
						id:'001',
						imgs:'/static/images/1.jpg',
						pname:'商品一',
						desc:'这是商品一',
						price:4554521
					},
					{
						id:'002',
						imgs:'/static/images/2.jpg',
						pname:'商品二',
						desc:'这是商品二',
						price:214
					},
					{
						id:'003',
						imgs:'/static/images/3.jpg',
						pname:'商品三',
						desc:'这是商品三',
						price:4545
					},
					{
						id:'004',
						imgs:'/static/images/4.jpg',
						pname:'商品四',
						desc:'这是商品四',
						price:45458
					},
					{
						id:'005',
						imgs:'/static/images/6.jpg',
						pname:'商品五',
						desc:'这是商品五',
						price:4587871
					}
				],
			}

		},
		components:{
			Goods
		}
	}
</script>

<style>

</style>