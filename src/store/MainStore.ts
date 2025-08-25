import { defineStore } from "pinia";
import { computed, Ref, ref } from "vue";
import { useWindowSize } from '@vueuse/core'
import card1 from '@/assets/img/discounts/card1.png'
import card2 from '@/assets/img/discounts/card2.png'
import promotions1 from '@/assets/img/promotions/img1.png'
import promotions2 from '@/assets/img/promotions/img2.png'
import promotions3 from '@/assets/img/promotions/img3.png'
import promotions4 from '@/assets/img/promotions/img4.png'
interface DiscountItem {
    id: number
    discount: boolean
    favorite: boolean
    imgUrl: string
    availability: number
    readonly availabilityTitle: string
    title: string
    price: string
    oldPrice: string | null
}
export const useMainStore = defineStore('mainStore', ()=>{

    const { width } = useWindowSize()
    const isMobile1000 = computed(()=> width.value < 1000)
    const isMobile768 = computed(()=> width.value < 768)

    const isActiveBurgerMenu = ref(false)
    const activeBurgerMenu = ()=>{
        isActiveBurgerMenu.value = !isActiveBurgerMenu.value
        console.log("Catalog is open");
    }

    const mainPhoneUser = ref('')
    const STORAGE_PHONE_KEY = ref('mainPhone')
    const setMainPhoneUser = (value: string)=>{
        mainPhoneUser.value = value
        localStorage.setItem(STORAGE_PHONE_KEY.value, mainPhoneUser.value)
    }

    const isAuthUser = ref('notAuth')
    const STORAGE_AUTH_KEY = ref('UserAuthorization')
    const setAuthUser = ()=>{
        isAuthUser.value = 'isAuth'
        localStorage.setItem(STORAGE_AUTH_KEY.value, 'isAuth')
        console.log('User is Authorized')
    }

    const userFullName = ref('Имя Фамилия')

    const toggleFavorite = (index: number) => {
        discounts.value[index].favorite = !discounts.value[index].favorite
    }
    const discounts: Ref<DiscountItem[]>  = ref([
        {
            id: 1,
            discount: true, 
            favorite: false,
            imgUrl: card1,
            availability: 2,
            get availabilityTitle():string {
                if(this.availability){return `В наличии ${this.availability}`}
                else return 'Нет в наличии'
            },
            title: 'Гранола Мюсли Bionova ягодные запечённые хрустящие, 400г',
            price: '99,90 грн',
            oldPrice: '129,00 грн'
        },
        {
            id: 2,
            discount: false, 
            favorite: false,
            imgUrl: card2,
            availability: 33,
            get availabilityTitle() {
                if(this.availability){return `В наличии ${this.availability}`}
                else return 'Нет в наличии'
            },
            title: 'Сок Ideas тыквенно-апельсиновый, 1л',
            price: '70,90 грн',
            oldPrice: null
        },
        {
            id: 3,
            discount: false, 
            favorite: false,
            imgUrl: card1,
            availability: 0,
            get availabilityTitle() {
                if(this.availability){return `В наличии ${this.availability}`}
                else return 'Нет в наличии'
            },
            title: 'Гранола Мюсли Bionova ягодные запечённые хрустящие, 400г',
            price: '99,90 грн',
            oldPrice: null
        },
        {
            id: 4,
            discount: false, 
            favorite: false,
            imgUrl: card2,
            availability: 3,
            get availabilityTitle() {
                if(this.availability){return `В наличии ${this.availability}`}
                else return 'Нет в наличии'
            },
            title: 'Сок Ideas тыквенно-апельсиновый, 1л',
            price: '70,90 грн',
            oldPrice: null
        },
        {
            id: 5,
            discount: false, 
            favorite: false,
            imgUrl: card2,
            availability: 5,
            get availabilityTitle() {
                if(this.availability){return `В наличии ${this.availability}`}
                else return 'Нет в наличии'
            },
            title: 'Сок Ideas тыквенно-апельсиновый, 1л',
            price: '70,90 грн',
            oldPrice: null
        },
        {
            id: 6,
            discount: true, 
            favorite: false,
            imgUrl: card1,
            availability: 2,
            get availabilityTitle():string {
                if(this.availability){return `В наличии ${this.availability}`}
                else return 'Нет в наличии'
            },
            title: 'Гранола Мюсли Bionova ягодные запечённые хрустящие, 400г',
            price: '99,90 грн',
            oldPrice: '129,00 грн'
        },
    ])
    const promotions = ref([
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
        width, 
        isMobile1000, 
        isMobile768, 
        isActiveBurgerMenu, 
        activeBurgerMenu, 
        discounts, 
        toggleFavorite,
        promotions,
        mainPhoneUser,
        setMainPhoneUser,
        isAuthUser,
        setAuthUser,
        STORAGE_AUTH_KEY,
        STORAGE_PHONE_KEY,
        userFullName
    }
})