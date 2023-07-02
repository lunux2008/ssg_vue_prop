<script setup lang="ts">
import {ref} from "vue"
import Child1 from "./Child1.vue"
import Child2 from "./Child2.vue"
import Child3 from "./Child3.vue"

const handler = ()=> {
	
}

let todos = ref([
	{id: 1, title: "aaa", done: true},
	{id: 2, title: "bbb", done: true},
	{id: 3, title: "ccc", done: true},
	{id: 4, title: "ddd", done: false}
])

</script>

<template>
<div>
	<h1>Slot</h1>
	<p></p>
	<div><button @click="handler">click me</button></div>
	<div><Child1><p><span>slot1</span></p></Child1></div>
	<div>
		<Child2>
			<template v-slot:slot1>
				<div>child2 slot1</div>
			</template>
			<template #slot2>
				<div>child2 slot2</div>
			</template>
		</Child2>
	</div>
	<div>
		<Child3 :todos="todos">
			<template v-slot="{$row,$index}">
				<span>{{ $row }}</span>
			</template>
		</Child3>
	</div>
</div>
</template>

<style scoped>

</style>
