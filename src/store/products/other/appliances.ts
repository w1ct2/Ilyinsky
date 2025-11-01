import img1 from '@/assets/products-img/other/appliances/Scarlett.webp'
import img2 from '@/assets/products-img/other/appliances/comfee.webp'
import img3 from '@/assets/products-img/other/appliances/samsung.webp'
import img4 from '@/assets/products-img/other/appliances/blander.webp'
import img5 from '@/assets/products-img/other/appliances/de-longhi.webp'
import img6 from '@/assets/products-img/other/appliances/moulinex.webp'
import img7 from '@/assets/products-img/other/appliances/coffee-grinder.webp'

export const appliances = [
    {
        id: 2501,
        title: "Чайник электрический Scarlett",
        discount: false,
        favorite: false,
        availability: 8,
        price: "1890 руб",
        oldPrice: null,
        imgUrl: img1,
        compound: "пластиковый корпус, металлический нагревательный элемент, терморегулятор",
        shelfLife: "120 месяцев",
        nutritionalValue: "Мощность: 2200W, Объем: 1.7л",
        category: 'appliances',
        get availabilityTitle() {
        if (this.availability) { return `В наличии ${this.availability}` }
        else return 'Нет в наличии'
        }
    },
    {
        id: 2502,
        title: "Кофеварка капельная Comfee",
        discount: true,
        favorite: false,
        availability: 0,
        price: "3490 руб",
        oldPrice: "4200 руб",
        imgUrl: img2,
        compound: "пластиковый корпус, стеклянная колба, нагревательный элемент, фильтр",
        shelfLife: "120 месяцев",
        nutritionalValue: "Мощность: 1000W, Объем: 1.2л",
        category: 'appliances',
        get availabilityTitle() {
        if (this.availability) { return `В наличии ${this.availability}` }
        else return 'Нет в наличии'
        }
    },
    {
        id: 2503,
        title: "Микроволновая печь Samsung",
        discount: false,
        favorite: false,
        availability: 6,
        price: "8990 руб",
        oldPrice: null,
        imgUrl: img3,
        compound: "металлический корпус, стеклянная дверца, магнетрон, поворотный стол",
        shelfLife: "120 месяцев",
        nutritionalValue: "Мощность: 800W, Объем: 20л",
        category: 'appliances',
        get availabilityTitle() {
        if (this.availability) { return `В наличии ${this.availability}` }
        else return 'Нет в наличии'
        }
    },
    {
        id: 2504,
        title: "Блендер погружной",
        discount: false,
        favorite: false,
        availability: 12,
        price: "2850 руб",
        oldPrice: null,
        imgUrl: img4,
        compound: "металлический двигатель, пластиковая насадка, ножи из нержавейки",
        shelfLife: "120 месяцев",
        nutritionalValue: "Мощность: 600W, Скоростей: 12",
        category: 'appliances',
        get availabilityTitle() {
        if (this.availability) { return `В наличии ${this.availability}` }
        else return 'Нет в наличии'
        }
    },
    {
        id: 2505,
        title: "Тостер De'Longhi",
        discount: true,
        favorite: false,
        availability: 10,
        price: "1590 руб",
        oldPrice: "1890 руб",
        imgUrl: img5,
        compound: "металлический корпус, нагревательные элементы, таймер",
        shelfLife: "120 месяцев",
        nutritionalValue: "Мощность: 900W, Отсеки: 2",
        category: 'appliances',
        get availabilityTitle() {
        if (this.availability) { return `В наличии ${this.availability}` }
        else return 'Нет в наличии'
        }
    },
    {
        id: 2507,
        title: "Мини-печь Moulinex",
        discount: false,
        favorite: false,
        availability: 4,
        price: "4590 руб",
        oldPrice: null,
        imgUrl: img6,
        compound: "металлический корпус, нагревательные элементы, таймер, терморегулятор",
        shelfLife: "120 месяцев",
        nutritionalValue: "Мощность: 1200W, Объем: 15л",
        category: 'appliances',
        get availabilityTitle() {
        if (this.availability) { return `В наличии ${this.availability}` }
        else return 'Нет в наличии'
        }
    },
    {
        id: 2508,
        title: "Кофемолка электрическая",
        discount: false,
        favorite: false,
        availability: 9,
        price: "1290 руб",
        oldPrice: null,
        imgUrl: img7,
        compound: "пластиковый корпус, стальные ножи, двигатель",
        shelfLife: "120 месяцев",
        nutritionalValue: "Мощность: 150W, Емкость: 50г",
        category: 'appliances',
        get availabilityTitle() {
        if (this.availability) { return `В наличии ${this.availability}` }
        else return 'Нет в наличии'
        }
    }
]
