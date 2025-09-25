export const coffeeTeaSweets = [
    {
        id: 1301,
        title: "Кофе молотый Jardin",
        discount: false,
        favorite: false,
        availability: 16,
        price: "420 руб",
        oldPrice: null,
        imgUrl: "",
        compound: "кофе арабика 100%",
        shelfLife: "18 месяцев",
        nutritionalValue: "Белки: 0г, Жиры: 0г, Углеводы: 0г (на 100г)",
        get availabilityTitle() {
        if (this.availability) { return `В наличии ${this.availability}` }
        else return 'Нет в наличии'
        }
    },
    {
        id: 1302,
        title: "Чай черный Ahmad English Breakfast",
        discount: true,
        favorite: false,
        availability: 24,
        price: "280 руб",
        oldPrice: "320 руб",
        imgUrl: "",
        compound: "чай черный байховый",
        shelfLife: "24 месяца",
        nutritionalValue: "Белки: 0г, Жиры: 0г, Углеводы: 0г (на 100г)",
        get availabilityTitle() {
        if (this.availability) { return `В наличии ${this.availability}` }
        else return 'Нет в наличии'
        }
    },
    {
        id: 1303,
        title: "Шоколад молочный Alpen Gold",
        discount: false,
        favorite: false,
        availability: 35,
        price: "95 руб",
        oldPrice: null,
        imgUrl: "",
        compound: "какао-масло, сахар, сухое молоко, какао тертое, лецитин",
        shelfLife: "12 месяцев",
        nutritionalValue: "Белки: 7г, Жиры: 30г, Углеводы: 58г (на 100г)",
        get availabilityTitle() {
        if (this.availability) { return `В наличии ${this.availability}` }
        else return 'Нет в наличии'
        }
    },
    {
        id: 1304,
        title: "Печенье Юбилейное",
        discount: false,
        favorite: false,
        availability: 28,
        price: "85 руб",
        oldPrice: null,
        imgUrl: "",
        compound: "мука пшеничная, сахар, масло растительное, патока, сода",
        shelfLife: "9 месяцев",
        nutritionalValue: "Белки: 7г, Жиры: 15г, Углеводы: 72г (на 100г)",
        get availabilityTitle() {
        if (this.availability) { return `В наличии ${this.availability}` }
        else return 'Нет в наличии'
        }
    },
    {
        id: 1305,
        title: "Кофе в капсулах Nescafe Dolce Gusto",
        discount: false,
        favorite: false,
        availability: 12,
        price: "390 руб",
        oldPrice: null,
        imgUrl: "",
        compound: "кофе молотый, капсула пищевой алюминий",
        shelfLife: "15 месяцев",
        nutritionalValue: "Белки: 0г, Жиры: 0г, Углеводы: 0г (на 100г)",
        get availabilityTitle() {
        if (this.availability) { return `В наличии ${this.availability}` }
        else return 'Нет в наличии'
        }
    },
    {
        id: 1306,
        title: "Зеленый чай с жасмином",
        discount: true,
        favorite: false,
        availability: 20,
        price: "180 руб",
        oldPrice: "210 руб",
        imgUrl: "",
        compound: "чай зеленый, цветки жасмина",
        shelfLife: "24 месяца",
        nutritionalValue: "Белки: 0г, Жиры: 0г, Углеводы: 0г (на 100г)",
        get availabilityTitle() {
        if (this.availability) { return `В наличии ${this.availability}` }
        else return 'Нет в наличии'
        }
    },
    {
        id: 1307,
        title: "Конфеты шоколадные Рот Фронт",
        discount: false,
        favorite: false,
        availability: 22,
        price: "320 руб",
        oldPrice: null,
        imgUrl: "",
        compound: "сахар, какао-масло, сухое молоко, орехи, вафли",
        shelfLife: "10 месяцев",
        nutritionalValue: "Белки: 6г, Жиры: 25г, Углеводы: 62г (на 100г)",
        get availabilityTitle() {
        if (this.availability) { return `В наличии ${this.availability}` }
        else return 'Нет в наличии'
        }
    },
    {
        id: 1308,
        title: "Какао-порошок Золотой ярлык",
        discount: false,
        favorite: false,
        availability: 15,
        price: "150 руб",
        oldPrice: null,
        imgUrl: "",
        compound: "какао-порошок натуральный",
        shelfLife: "18 месяцев",
        nutritionalValue: "Белки: 24г, Жиры: 15г, Углеводы: 10г (на 100г)",
        get availabilityTitle() {
        if (this.availability) { return `В наличии ${this.availability}` }
        else return 'Нет в наличии'
        }
    }
]