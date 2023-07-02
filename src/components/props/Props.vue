<script setup lang="ts">
import Child from "../views/Child.vue";
import { ref } from "vue";

let money = ref(20000);
</script>

<template>
	<div class="box">
		<h1>props parent</h1>
		<hr>
		<Child info="Parent" :money="money" />
	</div>
</template>

<style scoped>
.box {
	width: 80vw;
	height: 400px;
	background: yellowgreen;
}
</style>
