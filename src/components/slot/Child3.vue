<script setup lang="ts">
import {ref} from "vue";

defineProps(["todos"]);

const handler = ()=> {
	
}
</script>

<template>
<div>
	<h1>Child3</h1>
	<div>
		<ul>
			<li v-for="(item, index) in todos" :key="item.id">
				<slot :$row="item" :$index="index"></slot>
			</li>
		</ul>
	</div>
	
	<div><button @click="handler">click me</button></div>
</div>
</template>

<style scoped>

</style>
