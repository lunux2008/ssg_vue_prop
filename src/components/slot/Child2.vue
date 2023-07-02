<script setup lang="ts">
import {ref} from "vue";

const handler = ()=> {
	
}
</script>

<template>
<div>
	<h1>Child2</h1>
	<div>
		<slot name="slot1"></slot>
		<hr>
		<slot name="slot2"></slot>
	</div>
	<div><button @click="handler">click me</button></div>
</div>
</template>

<style scoped>

</style>
