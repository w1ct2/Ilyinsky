import img1 from '@/assets/products-img/other/cleaningLaundry/tide.webp'
import img2 from '@/assets/products-img/other/cleaningLaundry/ariel.webp'
import img3 from '@/assets/products-img/other/cleaningLaundry/fairy.webp'
import img4 from '@/assets/products-img/other/cleaningLaundry/chistin.webp'
import img5 from '@/assets/products-img/other/cleaningLaundry/glade.webp'
import img6 from '@/assets/products-img/other/cleaningLaundry/meine.webp'
import img7 from '@/assets/products-img/other/cleaningLaundry/belizna.webp'
import img8 from '@/assets/products-img/other/cleaningLaundry/bags.webp'
export const cleaningLaundry = [
    {
        id: 2301,
        title: "Стиральный порошок Tide Автомат",
        discount: false,
        favorite: false,
        availability: 30,
        price: "450 руб",
        oldPrice: null,
        imgUrl: img1,
        compound: "ПАВ, энзимы, отбеливающие компоненты, отдушка",
        shelfLife: "36 месяцев",
        nutritionalValue: "Вес: 3 кг",
        category: 'cleaningLaundry',
        get availabilityTitle() {
        if (this.availability) { return `В наличии ${this.availability}` }
        else return 'Нет в наличии'
        }
    },
    {
        id: 2302,
        title: "Стиральный порошок Ariel Автомат Ленор",
        discount: true,
        favorite: false,
        availability: 25,
        price: "320 руб",
        oldPrice: "380 руб",
        imgUrl: img2,
        compound: "катионные ПАВ, парфюмерная композиция, консерванты",
        shelfLife: "36 месяцев",
        nutritionalValue: "Объем: 1.5 л",
        category: 'cleaningLaundry',
        get availabilityTitle() {
        if (this.availability) { return `В наличии ${this.availability}` }
        else return 'Нет в наличии'
        }
    },
    {
        id: 2303,
        title: "Моющее средство для посуды Fairy",
        discount: false,
        favorite: false,
        availability: 40,
        price: "180 руб",
        oldPrice: null,
        imgUrl: img3,
        compound: "ПАВ, лимонная кислота, консерванты, отдушка",
        shelfLife: "36 месяцев",
        nutritionalValue: "Объем: 450 мл",
        category: 'cleaningLaundry',
        get availabilityTitle() {
        if (this.availability) { return `В наличии ${this.availability}` }
        else return 'Нет в наличии'
        }
    },
    {
        id: 2304,
        title: "Чистящее средство Чистин",
        discount: false,
        favorite: false,
        availability: 28,
        price: "95 руб",
        oldPrice: null,
        imgUrl: img4,
        compound: "абразивные частицы, ПАВ, отбеливатель, ароматизатор",
        shelfLife: "36 месяцев",
        nutritionalValue: "Вес: 500 г",
        category: 'cleaningLaundry',
        get availabilityTitle() {
        if (this.availability) { return `В наличии ${this.availability}` }
        else return 'Нет в наличии'
        }
    },
    {
        id: 2305,
        title: "Освежитель воздуха Glade",
        discount: false,
        favorite: false,
        availability: 35,
        price: "220 руб",
        oldPrice: null,
        imgUrl: img5,
        compound: "пропелленты, парфюмерная композиция, этанол",
        shelfLife: "36 месяцев",
        nutritionalValue: "Объем: 300 мл",
        category: 'cleaningLaundry',
        get availabilityTitle() {
        if (this.availability) { return `В наличии ${this.availability}` }
        else return 'Нет в наличии'
        }
    },
    {
        id: 2306,
        title: "Жидкость для мытья стекол Meine",
        discount: true,
        favorite: false,
        availability: 22,
        price: "150 руб",
        oldPrice: "180 руб",
        imgUrl: img6,
        compound: "изопропиловый спирт, ПАВ, аммиак, отдушка",
        shelfLife: "36 месяцев",
        nutritionalValue: "Объем: 500 мл",
        category: 'cleaningLaundry',
        get availabilityTitle() {
        if (this.availability) { return `В наличии ${this.availability}` }
        else return 'Нет в наличии'
        }
    },
    {
        id: 2307,
        title: "Отбеливатель Белизна",
        discount: false,
        favorite: false,
        availability: 18,
        price: "65 руб",
        oldPrice: null,
        imgUrl: img7,
        compound: "гипохлорит натрия, вода, стабилизаторы",
        shelfLife: "12 месяцев",
        nutritionalValue: "Объем: 1 л",
        category: 'cleaningLaundry',
        get availabilityTitle() {
        if (this.availability) { return `В наличии ${this.availability}` }
        else return 'Нет в наличии'
        }
    },
    {
        id: 2308,
        title: "Мешки для мусора 120л",
        discount: false,
        favorite: false,
        availability: 50,
        price: "280 руб",
        oldPrice: null,
        imgUrl: img8,
        compound: "полиэтилен высокого давления",
        shelfLife: "60 месяцев",
        nutritionalValue: "30 шт",
        category: 'cleaningLaundry',
        get availabilityTitle() {
        if (this.availability) { return `В наличии ${this.availability}` }
        else return 'Нет в наличии'
        }
    }
]
