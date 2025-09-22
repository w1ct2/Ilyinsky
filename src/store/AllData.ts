import { defineStore } from 'pinia';
import { useMainStore } from './MainStore';
import { computed, ref } from 'vue';

export const useAllData = defineStore('alldata', ()=>{
    const mainStore = useMainStore()
    const allData = ref([
        ...mainStore.discounts,
    ])
    const favoriteData = computed(()=>{
        return [...allData.value].filter(item => item.favorite === true)
    })
    console.log(favoriteData.value);
    const STORAGE_FAV_KEY = 'favorite_cards'
    
    return {
        allData,
        favoriteData,
    }
})