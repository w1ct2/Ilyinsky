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
export const discounts: DiscountItem[] = [
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
            price: '99,90 руб',
            oldPrice: '129,00 руб'
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
            price: '70,90 руб',
            oldPrice: null
        },
        {
            id: 3,
            discount: false, 
            favorite: false,
            imgUrl: card1,
            availability: 0,
            get availabilityTitle(): any {
                if(this.availability){return `В наличии ${this.availability}`}
                else return 'Нет в наличии'
            },
            title: 'Гранола Мюсли Bionova ягодные запечённые хрустящие, 400г',
            price: '99,90 руб',
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
            price: '70,90 руб',
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
            price: '70,90 руб',
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
            price: '99,90 руб',
            oldPrice: '129,00 руб'
        },
    ]