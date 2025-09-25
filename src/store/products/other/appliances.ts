export const appliances = [
    {
        id: 2501,
        title: "Чайник электрический Scarlett",
        discount: false,
        favorite: false,
        availability: 8,
        price: "1 890 руб",
        oldPrice: null,
        imgUrl: "",
        compound: "пластиковый корпус, металлический нагревательный элемент, терморегулятор",
        shelfLife: "120 месяцев",
        nutritionalValue: "Мощность: 2200W, Объем: 1.7л",
        get availabilityTitle() {
        if (this.availability) { return `В наличии ${this.availability}` }
        else return 'Нет в наличии'
        }
    },
    {
        id: 2502,
        title: "Кофеварка капельная Philips",
        discount: true,
        favorite: false,
        availability: 5,
        price: "3 490 руб",
        oldPrice: "4 200 руб",
        imgUrl: "",
        compound: "пластиковый корпус, стеклянная колба, нагревательный элемент, фильтр",
        shelfLife: "120 месяцев",
        nutritionalValue: "Мощность: 1000W, Объем: 1.2л",
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
        price: "8 990 руб",
        oldPrice: null,
        imgUrl: "",
        compound: "металлический корпус, стеклянная дверца, магнетрон, поворотный стол",
        shelfLife: "120 месяцев",
        nutritionalValue: "Мощность: 800W, Объем: 20л",
        get availabilityTitle() {
        if (this.availability) { return `В наличии ${this.availability}` }
        else return 'Нет в наличии'
        }
    },
    {
        id: 2504,
        title: "Блендер погружной Braun",
        discount: false,
        favorite: false,
        availability: 12,
        price: "2 850 руб",
        oldPrice: null,
        imgUrl: "",
        compound: "металлический двигатель, пластиковая насадка, ножи из нержавейки",
        shelfLife: "120 месяцев",
        nutritionalValue: "Мощность: 600W, Скоростей: 12",
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
        price: "1 590 руб",
        oldPrice: "1 890 руб",
        imgUrl: "",
        compound: "металлический корпус, нагревательные элементы, таймер",
        shelfLife: "120 месяцев",
        nutritionalValue: "Мощность: 900W, Отсеки: 2",
        get availabilityTitle() {
        if (this.availability) { return `В наличии ${this.availability}` }
        else return 'Нет в наличии'
        }
    },
    {
        id: 2506,
        title: "Электрочайник с термосом",
        discount: false,
        favorite: false,
        availability: 7,
        price: "2 990 руб",
        oldPrice: null,
        imgUrl: "",
        compound: "металлический корпус, двойные стенки, нагревательный элемент",
        shelfLife: "120 месяцев",
        nutritionalValue: "Мощность: 2000W, Объем: 1.5л",
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
        price: "4 590 руб",
        oldPrice: null,
        imgUrl: "",
        compound: "металлический корпус, нагревательные элементы, таймер, терморегулятор",
        shelfLife: "120 месяцев",
        nutritionalValue: "Мощность: 1200W, Объем: 15л",
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
        price: "1 290 руб",
        oldPrice: null,
        imgUrl: "",
        compound: "пластиковый корпус, стальные ножи, двигатель",
        shelfLife: "120 месяцев",
        nutritionalValue: "Мощность: 150W, Емкость: 50г",
        get availabilityTitle() {
        if (this.availability) { return `В наличии ${this.availability}` }
        else return 'Нет в наличии'
        }
    }
]
