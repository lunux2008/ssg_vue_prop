<script setup lang="ts">
import {ref} from "vue"

import useInfoStore from "../../stores/modules/info.ts"

const infoStore = useInfoStore()

console.log(infoStore.count)
console.log(infoStore.total)

const handler = ()=> {
	// infoStore.count++
	/*
	infoStore.$patch({
		count: 111
	})
	*/
	
	infoStore.add(10)
}
</script>

<template>
<div>
	<h1>child1</h1>
	<p>{{ infoStore.count }}</p>
	<div><button @click="handler">click me</button></div>
</div>
</template>

<style scoped>

</style>
