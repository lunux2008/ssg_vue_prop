import { defineStore } from "pinia"

let useInfoStore = defineStore("info", {
	state: ()=> {
		return {
			count: 99,
			arr: [1, 2, 3]
		}
	},
	actions: {
		add(n:number) {
			this.count += n
		}
	},
	getters: {
		total() {
			return this.arr.reduce((prev:number, next:number)=> {
				return prev + next
			}, 0)
		}
	}
})

export default useInfoStore