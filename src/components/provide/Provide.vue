<script setup lang="ts">
import Child from "./Child.vue"
import {ref, provide} from "vue";

let car = ref("car1");

provide("car", car);

car.value = "xxx";

</script>

<template>
<div>
	<h1>provide</h1>
	<p>{{car}}</p>
	<div><Child /></div>
</div>
</template>

<style scoped>

</style>
