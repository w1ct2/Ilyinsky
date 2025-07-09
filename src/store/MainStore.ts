import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { useWindowSize } from '@vueuse/core'

export const useMainStore = defineStore('mainStore', ()=>{
    const { width } = useWindowSize()
    const isMobile1000 = computed(()=> width.value < 1000)
    return {width, isMobile1000}
})