<script setup lang="ts">
import {ref} from "vue";

const handler = ()=> {
	
}
</script>

<template>
<div>
	<h1>Child1</h1>
	<slot></slot>
	<div><button @click="handler">click me</button></div>
</div>
</template>

<style scoped>

</style>
