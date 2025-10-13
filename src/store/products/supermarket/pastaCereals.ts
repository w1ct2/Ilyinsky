import img1 from '@/assets/products-img/supermarket/pastaCereals/barilla-spagetti.webp'
import img2 from '@/assets/products-img/supermarket/pastaCereals/buckwheat-groats.webp'
import img3 from '@/assets/products-img/supermarket/pastaCereals/rice.webp'
import img4 from '@/assets/products-img/supermarket/pastaCereals/hercules.webp'
import img5 from '@/assets/products-img/supermarket/pastaCereals/makfa.webp'
import img6 from '@/assets/products-img/supermarket/pastaCereals/millet.webp'
import img7 from '@/assets/products-img/supermarket/pastaCereals/pearl.webp'

export const pastaCereals= [
    {
        id: 1401,
        title: "Макароны Barilla спагетти №5",
        discount: false,
        favorite: false,
        availability: 25,
        price: "135 руб",
        oldPrice: null,
        imgUrl: img1,
        compound: "мука из твердых сортов пшеницы, вода",
        shelfLife: "24 месяца",
        nutritionalValue: "Белки: 13г, Жиры: 1.5г, Углеводы: 71г (на 100г)",
        category: 'pastaCereals',
        get availabilityTitle() {
        if (this.availability) { return `В наличии ${this.availability}` }
        else return 'Нет в наличии'
        }
    },
    {
        id: 1402,
        title: "Гречневая крупа ядрица",
        discount: true,
        favorite: false,
        availability: 30,
        price: "95 руб",
        oldPrice: "110 руб",
        imgUrl: img2,
        compound: "крупа гречневая нежареная",
        shelfLife: "18 месяцев",
        nutritionalValue: "Белки: 13г, Жиры: 3г, Углеводы: 62г (на 100г)",
        category: 'pastaCereals',
        get availabilityTitle() {
        if (this.availability) { return `В наличии ${this.availability}` }
        else return 'Нет в наличии'
        }
    },
    {
        id: 1403,
        title: "Рис шлифованный",
        discount: false,
        favorite: false,
        availability: 22,
        price: "120 руб",
        oldPrice: null,
        imgUrl: img3,
        compound: "рис белый длиннозерный",
        shelfLife: "16 месяцев",
        nutritionalValue: "Белки: 7г, Жиры: 1г, Углеводы: 79г (на 100г)",
        category: 'pastaCereals',
        get availabilityTitle() {
        if (this.availability) { return `В наличии ${this.availability}` }
        else return 'Нет в наличии'
        }
    },
    {
        id: 1404,
        title: "Овсяные хлопья Геркулес",
        discount: false,
        favorite: false,
        availability: 28,
        price: "65 руб",
        oldPrice: null,
        imgUrl: img4,
        compound: "хлопья овсяные",
        shelfLife: "12 месяцев",
        nutritionalValue: "Белки: 12г, Жиры: 6г, Углеводы: 62г (на 100г)",
        category: 'pastaCereals',
        get availabilityTitle() {
        if (this.availability) { return `В наличии ${this.availability}` }
        else return 'Нет в наличии'
        }
    },
    {
        id: 1405,
        title: "Макароны Макфа ракушки",
        discount: false,
        favorite: false,
        availability: 18,
        price: "85 руб",
        oldPrice: null,
        imgUrl: img5,
        compound: "мука в/с, вода",
        shelfLife: "24 месяца",
        nutritionalValue: "Белки: 11г, Жиры: 1г, Углеводы: 72г (на 100г)",
        category: 'pastaCereals',
        get availabilityTitle() {
        if (this.availability) { return `В наличии ${this.availability}` }
        else return 'Нет в наличии'
        }
    },
    {
        id: 1406,
        title: "Пшеничная крупа полтавская",
        discount: true,
        favorite: false,
        availability: 15,
        price: "55 руб",
        oldPrice: "65 руб",
        imgUrl: img6,
        compound: "крупа пшеничная",
        shelfLife: "14 месяцев",
        nutritionalValue: "Белки: 11г, Жиры: 1г, Углеводы: 68г (на 100г)",
        category: 'pastaCereals',
        get availabilityTitle() {
        if (this.availability) { return `В наличии ${this.availability}` }
        else return 'Нет в наличии'
        }
    },
    {
        id: 1407,
        title: "Перловая крупа",
        discount: false,
        favorite: false,
        availability: 20,
        price: "45 руб",
        oldPrice: null,
        imgUrl: img7,
        compound: "крупа перловая",
        shelfLife: "16 месяцев",
        nutritionalValue: "Белки: 9г, Жиры: 1г, Углеводы: 73г (на 100г)",
        category: 'pastaCereals',
        get availabilityTitle() {
        if (this.availability) { return `В наличии ${this.availability}` }
        else return 'Нет в наличии'
        }
    },
]
