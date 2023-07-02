<script setup lang="ts">
import Child1 from "./Child1.vue"
import Child2 from "./Child2.vue"

import {ref} from "vue";
let info = ref("");
info = "aaa";

let money = ref(10000);

// console.log(money);
// console.log(info);


const handler = ()=> {
	console.log(info);
}

const cb = (val)=> {
	console.log(val);
	
	money.value = val;
	info = val;
}

</script>

<template>
<div>
	<h1>v-model</h1>
	<p>money: {{ money }}</p>
	<p><input type="text" v-model="info" @change="handler" /></p>
	<!-- div><Child1 :modelValue="money" @update:modelValue="cb" /></div -->
	<div><Child1 v-model="money" @update:modelValue="cb" /></div>
	<div><Child2 v-model="money" /></div>
</div>
</template>

<style scoped>

</style>
