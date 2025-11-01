import img1 from '@/assets/products-img/other/usefullStuff/AA-Duracell.webp'
import img2 from '@/assets/products-img/other/usefullStuff/kosmos.webp'
import img3 from '@/assets/products-img/other/usefullStuff/duct-tape.webp'
import img4 from '@/assets/products-img/other/usefullStuff/balloons.webp'
import img5 from '@/assets/products-img/other/usefullStuff/moment.webp'
import img6 from '@/assets/products-img/other/usefullStuff/stationery-set.webp'
import img7 from '@/assets/products-img/other/usefullStuff/candle.webp'
export const usefullStuff = [
    {
        id: 2401,
        title: "Батарейки AA Duracell",
        discount: false,
        favorite: false,
        availability: 45,
        price: "280 руб",
        oldPrice: null,
        imgUrl: img1,
        compound: "щелочные элементы, стальной корпус",
        shelfLife: "60 месяцев",
        nutritionalValue: "4 шт",
        category: 'usefullStuff',
        get availabilityTitle() {
        if (this.availability) { return `В наличии ${this.availability}` }
        else return 'Нет в наличии'
        }
    },
    { 
        id: 2402,
        title: "Лампочка Космос",
        discount: true,
        favorite: false,
        availability: 0,
        price: "150 руб",
        oldPrice: "190 руб",
        imgUrl: img2,
        compound: "светодиоды, алюминиевый радиатор, пластиковый корпус",
        shelfLife: "84 месяца",
        nutritionalValue: "Эквивалент 75W",
        category: 'usefullStuff',
        get availabilityTitle() {
        if (this.availability) { return `В наличии ${this.availability}` }
        else return 'Нет в наличии'
        }
    },
    {
        id: 2403,
        title: "Скотч упаковочный",
        discount: false,
        favorite: false,
        availability: 35,
        price: "85 руб",
        oldPrice: null,
        imgUrl: img3,
        compound: "полипропиленовая основа, акриловый клей",
        shelfLife: "36 месяцев",
        nutritionalValue: "Длина: 50 м",
        category: 'usefullStuff',
        get availabilityTitle() {
        if (this.availability) { return `В наличии ${this.availability}` }
        else return 'Нет в наличии'
        }
    },
    {
        id: 2404,
        title: "Воздушные шары",
        discount: false,
        favorite: false,
        availability: 28,
        price: "120 руб",
        oldPrice: null,
        imgUrl: img4,
        compound: "латекс натуральный, красители",
        shelfLife: "24 месяца",
        nutritionalValue: "10 шт",
        category: 'usefullStuff',
        get availabilityTitle() {
        if (this.availability) { return `В наличии ${this.availability}` }
        else return 'Нет в наличии'
        }
    },
    {
        id: 2405,
        title: "Клей момент Универсальный",
        discount: false,
        favorite: false,
        availability: 20,
        price: "190 руб",
        oldPrice: null,
        imgUrl: img5,
        compound: "цианоакрилат, стабилизаторы",
        shelfLife: "24 месяца",
        nutritionalValue: "Объем: 30 г",
        category: 'usefullStuff',
        get availabilityTitle() {
        if (this.availability) { return `В наличии ${this.availability}` }
        else return 'Нет в наличии'
        }
    },
    {
        id: 2407,
        title: "Канцелярский набор",
        discount: false,
        favorite: false,
        availability: 25,
        price: "180 руб",
        oldPrice: null,
        imgUrl: img6,
        compound: "ручка шариковая, карандаш, ластик, точилка",
        shelfLife: "48 месяцев",
        nutritionalValue: "4 предмета",
        category: 'usefullStuff',
        get availabilityTitle() {
        if (this.availability) { return `В наличии ${this.availability}` }
        else return 'Нет в наличии'
        }
    },
    {
        id: 2408,
        title: "Свеча автомобильная",
        discount: false,
        favorite: false,
        availability: 40,
        price: "95 руб",
        oldPrice: null,
        imgUrl: img7,
        compound: "керамический изолятор, металлический электрод",
        shelfLife: "60 месяцев",
        nutritionalValue: "1 шт",
        category: 'usefullStuff',
        get availabilityTitle() {
        if (this.availability) { return `В наличии ${this.availability}` }
        else return 'Нет в наличии'
        }
    }
]
