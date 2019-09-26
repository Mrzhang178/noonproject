<template>
	<div id="about">
		<h3>关于我们</h3>
		<div>这里是是关于我们</div>
		<router-link to="/search">搜索页</router-link>
		<router-link to="/Abc">按需加载的界面</router-link>
		<router-view/>	
	</div>
</template>
<script>
	export default{
		name:'About',
	}
</script>
<style>
	
</style>