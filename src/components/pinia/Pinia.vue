<script setup lang="ts">
import Child1 from "./Child1.vue";
import Child2 from "./Child2.vue";

import {ref} from "vue";

const handler = ()=> {
	
}
</script>

<template>
<div>
	<h1>pinia</h1>
	<p></p>
	<div><button @click="handler">click me</button></div>
	<div><Child1 /></div>
	<div><Child2 /></div>
</div>
</template>

<style scoped>

</style>
