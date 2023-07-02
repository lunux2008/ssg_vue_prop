<script setup lang="ts">
const props = defineProps(["modelValue"]);

let $emit = defineEmits(["update:modelValue"]);
</script>

<template>
<div>
	<h1>Child1</h1>
	<p>money: {{ modelValue }}</p>
	<p><button @click="$emit('update:modelValue', modelValue+100)">click</button></p>
</div>
</template>

<style scoped>

</style>
