import { defineStore } from "pinia"
import { ref, computed } from "vue"

let useTodoStore = defineStore("todo", ()=> {
	let todos = ref([{id:1}, {id:2}, {id:3}])
	let arr = ref([1, 2, 3, 4, 5])
	
	const total = computed(()=> {
		return arr.value.reduce((pre, next)=> {
			return pre + next
		}, 0)
	})
	
	const update = ()=> {
		todos.value.push({id:4})
	}
	
	return {
		total,
		todos,
		update
	}
})

export default useTodoStore