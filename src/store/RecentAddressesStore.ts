import { defineStore } from "pinia";
import { onMounted, ref, Ref } from "vue";
interface StoreAddress {
    id: number
    title: string
    text: string
    time: string
}
export const useRecentAddressesStore = defineStore('recentAddressesStore', ()=>{
    const addressesPickup: Ref<StoreAddress[]> = ref([])
    const STORAGE_USER_PICKUP_ADDRESS_KEY = 'user_pickup_address'
    const activeAddress = ref(localStorage.getItem(STORAGE_USER_PICKUP_ADDRESS_KEY))
    const setActiveAddress = (title: string) =>{
        activeAddress.value = title
        localStorage.setItem(STORAGE_USER_PICKUP_ADDRESS_KEY, activeAddress.value)
    }
    const STORAGE_PICKUP_KEY = ref('pickup_addresses')
    const saveAddressesToStorage = (storageKey: string, data: unknown)=>{
        localStorage.setItem(storageKey, JSON.stringify(data))
    }
    const loadPickupFromStorage = ()=>{
        const storedAddresses = localStorage.getItem(STORAGE_PICKUP_KEY.value)
        if (storedAddresses){
            addressesPickup.value = JSON.parse(storedAddresses)
        } else {
            saveAddressesToStorage(STORAGE_PICKUP_KEY.value, addressesPickup.value);
        }
    }
    const addAddressesPickup = (address: StoreAddress)=>{
        const addressExists = addressesPickup.value.some(item => item.text === address.text)
        if (addressExists) {
            setActiveAddress('Выберите правильный адрес!')
            return
        }
        addressesPickup.value.push(address)
        setActiveAddress(address.text)
        saveAddressesToStorage(STORAGE_PICKUP_KEY.value, addressesPickup.value)
    }
    const deleteAddressPickup = (address: StoreAddress) => {
        addressesPickup.value = addressesPickup.value.filter(item => item.id !== address.id)
        saveAddressesToStorage(STORAGE_PICKUP_KEY.value, addressesPickup.value)
    }

    loadPickupFromStorage()

    return {
        activeAddress,
        setActiveAddress,
        addressesPickup,
        addAddressesPickup,
        deleteAddressPickup,
    }
})