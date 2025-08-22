import { defineStore } from 'pinia';
import { useMainStore } from './MainStore';
import { ref } from 'vue';

export const useAllData = defineStore('alldata', ()=>{
    const mainStore = useMainStore()
    const allData = ref([
        ...mainStore.discounts,
        ...mainStore.promotions
    ])
    return {
        allData
    }
})