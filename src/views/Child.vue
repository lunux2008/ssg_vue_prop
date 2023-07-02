<script setup lang="ts">
let props = defineProps(["info", "money"]);

console.log(props);

const updateProps = ()=> {

	console.log(this);

	console.log("updateProps");
	
	// props.money += 20;
}

</script>


<template>
	<div class="child">
		<h1>child from {{ info }} get {{ money }}</h1>
		<p><button @click="updateProps">修改props属性</button></p>
	</div>
</template>

<style scoped>
.child {
	width: 400px;
	height: 200px;
	background: hotpink;
}
</style>
