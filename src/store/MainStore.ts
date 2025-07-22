import { defineStore } from "pinia";
import { computed, Ref, ref } from "vue";
import { useWindowSize } from '@vueuse/core'
import card1 from '@/assets/img/discounts/card1.png'
import card2 from '@/assets/img/discounts/card2.png'
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
    ])
    const toggleFavorite = (index: number) => {
        discounts.value[index].favorite = !discounts.value[index].favorite
    }
    return {width, isMobile1000, isMobile768, isActiveBurgerMenu, activeBurgerMenu, discounts, toggleFavorite}
})