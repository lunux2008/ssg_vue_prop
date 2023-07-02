<script setup lang="ts">
import $bus from "./index.ts";

const handler = ()=> {
	$bus.emit("car", "good car");
}
</script>

<template>
<div>
	<h1>Child2</h1>
	<p><button @click="handler">给Child1传值</button></p>
</div>
</template>

<style scoped>

</style>
