import { defineStore } from "pinia";
import { onMounted, ref, Ref } from "vue";
interface DeliveryAddress {
    id: number;
    address: string;
}
export const useAddressesStore = defineStore('addressesStore', ()=>{
    const addressesDelivery: Ref<DeliveryAddress[]> = ref([])
    const STORAGE_DELIVERY_KEY = ref('delivery_addresses')
    const saveAddressesToStorage = (storageKey: string, data: unknown)=>{
        localStorage.setItem(storageKey, JSON.stringify(data))
    }

    const loadDeliveryFromStorage = ()=>{
        const storedAddresses = localStorage.getItem(STORAGE_DELIVERY_KEY.value)
        if (storedAddresses){
            addressesDelivery.value = JSON.parse(storedAddresses)
        } else {
            addressesDelivery.value = [{
                id: Date.now(),
                address: 'ул. Новая, д. 13, посёлок Ильинское-Усово, городской округ Красногорск',
            }];
            saveAddressesToStorage(STORAGE_DELIVERY_KEY.value, addressesDelivery.value);
        }
    }
    const addAddressesDelivery = (address: string)=>{
        addressesDelivery.value.push({
            id: Date.now(),
            address: address
        })
        saveAddressesToStorage(STORAGE_DELIVERY_KEY.value, addressesDelivery.value)
        console.log(addressesDelivery);
    }
    const deleteAddressDelivery = (address: DeliveryAddress) => {
        addressesDelivery.value = addressesDelivery.value.filter(item => item.id !== address.id)
        saveAddressesToStorage(STORAGE_DELIVERY_KEY.value, addressesDelivery.value)
    }
    const storesAddresses = ref([
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
        {
            id: 3,
            title: 'Ильинский Супермаркет',
            text: 'ш. Энтузиастов, 45, бизнес-парк "Столичный", г. Балашиха',
            time: '6:30-23:30'
        },
        {
            id: 4,
            title: 'Ильинский Супермаркет',
            text: 'пл. Революции, 12, исторический центр, г. Зеленоград',
            time: '7:00-22:00'
        },
        {
            id: 5,
            title: 'Ильинский Супермаркет',
            text: 'ул. Победы, 156, торговый квартал "Мегаполис", г. Мытищи',
            time: 'круглосуточно'
        },
        {
            id: 6,
            title: 'Ильинский Супермаркет',
            text: 'бульвар Космонавтов, 33, спальный район "Орбита", г. Королёв',
            time: '6:00-00:00'
        },
        {
            id: 7,
            title: 'Ильинский Супермаркет',
            text: 'ул. Садовая, 7, частный сектор, пос. Лесной Городок',
            time: '5:00-21:00'
        },
        {
            id: 8,
            title: 'Ильинский Супермаркет',
            text: 'пр-т Вернадского, 129, элитный комплекс "Панорама", г. Одинцово',
            time: '8:00-00:00'
        }
    ])
    loadDeliveryFromStorage()
    return {
        deleteAddressDelivery,
        addAddressesDelivery,
        addressesDelivery,
        STORAGE_DELIVERY_KEY,
        storesAddresses,
    }
})