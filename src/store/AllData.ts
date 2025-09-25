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
    const favoriteData = computed(()=>{
        return [...allData.value].filter(item => item.favorite === true)
    })
    
    return {
        allData,
        favoriteData,
    }
})