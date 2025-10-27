import { defineStore } from "pinia";
import { computed, Ref, ref } from "vue";
import { useWindowSize } from '@vueuse/core'
export const useMainStore = defineStore('mainStore', ()=>{

    const { width } = useWindowSize()
    const isMobile1000 = computed(()=> width.value < 1000)
    const isMobile768 = computed(()=> width.value < 768)

    const isActiveBurgerMenu = ref(false)
    const activeBurgerMenu = ()=>{
        isActiveBurgerMenu.value = !isActiveBurgerMenu.value
        console.log("Catalog is open");
    }
    const STORAGE_PHONE_KEY = ref('mainPhone')
    const mainPhoneUser = ref(localStorage.getItem(STORAGE_PHONE_KEY.value))
    const setMainPhoneUser = (value: string)=>{
        mainPhoneUser.value = value
        localStorage.setItem(STORAGE_PHONE_KEY.value, mainPhoneUser.value)
    }

    const STORAGE_AUTH_KEY = ref('UserAuthorization')
    const isAuthUser = ref(localStorage.getItem(STORAGE_AUTH_KEY.value))
    const setAuthUser = ()=>{
        isAuthUser.value = 'isAuth'
        localStorage.setItem(STORAGE_AUTH_KEY.value, 'isAuth')
        console.log('User is Authorized')
    }
    const STORAGE_FULLNAME_KEY = 'userFullname'
    const userFullName = ref(localStorage.getItem(STORAGE_FULLNAME_KEY))
    const setUserFullname = (fullname: string)=> {
        userFullName.value = fullname
        localStorage.setItem(STORAGE_FULLNAME_KEY, userFullName.value)
    }

    const userSelectedAddress = ref(null)
    const STORAGE_DELIVERY_METHOD_KEY = 'delivery_method'
    const userDeliveryMethod: Ref<null | string> = ref(localStorage.getItem(STORAGE_DELIVERY_METHOD_KEY))
    const setDeliveryMethod = (method: string)=>{
        userDeliveryMethod.value = method
        localStorage.setItem(STORAGE_DELIVERY_METHOD_KEY, userDeliveryMethod.value)
        console.log('Delivery method is changed')
    }
    return {
        width, 
        isMobile1000, 
        isMobile768, 
        isActiveBurgerMenu, 
        activeBurgerMenu, 
        mainPhoneUser,
        setMainPhoneUser,
        isAuthUser,
        setAuthUser,
        userFullName,
        userDeliveryMethod,
        userSelectedAddress,
        setDeliveryMethod,
        setUserFullname,
    }
})