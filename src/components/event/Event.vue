<script setup lang="ts">

import Event1 from "./Event1.vue"
import Event2 from "./Event2.vue"

const handler = (event)=> {
	console.log(event);
}

const handler1 = (a, b, c, event) => {
	console.log({a, b, c, event});
}

const cb = (p1, p2) => {
	console.log("cb", p1, p2);
}
</script>

<template>
	<div>
		<h1>event</h1>
		<p><button @click="handler1(1,2,3,$event)">click</button></p>
		<div>
			<Event1 @cb="cb" />
			<Event2 />
		</div>
	</div>
</template>

<style scoped>

</style>
