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
    const activeAddress = ref('')
    const setActiveAddress = (title: string) =>{
        activeAddress.value = title
        console.log(activeAddress.value);
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
            addressesPickup.value = [
                {
                    id: 1,
                    title: 'Ильинский Супермаркет',
                    text: 'ул. Центральная, 15, микрорайон Северный, г. Долгопрудный',
                    time: '7:00-00:00'
                },
                {
                    id: 2,
                    title: 'Ильинский Супермаркет',
                    text: 'пр-т Мира, 88, жилой комплекс "Солнечный", г. Химки',
                    time: '8:00-23:00'
                },
            ];
            saveAddressesToStorage(STORAGE_PICKUP_KEY.value, addressesPickup.value);
        }
    }
    const addAddressesPickup = (address: StoreAddress)=>{
        const addressExists = addressesPickup.value.some(item => item.text === address.text)
        if (addressExists) {
            alert('Адрес повторяется')
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
        STORAGE_PICKUP_KEY,
        addAddressesPickup,
        deleteAddressPickup,
    }
})