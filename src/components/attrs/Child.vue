<script setup lang="ts">
import {useAttrs} from "vue";

let $attrs = useAttrs();

let props = defineProps(["type", "class"]);
</script>

<template>
<div>
	<h1>Child</h1>
	<p><button :=props>click me</button></p>
</div>
</template>

<style scoped>

</style>
