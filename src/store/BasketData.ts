import { defineStore } from 'pinia';
import { Ref, ref } from 'vue';
interface Product {
    id: number
    title: string
    discount: boolean
    favorite: boolean
    availability: number
    price: string
    oldPrice: string
    imgUrl: string
    compound: string
    shelfLife: string
    nutritionalValue: string
    readonly availabilityTitle: string
    category: string
}
export const useBasketData = defineStore('basketData', ()=>{
    const STORAGE_BASKET_KEY = 'basket_data'
    const basketData: Ref<Product[]> = ref([])
    const loadFromStorage = ()=>{
        const storedData = localStorage.getItem(STORAGE_BASKET_KEY)
        if (storedData) {
            basketData.value = JSON.parse(storedData)
        } else {
            console.log("Корзина пуста");
        }
    }
    const saveToStorage = (key: string, data: unknown)=>{
        localStorage.setItem(key, JSON.stringify(data))
    }
    const addToStorage = (product: Product) => {
        if (basketData.value.some(item => item.id === product.id)) {
            console.log('Этот товар уже есть в корзине');
        } else {
            basketData.value.push(product)
            saveToStorage(STORAGE_BASKET_KEY, basketData.value)
        }
    }
    const deleteFromStorage = (id:number) =>{
        basketData.value = basketData.value.filter(item => item.id !== id)
        saveToStorage(STORAGE_BASKET_KEY, basketData.value)
    }
    const clearStorage = ()=>{
        basketData.value = []
        localStorage.removeItem(STORAGE_BASKET_KEY)
    }
    loadFromStorage()
    return {
        basketData,
        addToStorage,
        deleteFromStorage,
        clearStorage
    }
})