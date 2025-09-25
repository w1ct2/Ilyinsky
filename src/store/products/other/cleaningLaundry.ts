export const cleaningLaundry = [
    {
        id: 2301,
        title: "Стиральный порошок Tide Автомат",
        discount: false,
        favorite: false,
        availability: 30,
        price: "450 руб",
        oldPrice: null,
        imgUrl: "",
        compound: "ПАВ, энзимы, отбеливающие компоненты, отдушка",
        shelfLife: "36 месяцев",
        nutritionalValue: "Вес: 3 кг",
        get availabilityTitle() {
        if (this.availability) { return `В наличии ${this.availability}` }
        else return 'Нет в наличии'
        }
    },
    {
        id: 2302,
        title: "Кондиционер для белья Lenor",
        discount: true,
        favorite: false,
        availability: 25,
        price: "320 руб",
        oldPrice: "380 руб",
        imgUrl: "",
        compound: "катионные ПАВ, парфюмерная композиция, консерванты",
        shelfLife: "36 месяцев",
        nutritionalValue: "Объем: 1.5 л",
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
        imgUrl: "",
        compound: "ПАВ, лимонная кислота, консерванты, отдушка",
        shelfLife: "36 месяцев",
        nutritionalValue: "Объем: 450 мл",
        get availabilityTitle() {
        if (this.availability) { return `В наличии ${this.availability}` }
        else return 'Нет в наличии'
        }
    },
    {
        id: 2304,
        title: "Чистящее средство Comet",
        discount: false,
        favorite: false,
        availability: 28,
        price: "95 руб",
        oldPrice: null,
        imgUrl: "",
        compound: "абразивные частицы, ПАВ, отбеливатель, ароматизатор",
        shelfLife: "36 месяцев",
        nutritionalValue: "Вес: 500 г",
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
        imgUrl: "",
        compound: "пропелленты, парфюмерная композиция, этанол",
        shelfLife: "36 месяцев",
        nutritionalValue: "Объем: 300 мл",
        get availabilityTitle() {
        if (this.availability) { return `В наличии ${this.availability}` }
        else return 'Нет в наличии'
        }
    },
    {
        id: 2306,
        title: "Жидкость для мытья стекол",
        discount: true,
        favorite: false,
        availability: 22,
        price: "150 руб",
        oldPrice: "180 руб",
        imgUrl: "",
        compound: "изопропиловый спирт, ПАВ, аммиак, отдушка",
        shelfLife: "36 месяцев",
        nutritionalValue: "Объем: 500 мл",
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
        imgUrl: "",
        compound: "гипохлорит натрия, вода, стабилизаторы",
        shelfLife: "12 месяцев",
        nutritionalValue: "Объем: 1 л",
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
        imgUrl: "",
        compound: "полиэтилен высокого давления",
        shelfLife: "60 месяцев",
        nutritionalValue: "30 шт",
        get availabilityTitle() {
        if (this.availability) { return `В наличии ${this.availability}` }
        else return 'Нет в наличии'
        }
    }
]
