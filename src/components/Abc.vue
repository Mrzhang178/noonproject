<template>
	<div class="abc">
		<h3>非常完美</h3>
		<div v-for="(i,s) in goods" :key="s" class="boxx">
			<h4>{{i.panme}}</h4>
			<p>{{i.desc}}</p>
			<b>&yen;{{i.price}}</b>
			<input type="button" value="购买" @click="view(i.id)">
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				goods:[
					{
						id:"0001",
						pname:"冰箱",
						desc:"双开门冰箱",
						price:998
					},
					{
						id:"0002",
						pname:"洗衣机",
						desc:"海尔洗衣机",
						price:888
					},
					{
						id:"0003",
						pname:"电视机",
						desc:"液晶电视机",
						price:778
					},
				]
			}
		},
		methods:{
			view(id){
				// this.$router.push({
				// 	name:"Pro2",
				// 	params:{
				// 		id
				// 	}
				// })
				// this.$router.push({
				// 	name:"Pro2",
				// 	query:{
				// 		id
				// 	}
				// })
				this.$router.push({
					path:"/product/pro2",
					query:{
						id
					}
				})
			}
		}
	}
	

</script>

<style>
	.boxx{
		border:2px dashed green;
	}
</style>