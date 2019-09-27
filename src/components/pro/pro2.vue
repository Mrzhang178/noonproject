<template>
	<div class="box2">
		<h4>商品列表</h4>
		{{rec}}
		<input type="button" value="点击获取" @click='getData'>
		<ul>
			<li v-for="(item,i) in ress">{{item.type+item.date}}</li>
		</ul>
	</div>
</template>

<script>
	export default{
		name:'Pro2',
		data(){
			return{
				rec:this.$route.query.id,
				ress:[]
			}
		},
		methods:{
			getData(){
				// this.axios.get('https://www.apiopen.top/weatherApi',{
				// 	params:{
				// 		city:"潍坊"
				// 	}
				// })
				// .then((rs)=>{
				// 	console.log(rs)
				// 	this.ress=rs.data.data.forecast;
				// }).catch((err)=>{
				// 	console.log(err)
				// })

				// this.axios.post('/api/weatherApi?city=济南')
				// .then((rs)=>{
				// 	console.log(rs)
				// 	this.ress=rs.data.data.forecast;
				// }).catch((err)=>{
				// 	console.log(err)
				// })

				this.axios({
					url:'/api/weatherApi',
					method:'post',
					data:{
						city:'青岛'
					}
				})
				.then(function(rs){
					console.log(rs)
					this.ress=rs.data.data.forecast;
				}.bind(this))
				.catch((err)=>{
					console.log(err)
				})
			}
		}

	}
</script>

<style scoped>
ul{
	border: 2px dashed green;
	
}
ul li{
	border: 2px solid orange;
}

</style>