<script setup lang="ts">
import Son from "./Son.vue";
import Daughter from "./Daughter.vue";

import {ref} from "vue"

let money = ref(10000); 

let son = ref();

const handler = ()=> {
	console.log(money);
	console.log(son);
	
	money.value += 10;
	son.value.money -= 10;
}

defineExpose({money});
</script>

<template>
	<div>
		<h1>ref与$parent</h1>
		<p>parent have {{ money }}</p>
		<p><button @click="handler">get money from son</button></p>
		<div><Son ref="son" /></div>
		<div><Daughter  /></div>
	</div>
</template>

<style scoped>

</style>
