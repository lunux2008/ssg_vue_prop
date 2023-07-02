<script setup lang="ts">
let $emit = defineEmits(["cb"]);

const handler = ()=> {
	$emit("cb", "aa", "bb");
}

let aa = 11;
</script>

<template>
<div>
	<h1>event1</h1>
	<p><button @click="handler">event1 click</button></p>
	<p><button @click="$emit('cb', aa, 2)">event1 click2</button></p>
</div>
</template>

<style scoped>

</style>
