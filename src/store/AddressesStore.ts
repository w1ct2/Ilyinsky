import { defineStore } from "pinia";
import { onMounted, ref, Ref } from "vue";
interface DeliveryAddress {
    id: number;
    address: string;
}
export const useAddressesStore = defineStore('addressesStore', ()=>{
    const addressesDelivery: Ref<DeliveryAddress[]> = ref([])
    const STORAGE_DELIVERY_KEY = ref('delivery_addresses')
    const loadDeliveryFromStorage = ()=>{
        const storedAddresses = localStorage.getItem(STORAGE_DELIVERY_KEY.value)
        if (storedAddresses){
            addressesDelivery.value = JSON.parse(storedAddresses)
        } else {
            addressesDelivery.value = [{
                id: Date.now(),
                address: 'ул. Новая, д. 13, посёлок Ильинское-Усово, городской округ Красногорск',
            }];
            saveAddressesToStorage();
        }
    }
    const saveAddressesToStorage = ()=>{
        localStorage.setItem(STORAGE_DELIVERY_KEY.value, JSON.stringify(addressesDelivery.value))
    }
    const addAddressesDelivery = (address: string)=>{
        addressesDelivery.value.push({
            id: Date.now(),
            address: address
        })
        saveAddressesToStorage()
        console.log(addressesDelivery);
    }
    const deleteAddressDelivery = (address: DeliveryAddress) => {
        addressesDelivery.value = addressesDelivery.value.filter(item => item.id !== address.id)
        saveAddressesToStorage()
    }
    loadDeliveryFromStorage()

    return {
        deleteAddressDelivery,
        addAddressesDelivery,
        addressesDelivery,
        STORAGE_DELIVERY_KEY,
    }
})