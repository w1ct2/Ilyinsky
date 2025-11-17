import { defineStore } from 'pinia';
import { computed, Ref, ref } from 'vue';
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
    const finishPrices = ref<Record<number, number>>({})
    const quantityProducts = ref<Record<number, number>>({})
    const loadFromStorage = ()=>{
        const storedData = localStorage.getItem(STORAGE_BASKET_KEY)
        if (storedData) {
            basketData.value = JSON.parse(storedData)
            basketData.value.forEach(product => {
                const price = parseInt(product.price)
                finishPrices.value[product.id] = price
                quantityProducts.value[product.id] = 1
            })
            updateBasketTotalPrice()
        } else {
            console.log("Корзина пуста");
        }
    }

    const STORAGE_TOTAL_PRICE_KEY = 'basket_total_price'
    const basketTotalPrice = ref(localStorage.getItem(STORAGE_TOTAL_PRICE_KEY) || 0)
    const setBasketTotalPrice = (totalPrice: number) =>{
        basketTotalPrice.value = totalPrice
        localStorage.setItem(STORAGE_TOTAL_PRICE_KEY, basketTotalPrice.value.toString())
    }


    const saveToStorage = (key: string, data: unknown)=>{
        localStorage.setItem(key, JSON.stringify(data))
    }
    const addToStorage = (product: Product) => {
        if (basketData.value.some(item => item.id === product.id)) {
            console.log('Этот товар уже есть в корзине');
        } else {
            basketData.value.push(product)
            const price = parseInt(product.price)
            finishPrices.value[product.id] = price
            quantityProducts.value[product.id] = 1
            saveToStorage(STORAGE_BASKET_KEY, basketData.value)
            updateBasketTotalPrice()
            console.log('Добавлен товар, итоговая цена:', basketTotalPrice.value);
        }
    }
    const deleteFromStorage = (id:number) =>{
        delete finishPrices.value[id]
        delete quantityProducts.value[id]
        basketData.value = basketData.value.filter(item => item.id !== id)
        saveToStorage(STORAGE_BASKET_KEY, basketData.value)
    }
    const clearStorage = ()=>{
        basketData.value = []
        finishPrices.value = {}
        quantityProducts.value = {}
        localStorage.removeItem(STORAGE_BASKET_KEY)
        updateBasketTotalPrice()
    }

    const totalPrice = computed(() => {
        return Object.values(finishPrices.value).reduce((sum: number, price: number) => sum + price, 0)
    })
    
    const totalQuantity = computed(() => {
        return Object.values(quantityProducts.value).reduce((sum: number, item: number) => sum + item, 0)
    })

    const updateBasketTotalPrice = () => {
        basketTotalPrice.value = totalPrice.value
        localStorage.setItem(STORAGE_TOTAL_PRICE_KEY, basketTotalPrice.value.toString())
    }
    const updateFinishPrice = (priceData: { id: number, finishPrice: number }) => {
        finishPrices.value[priceData.id] = priceData.finishPrice
        updateBasketTotalPrice()
    }
    
    const updateQuantityProduct = (quantityData: { id: number, quantity: number }) => {
        quantityProducts.value[quantityData.id] = quantityData.quantity
        updateBasketTotalPrice()
    }
    loadFromStorage()
    return {
        basketData,
        addToStorage,
        deleteFromStorage,
        clearStorage,
        basketTotalPrice, 
        setBasketTotalPrice,
        STORAGE_TOTAL_PRICE_KEY,
        updateBasketTotalPrice,
        updateFinishPrice,
        updateQuantityProduct,
        totalPrice,
        totalQuantity,
        finishPrices, 
        quantityProducts 
    }
})