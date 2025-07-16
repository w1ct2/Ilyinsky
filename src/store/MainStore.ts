import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { useWindowSize } from '@vueuse/core'

export const useMainStore = defineStore('mainStore', ()=>{
    const { width } = useWindowSize()
    const isMobile1000 = computed(()=> width.value < 1000)

    const isActiveBurgerMenu = ref(false)
    const activeBurgerMenu = ()=>{
        isActiveBurgerMenu.value = !isActiveBurgerMenu.value
        console.log("Catalog is open");
    }
    return {width, isMobile1000, isActiveBurgerMenu, activeBurgerMenu}
})