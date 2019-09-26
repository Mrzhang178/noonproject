<template>
	<div class="goods">
		<div v-for='n in bs' class="bo1">
			<img :src="n.imgs" alt="" class="img1">
			<h4>{{n.pname}}</h4>
			<p>{{n.desc}}</p>
			<b>&yen;{{n.price}}</b>
			<div>
				<input type="button" value="购买">
			</div>
		</div>
		<div v-for='m in bss' class="bo1 bo2"></div>
	</div>
</template>

<script>
	export default{
		props:['bs'],
		computed:{
			bss(){
				return 4-this.bs.length%4;
			}
		},
		data(){
			return{
				
			}
		}
	}
</script>

<style>
	.goods{
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
	}
	.bo1{
		width: 200px;
		height: 300px;
		border: 1px dashed green;
	}
	.bo2{
		visibility: hidden;
	}
	.img1{
		width: 150px;
		height: 100px;
		border: 1px solid red;
	}
</style>