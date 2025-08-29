import { defineStore } from "pinia";
import { Ref, ref } from "vue";
interface History {
    id: number
    status: 'выполнен' | 'в работе'
    method: 'Доставка' | 'Самовывоз'
    number: string
    address: string
    price: string
    date: string
}
export const usePersonalHistory = defineStore('personalHistory', ()=>{
    const history: Ref<History[]> = ref([
        {
            id: 1,
            status: 'в работе',
            method: 'Доставка',
            number: 'Заказ №56940999-1',
            address: 'ул. Новая, д. 13, кв 33 </br>посёлок Ильинское-Усово, городской округ Красногорск',
            price: '1586 руб',
            date: '14.02.2025'
        },
        {
            id: 2,
            status: 'выполнен',
            method: 'Самовывоз',
            number: 'Заказ №56940792-1',
            address: 'ул. Новая, д. 13, кв 33 </br>посёлок Ильинское-Усово, городской округ Красногорск',
            price: '136 руб',
            date: '10.01.2025'
        },
        {
            id: 3,
            status: 'выполнен',
            method: 'Доставка',
            number: 'Заказ №56940762-1',
            address: 'ул. Новая, д. 13, кв 33 </br>посёлок Ильинское-Усово, городской округ Красногорск',
            price: '306 руб',
            date: '02.01.2025'
        },
        {
            id: 4,
            status: 'выполнен',
            method: 'Доставка',
            number: 'Заказ №56940723-1',
            address: 'ул. Новая, д. 13, кв 33 </br>посёлок Ильинское-Усово, городской округ Красногорск',
            price: '986 руб',
            date: '03.12.2024'
        },
    ])
    return {
        history
    }
})