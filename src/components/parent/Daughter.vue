<script setup lang="ts">
import {ref} from "vue";

let money = ref(5000);

const handler = ($parent)=> {
	
	money.value += 1000;
	$parent.money -= 1000;
	console.log($parent);
}

</script>

<template>
<div>
	<h1>Daughter</h1>
	<p>daughter has {{money}}</p>
	<p><button @click="handler($parent)">get money from parent</button></p>
</div>
</template>

<style scoped>

</style>
