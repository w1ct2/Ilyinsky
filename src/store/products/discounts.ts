import img1 from '@/assets/products-img/cooking/desserts/tiramisu.png'
import img2 from '@/assets/products-img/cooking/desserts/cheesecake.png'
import img3 from '@/assets/products-img/cooking/desserts/napoleon.png'
import img4 from '@/assets/products-img/cooking/hot-dish/french_chicken.png'
import img6 from '@/assets/products-img/cooking/soup/borshch.jpeg'
import img7 from '@/assets/products-img/cooking/soup/solyanka.jpeg'
import img8 from '@/assets/products-img/supermarket/snacks/kuraga.webp'
import img9 from '@/assets/products-img/supermarket/snacks/kuraga.webp'

interface DiscountItem {
    id: number
    title: string
    discount: boolean
    favorite: boolean
    availability: number
    price: string
    oldPrice: string | null
    imgUrl: string
    compound: string
    shelfLife: string
    nutritionalValue: string
    readonly availabilityTitle: string
}
export const discounts: DiscountItem[] = [
        {
            id: 1,
            title: "Тирамису",
            discount: false,
            favorite: false,
            availability: 6,
            price: "280 руб",
            oldPrice: null,
            imgUrl: img1,
            compound: "сыр маскарпоне, кофе, печенье савоярди, какао, яйцо, сахар",
            shelfLife: "48 часов",
            nutritionalValue: "Белки: 8г, Жиры: 22г, Углеводы: 35г (на 100г)",
            get availabilityTitle() {
            if (this.availability) { return `В наличии ${this.availability}` }
            else return 'Нет в наличии'
            }
        },
        {
            id: 2,
            title: "Чизкейк Нью-Йорк",
            discount: true,
            favorite: false,
            availability: 8,
            price: "320 руб",
            oldPrice: "370 руб",
            imgUrl: img2,
            compound: "сливочный сыр, песочное основание, сметана, яйцо, ваниль",
            shelfLife: "72 часа",
            nutritionalValue: "Белки: 7г, Жиры: 25г, Углеводы: 30г (на 100г)",
            get availabilityTitle() {
            if (this.availability) { return `В наличии ${this.availability}` }
            else return 'Нет в наличии'
            }
        },
        {
            id: 3,
            title: "Наполеон",
            discount: false,
            favorite: false,
            availability: 0,
            price: "250 руб",
            oldPrice: null,
            imgUrl: img3,
            compound: "слоеное тесто, заварной крем, сливочное масло, сахарная пудра",
            shelfLife: "48 часов",
            nutritionalValue: "Белки: 6г, Жиры: 28г, Углеводы: 40г (на 100г)",
            get availabilityTitle() {
            if (this.availability) { return `В наличии ${this.availability}` }
            else return 'Нет в наличии'
            }
        },
        {
            id: 4,
            title: "Курица по-французски",
            discount: true,
            favorite: false,
            availability: 9,
            price: "380 руб",
            oldPrice: "430 руб",
            imgUrl: img4,
            compound: "куриное филе, сыр, помидоры, лук, майонез, специи",
            shelfLife: "48 часов",
            nutritionalValue: "Белки: 16г, Жиры: 18г, Углеводы: 8г (на 100г)",
            get availabilityTitle() {
            if (this.availability) { return `В наличии ${this.availability}` }
            else return 'Нет в наличии'
            }
        },
        {
            id: 6,
            title: "Борщ украинский",
            discount: false,
            favorite: false,
            availability: 8,
            price: "280 руб",
            oldPrice: null,
            imgUrl: img6,
            compound: "говядина, свекла, капуста, картофель, морковь, лук, сметана",
            shelfLife: "48 часов",
            nutritionalValue: "Белки: 8г, Жиры: 6г, Углеводы: 12г (на 100г)",
            get availabilityTitle() {
            if (this.availability) { return `В наличии ${this.availability}` }
            else return 'Нет в наличии'
            }
        },
        {
            id: 7,
            title: "Солянка мясная",
            discount: true,
            favorite: false,
            availability: 6,
            price: "320 руб",
            oldPrice: "370 руб",
            imgUrl: img7,
            compound: "говядина, ветчина, колбаса, огурцы, маслины, лимон, сметана",
            shelfLife: "48 часов",
            nutritionalValue: "Белки: 10г, Жиры: 9г, Углеводы: 8г (на 100г)",
            get availabilityTitle() {
            if (this.availability) { return `В наличии ${this.availability}` }
            else return 'Нет в наличии'
            }
        },
        {
            id: 8,
            title: "Курага узбекская",
            discount: true,
            favorite: false,
            availability: 0,
            price: "320 руб",
            oldPrice: "380 руб",
            imgUrl: img8,
            compound: "абрикосы сушеные без косточки",
            shelfLife: "12 месяцев",
            nutritionalValue: "Белки: 5г, Жиры: 0.5г, Углеводы: 63г (на 100г)",
            get availabilityTitle() {
            if (this.availability) { return `В наличии ${this.availability}` }
            else return 'Нет в наличии'
            }
        },
        {
            id: 9,
            title: "Орехи кешью жареные",
            discount: false,
            favorite: false,
            availability: 12,
            price: "450 руб",
            oldPrice: null,
            imgUrl: img9,
            compound: "кешью жареный, соль",
            shelfLife: "9 месяцев",
            nutritionalValue: "Белки: 18г, Жиры: 44г, Углеводы: 30г (на 100г)",
            get availabilityTitle() {
            if (this.availability) { return `В наличии ${this.availability}` }
            else return 'Нет в наличии'
            }
        },
    ]