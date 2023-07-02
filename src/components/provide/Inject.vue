<script setup lang="ts">
import {inject} from "vue";

let car = inject("car");
console.log(car);

const handler = ()=> {
	car.value = "car33";
}
</script>

<template>
<div>
	<h1>inject</h1>
	<p>{{car}}</p>
	<div><button @click="handler">改变数据</button></div>
</div>
</template>

<style scoped>

</style>
