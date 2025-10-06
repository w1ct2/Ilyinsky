import { defineStore } from 'pinia';
import { computed, Ref, ref } from 'vue';

import { bakery} from './products/cooking/bakery';
import { pizza } from './products/cooking/pizza';
import { grill } from './products/cooking/grill';
import { meat } from './products/cooking/meat';
import { salad } from './products/cooking/salad';
import { soup } from './products/cooking/soup';
import { hotDish } from './products/cooking/hotDish';
import { dessert } from './products/cooking/dessert';
import { discounts } from './products/discounts';

import { snacksDriedFruits } from './products/supermarket/snacks';
import { pastaCereals } from './products/supermarket/pastaCereals';
import { coffeeTeaSweets } from './products/supermarket/coffeTeaSweets';
import { cannedPickled } from './products/supermarket/cannedPickled';
import { oilSaucesSpices } from './products/supermarket/oilSaucesSpices';
import { milkButterEggs } from './products/supermarket/milkButterEggs';
import { waterDrinks } from './products/supermarket/waterDrinks';

import { dumplings } from './products/freeze/dumplings';
import { semiFinished } from './products/freeze/semiFinished';
import { frozenVegetables} from './products/freeze/frozenVegetables';
import { fishSeafood } from './products/freeze/fish';
import { khinkaliManty } from './products/freeze/khinkaliManty';

import { appliances } from './products/other/appliances';
import { usefulStuff } from './products/other/usefullStuff';
import { cleaningLaundry } from './products/other/cleaningLaundry';
import { beautyHygiene} from './products/other/beautyHygiene';
import { jsx } from 'vue/jsx-runtime';

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
}

export const useAllData = defineStore('alldata', ()=>{
    const discountsData = ref(discounts)
    
    const bakeryData = ref(bakery)
    const pizzaData = ref(pizza)
    const grillData = ref(grill)
    const meatData = ref(meat)
    const saladData = ref(salad)
    const soupData = ref(soup)
    const hotDishData = ref(hotDish)
    const dessertData = ref(dessert)

    const waterDrinksData = ref(waterDrinks)
    const milkButterEggsData = ref(milkButterEggs)
    const snacksDriedFruitsData = ref(snacksDriedFruits)
    const coffeeTeaSweetsData = ref(coffeeTeaSweets)
    const pastaCerealsData = ref(pastaCereals)
    const oilSaucesSpicesData = ref(oilSaucesSpices)
    const cannedPickledData = ref(cannedPickled)

    const dumplingsData = ref(dumplings)
    const khinkaliMantyData = ref(khinkaliManty)
    const semiFinishedData = ref(semiFinished)
    const frozenVegetablesData = ref(frozenVegetables)
    const fishSeafoodData = ref(fishSeafood)

    const beautyHygieneData = ref(beautyHygiene)
    const cleaningLaundryData = ref(cleaningLaundry)
    const usefulStuffData = ref(usefulStuff)
    const appliancesData = ref(appliances)

    const allData = ref([
        ...discountsData.value,
        ...bakeryData.value,
        ...pizzaData.value,
        ...grillData.value,
        ...meatData.value,
        ...saladData.value,
        ...soupData.value,
        ...hotDishData.value,
        ...dessertData.value,

        ...waterDrinksData.value,
        ...milkButterEggsData.value,
        ...snacksDriedFruitsData.value,
        ...coffeeTeaSweetsData.value,
        ...pastaCerealsData.value,
        ...oilSaucesSpicesData.value,
        ...cannedPickledData.value,

        ...dumplingsData.value,
        ...khinkaliMantyData.value,
        ...semiFinishedData.value,
        ...frozenVegetablesData.value,
        ...fishSeafoodData.value,

        ...beautyHygieneData.value,
        ...cleaningLaundryData.value,
        ...usefulStuffData.value,
        ...appliancesData.value
    ])
    const productsMap = computed(()=>{
        return new Map(allData.value.map(product => [product.id, product]))
    })
    const favoriteData: Ref<Product[]> = ref([])
    const getProductById = (id: number) => productsMap.value.get(id)
    const toggleFavorite = (id: number) => {
        const product: any = getProductById(id)
        if (product) {
            if (product.favorite) {
                favoriteData.value = favoriteData.value.filter(item => item.id !== id)
                product.favorite = false
            } else {
                favoriteData.value.push(product)
                product.favorite = true
            }
            saveToStorage(STORAGE_FAVORITE_KEY, favoriteData.value)
        }
    }
    const STORAGE_FAVORITE_KEY = 'favorite_data'
    const loadFromStorage = ()=>{
        const storedData = localStorage.getItem(STORAGE_FAVORITE_KEY)
        if (storedData) {
            favoriteData.value = JSON.parse(storedData)
        } else {
            console.log('Лист избранного пуст')
        }
    }
    //переделать данные в скидках discount и изменить там логику добавления в избранное. найти картинки для товаров. начать делать каталог
    const saveToStorage = (key: string, data: unknown)=>{
        localStorage.setItem(key, JSON.stringify(data))
    }
    loadFromStorage()
    
    return {
        allData,
        favoriteData,
        discountsData,
        getProductById,
        toggleFavorite
    }
})