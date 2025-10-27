import { defineStore } from "pinia";
import promotions1 from '@/assets/img/promotions/img1.png'
import promotions2 from '@/assets/img/promotions/img2.png'
import promotions3 from '@/assets/img/promotions/img3.png'
import promotions4 from '@/assets/img/promotions/img4.png'
import { Ref, ref } from "vue";
interface Promotion {
    id: Number
    title: String
    styles: Object
    stylesDescription: Object
    article: null | string
    description: String
}
export const usePromotionsStore = defineStore('promotionsStore', ()=>{
    const promotions: Ref<Promotion[]> = ref([
        {
            id: 1,
            title: 'Сделай предзаказ в кулинарии со скидкой',
            styles: {
                backgroundColor: '#CD5A7E',
                backgroundImage: `url(${promotions1})`
            },
            stylesDescription: {
                backgroundColor: '#FFE2EB',
                border: '1px solid #CD5A7E'
            },
            article: null,
            description: 'Оформите заказ на кулинарию за сутки и получите скидку. Заказу будет доставлено вовремя'
        },
        {
            id: 2,
            title: 'Праздник к нам приходит',
            styles: {
                backgroundColor: '#FF594D',
                backgroundImage: `url(${promotions2})`
            },
            stylesDescription: {
                backgroundColor: '#FFE9E8',
                border: '1px solid #FF594D'
            },
            article: '15% скидка',
            description: 'Оформите заказ на кулинарию за сутки и получите скидку. Заказу будет доставлено вовремя'
        },
        {
            id: 3,
            title: 'Скидка на третий товар в корзине «Чистая линия»',
            styles: {
                backgroundColor: '#FFA68A',
                backgroundImage: `url(${promotions3})`
            },
            stylesDescription: {
                backgroundColor: '#FFEDE8',
                border: '1px solid #FFA68A'
            },
            article: null,
            description: 'Оформите заказ на кулинарию за сутки и получите скидку. Заказу будет доставлено вовремя'
        },
        {
            id: 4,
            title: 'Комбо-набор 3 пиццы за 1500₽',
            styles: {
                backgroundColor: '#FFC425',
                backgroundImage: `url(${promotions4})`,
                backgroundSize: '150%'
            },
            stylesDescription: {
                backgroundColor: '#FFFBEF',
                border: '1px solid #FFC425'
            },
            article: 'trio1500',
            description: 'Оформите заказ на кулинарию за сутки и получите скидку. Заказу будет доставлено вовремя'
        },
        {
            id: 5,
            title: 'Скидка на третий товар в корзине «Чистая линия»',
            styles: {
                backgroundColor: '#FFA68A',
                backgroundImage: `url(${promotions3})`
            },
            stylesDescription: {
                backgroundColor: '#FFEDE8',
                border: '1px solid #FFA68A'
            },
            article: null,
            description: 'Оформите заказ на кулинарию за сутки и получите скидку. Заказу будет доставлено вовремя'
        },
        {
            id: 6,
            title: 'Праздник к нам приходит',
            styles: {
                backgroundColor: '#FF594D',
                backgroundImage: `url(${promotions2})`
            },
            stylesDescription: {
                backgroundColor: '#FFE9E8',
                border: '1px solid #FF594D'
            },
            article: '15% скидка',
            description: 'Оформите заказ на кулинарию за сутки и получите скидку. Заказу будет доставлено вовремя'
        },
    ])
    return {
        promotions
    }
})