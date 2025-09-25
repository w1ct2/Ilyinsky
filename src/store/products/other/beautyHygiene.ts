export const beautyHygiene = [
    {
        id: 2201,
        title: "Шампунь Clear против перхоти",
        discount: false,
        favorite: false,
        availability: 35,
        price: "280 руб",
        oldPrice: null,
        imgUrl: "",
        compound: "вода, ПАВ, кондиционирующие компоненты, витамины",
        shelfLife: "36 месяцев",
        nutritionalValue: "Объем: 400 мл",
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
        imgUrl: "",
        compound: "фторид натрия, ксилит, абразивные компоненты",
        shelfLife: "36 месяцев",
        nutritionalValue: "Объем: 100 мл",
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
        imgUrl: "",
        compound: "вода, ПАВ, ментол, экстракт бамбука",
        shelfLife: "36 месяцев",
        nutritionalValue: "Объем: 250 мл",
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
        availability: 40,
        price: "190 руб",
        oldPrice: null,
        imgUrl: "",
        compound: "пропелленты, спирт, парфюмерная композиция",
        shelfLife: "36 месяцев",
        nutritionalValue: "Объем: 150 мл",
        get availabilityTitle() {
        if (this.availability) { return `В наличии ${this.availability}` }
        else return 'Нет в наличии'
        }
    },
    {
        id: 2205,
        title: "Крем для рук Neutrogena",
        discount: false,
        favorite: false,
        availability: 25,
        price: "320 руб",
        oldPrice: null,
        imgUrl: "",
        compound: "глицерин, масло ши, витамин E, гиалуроновая кислота",
        shelfLife: "24 месяца",
        nutritionalValue: "Объем: 75 мл",
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
        imgUrl: "",
        compound: "воски, масла, витамины A и E, SPF 15",
        shelfLife: "24 месяца",
        nutritionalValue: "Объем: 4.5 г",
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
        imgUrl: "",
        compound: "вода, ПАВ, глицерин, триклозан",
        shelfLife: "36 месяцев",
        nutritionalValue: "Объем: 300 мл",
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
        imgUrl: "",
        compound: "тканевая основа, гиалуроновая кислота, экстракт алоэ",
        shelfLife: "24 месяца",
        nutritionalValue: "1 шт",
        get availabilityTitle() {
        if (this.availability) { return `В наличии ${this.availability}` }
        else return 'Нет в наличии'
        }
    }
]
