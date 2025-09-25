export const usefulStuff = [
    {
        id: 2401,
        title: "Батарейки AA Duracell",
        discount: false,
        favorite: false,
        availability: 45,
        price: "280 руб",
        oldPrice: null,
        imgUrl: "",
        compound: "щелочные элементы, стальной корпус",
        shelfLife: "60 месяцев",
        nutritionalValue: "4 шт",
        get availabilityTitle() {
        if (this.availability) { return `В наличии ${this.availability}` }
        else return 'Нет в наличии'
        }
    },
    {
        id: 2402,
        title: "Лампочка LED 10W",
        discount: true,
        favorite: false,
        availability: 30,
        price: "150 руб",
        oldPrice: "190 руб",
        imgUrl: "",
        compound: "светодиоды, алюминиевый радиатор, пластиковый корпус",
        shelfLife: "84 месяца",
        nutritionalValue: "Эквивалент 75W",
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
        imgUrl: "",
        compound: "полипропиленовая основа, акриловый клей",
        shelfLife: "36 месяцев",
        nutritionalValue: "Длина: 50 м",
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
        imgUrl: "",
        compound: "латекс натуральный, красители",
        shelfLife: "24 месяца",
        nutritionalValue: "10 шт",
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
        imgUrl: "",
        compound: "цианоакрилат, стабилизаторы",
        shelfLife: "24 месяца",
        nutritionalValue: "Объем: 30 г",
        get availabilityTitle() {
        if (this.availability) { return `В наличии ${this.availability}` }
        else return 'Нет в наличии'
        }
    },
    {
        id: 2406,
        title: "Фонарик карманный",
        discount: true,
        favorite: false,
        availability: 15,
        price: "320 руб",
        oldPrice: "380 руб",
        imgUrl: "",
        compound: "пластиковый корпус, светодиоды, батарейный отсек",
        shelfLife: "120 месяцев",
        nutritionalValue: "3 режима работы",
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
        imgUrl: "",
        compound: "ручка шариковая, карандаш, ластик, точилка",
        shelfLife: "48 месяцев",
        nutritionalValue: "4 предмета",
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
        imgUrl: "",
        compound: "керамический изолятор, металлический электрод",
        shelfLife: "60 месяцев",
        nutritionalValue: "1 шт",
        get availabilityTitle() {
        if (this.availability) { return `В наличии ${this.availability}` }
        else return 'Нет в наличии'
        }
    }
]
