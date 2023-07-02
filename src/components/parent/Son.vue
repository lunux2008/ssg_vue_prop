<script setup lang="ts">
import {ref} from "vue"

let money = ref(1000);

defineExpose({money});
</script>

<template>
<div>
	<h1>Son</h1>
	<p>son has {{money}}</p>
</div>
</template>

<style scoped>

</style>
