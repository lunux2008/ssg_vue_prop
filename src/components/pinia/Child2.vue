<script setup lang="ts">
import {ref} from "vue";

import useTodoStore from "../../stores/modules/todo.ts"

const todoStore = useTodoStore()
console.log(todoStore)

const handler = ()=> {
	console.log(todoStore.todos);
	todoStore.update()
}
</script>

<template>
<div>
	<h1>child2</h1>
	<p>{{ todoStore.todos }} {{ todoStore.total }}</p>
	<div><button @click="handler">click me</button></div>
</div>
</template>

<style scoped>

</style>
