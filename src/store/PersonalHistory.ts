import { defineStore } from "pinia";
import { computed, Ref, ref } from "vue";
interface History {
    id: number
    status: 'выполнен' | 'в работе'
    readonly methodTitle: unknown
    number: number
    address: unknown
    price: string
    date: string
}
export const usePersonalHistory = defineStore('personalHistory', ()=>{
    const history: Ref<History[]> = ref([])
    const STORAGE_HISTORY_KEY = 'user_order_history'
    const loadFronStorage = ()=>{
        const storedData = localStorage.getItem(STORAGE_HISTORY_KEY)
        if (storedData) {
            history.value = JSON.parse(storedData)
        } else {
            console.log('Нет истории заказов.');
        }
    }
    const saveToStorage = (key: string, data: unknown)=>{
        localStorage.setItem(key, JSON.stringify(data))
    }
    const getUserDeliveryMethod = () => localStorage.getItem('delivery_method')
    const getMethodTitle = () => {
        const method = getUserDeliveryMethod()
        if (method === 'delivery') return 'Доставка'
        else if (method === 'pickup') return 'Самовывоз'
        return 'Не указан'
    }
    const getAddress = () => {
        const method = getUserDeliveryMethod()
        if (method === 'delivery') {
            return localStorage.getItem('user_delivery_address')
        } else if (method === 'pickup') {
            return localStorage.getItem('user_pickup_address')
        }
        return null
    }
    const addToStorage = (number: number, price: string, date: string) => {
        const newItem: History = {
            id: Date.now(),
            status: 'в работе',
            methodTitle: getMethodTitle(),
            number: number,
            address: getAddress(),
            price: price,
            date: date,
        }
        history.value.push(newItem)
        saveToStorage(STORAGE_HISTORY_KEY, history.value)
    }
    loadFronStorage()
    // localStorage.removeItem(STORAGE_HISTORY_KEY)
    return {
        history,
        addToStorage
    }
})