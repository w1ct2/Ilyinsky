import img1 from '@/assets/products-img/other/beautyHygiene/clear.webp'
import img2 from '@/assets/products-img/other/beautyHygiene/colgate.webp'
import img3 from '@/assets/products-img/other/beautyHygiene/nivea-men.webp'
import img4 from '@/assets/products-img/other/beautyHygiene/rexona.webp'
import img5 from '@/assets/products-img/other/beautyHygiene/evo-cream.webp'
import img6 from '@/assets/products-img/other/beautyHygiene/librederm.webp'
import img7 from '@/assets/products-img/other/beautyHygiene/Safeguard.webp'
import img8 from '@/assets/products-img/other/beautyHygiene/farmstay.webp'
export const beautyHygiene = [
    {
        id: 2201,
        title: "Шампунь Clear против перхоти",
        discount: false,
        favorite: false,
        availability: 35,
        price: "280 руб",
        oldPrice: null,
        imgUrl: img1,
        compound: "вода, ПАВ, кондиционирующие компоненты, витамины",
        shelfLife: "36 месяцев",
        nutritionalValue: "Объем: 400 мл",
        category: 'beautyHygiene',
        get availabilityTitle() {
        if (this.availability) { return `В наличии ${this.availability}` }
        else return 'Нет в наличии'
        }
    },
    {
        id: 2202,
        title: "Зубная паста Colgate Тотал",
        discount: true,
        favorite: false,
        availability: 50,
        price: "150 руб",
        oldPrice: "180 руб",
        imgUrl: img2,
        compound: "фторид натрия, ксилит, абразивные компоненты",
        shelfLife: "36 месяцев",
        nutritionalValue: "Объем: 100 мл",
        category: 'beautyHygiene',
        get availabilityTitle() {
        if (this.availability) { return `В наличии ${this.availability}` }
        else return 'Нет в наличии'
        }
    },
    {
        id: 2203,
        title: "Гель для душа Nivea Men",
        discount: false,
        favorite: false,
        availability: 28,
        price: "220 руб",
        oldPrice: null,
        imgUrl: img3,
        compound: "вода, ПАВ, ментол, экстракт бамбука",
        shelfLife: "36 месяцев",
        nutritionalValue: "Объем: 250 мл",
        category: 'beautyHygiene',
        get availabilityTitle() {
        if (this.availability) { return `В наличии ${this.availability}` }
        else return 'Нет в наличии'
        }
    },
    {
        id: 2204,
        title: "Дезодорант Rexona аэрозоль",
        discount: false,
        favorite: false,
        availability: 0,
        price: "190 руб",
        oldPrice: null,
        imgUrl: img4,
        compound: "пропелленты, спирт, парфюмерная композиция",
        shelfLife: "36 месяцев",
        nutritionalValue: "Объем: 150 мл",
        category: 'beautyHygiene',
        get availabilityTitle() {
        if (this.availability) { return `В наличии ${this.availability}` }
        else return 'Нет в наличии'
        }
    },
    {
        id: 2205,
        title: "Крем для рук",
        discount: false,
        favorite: false,
        availability: 25,
        price: "320 руб",
        oldPrice: null,
        imgUrl: img5,
        compound: "глицерин, масло ши, витамин E, гиалуроновая кислота",
        shelfLife: "24 месяца",
        nutritionalValue: "Объем: 75 мл",
        category: 'beautyHygiene',
        get availabilityTitle() {
        if (this.availability) { return `В наличии ${this.availability}` }
        else return 'Нет в наличии'
        }
    },
    {
        id: 2206,
        title: "Бальзам для губ Librederm",
        discount: true,
        favorite: false,
        availability: 30,
        price: "180 руб",
        oldPrice: "210 руб",
        imgUrl: img6,
        compound: "воски, масла, витамины A и E, SPF 15",
        shelfLife: "24 месяца",
        nutritionalValue: "Объем: 4.5 г",
        category: 'beautyHygiene',
        get availabilityTitle() {
        if (this.availability) { return `В наличии ${this.availability}` }
        else return 'Нет в наличии'
        }
    },
    {
        id: 2207,
        title: "Жидкое мыло Safeguard",
        discount: false,
        favorite: false,
        availability: 45,
        price: "120 руб",
        oldPrice: null,
        imgUrl: img7,
        compound: "вода, ПАВ, глицерин, триклозан",
        shelfLife: "36 месяцев",
        nutritionalValue: "Объем: 300 мл",
        category: 'beautyHygiene',
        get availabilityTitle() {
        if (this.availability) { return `В наличии ${this.availability}` }
        else return 'Нет в наличии'
        }
    },
    {
        id: 2208,
        title: "Маска тканевая для лица",
        discount: false,
        favorite: false,
        availability: 20,
        price: "85 руб",
        oldPrice: null,
        imgUrl: img8,
        compound: "тканевая основа, гиалуроновая кислота, экстракт алоэ",
        shelfLife: "24 месяца",
        nutritionalValue: "1 шт",
        category: 'beautyHygiene',
        get availabilityTitle() {
        if (this.availability) { return `В наличии ${this.availability}` }
        else return 'Нет в наличии'
        }
    }
]
