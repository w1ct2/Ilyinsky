import { defineStore } from "pinia";
import { ref } from "vue";
export const useMainStore = defineStore('mainStore', ()=>{
    const test = ref(1)
    return {test}
})