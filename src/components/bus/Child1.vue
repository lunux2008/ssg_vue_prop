<script setup lang="ts">
import $bus from "./index.ts";
import {onMounted} from "vue";

$bus.on("car", (car) => {
		console.log(car);
	});

	/*
onMounted(()=> {
	$bus.on("car", (car) => {
		console.log(car);
	});
});
*/
 
</script>

<template>
<div>
	<h1>Child1</h1>
	<p></p>
</div>
</template>

<style scoped>

</style>
