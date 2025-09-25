export const dumplings = [
    {
        id: 1701,
        title: "Пельмени Сибирские говяжьи",
        discount: false,
        favorite: false,
        availability: 25,
        price: "320 руб",
        oldPrice: null,
        imgUrl: "",
        compound: "мука, говядина, лук, вода, соль, перец",
        shelfLife: "6 месяцев",
        nutritionalValue: "Белки: 12г, Жиры: 15г, Углеводы: 25г (на 100г)",
        get availabilityTitle() {
        if (this.availability) { return `В наличии ${this.availability}` }
        else return 'Нет в наличии'
        }
    },
    {
        id: 1702,
        title: "Вареники с картошкой",
        discount: true,
        favorite: false,
        availability: 18,
        price: "280 руб",
        oldPrice: "330 руб",
        imgUrl: "",
        compound: "мука, картофель, лук, масло, соль",
        shelfLife: "6 месяцев",
        nutritionalValue: "Белки: 5г, Жиры: 8г, Углеводы: 35г (на 100г)",
        get availabilityTitle() {
        if (this.availability) { return `В наличии ${this.availability}` }
        else return 'Нет в наличии'
        }
    },
    {
        id: 1703,
        title: "Равиоли с рикоттой и шпинатом",
        discount: false,
        favorite: false,
        availability: 12,
        price: "390 руб",
        oldPrice: null,
        imgUrl: "",
        compound: "мука, сыр рикотта, шпинат, яйцо, пармезан, мускатный орех",
        shelfLife: "6 месяцев",
        nutritionalValue: "Белки: 11г, Жиры: 10г, Углеводы: 30г (на 100г)",
        get availabilityTitle() {
        if (this.availability) { return `В наличии ${this.availability}` }
        else return 'Нет в наличии'
        }
    },
    {
        id: 1704,
        title: "Пельмени куриные",
        discount: false,
        favorite: false,
        availability: 30,
        price: "290 руб",
        oldPrice: null,
        imgUrl: "",
        compound: "мука, куриное филе, лук, вода, соль, специи",
        shelfLife: "6 месяцев",
        nutritionalValue: "Белки: 14г, Жиры: 10г, Углеводы: 26г (на 100г)",
        get availabilityTitle() {
        if (this.availability) { return `В наличии ${this.availability}` }
        else return 'Нет в наличии'
        }
    },
    {
        id: 1705,
        title: "Вареники с вишней",
        discount: false,
        favorite: false,
        availability: 15,
        price: "310 руб",
        oldPrice: null,
        imgUrl: "",
        compound: "мука, вишня, сахар, крахмал, ванилин",
        shelfLife: "6 месяцев",
        nutritionalValue: "Белки: 5г, Жиры: 3г, Углеводы: 45г (на 100г)",
        get availabilityTitle() {
        if (this.availability) { return `В наличии ${this.availability}` }
        else return 'Нет в наличии'
        }
    },
    {
        id: 1706,
        title: "Пельмени свино-говяжьи",
        discount: true,
        favorite: false,
        availability: 22,
        price: "350 руб",
        oldPrice: "400 руб",
        imgUrl: "",
        compound: "мука, свинина, говядина, лук, чеснок, специи",
        shelfLife: "6 месяцев",
        nutritionalValue: "Белки: 13г, Жиры: 18г, Углеводы: 24г (на 100г)",
        get availabilityTitle() {
        if (this.availability) { return `В наличии ${this.availability}` }
        else return 'Нет в наличии'
        }
    },
    {
        id: 1707,
        title: "Равиоли с мясом",
        discount: false,
        favorite: false,
        availability: 10,
        price: "420 руб",
        oldPrice: null,
        imgUrl: "",
        compound: "мука, говядина, свинина, пармезан, яйцо, специи",
        shelfLife: "6 месяцев",
        nutritionalValue: "Белки: 15г, Жиры: 12г, Углеводы: 28г (на 100г)",
        get availabilityTitle() {
        if (this.availability) { return `В наличии ${this.availability}` }
        else return 'Нет в наличии'
        }
    },
    {
        id: 1708,
        title: "Вареники с творогом",
        discount: false,
        favorite: false,
        availability: 20,
        price: "270 руб",
        oldPrice: null,
        imgUrl: "",
        compound: "мука, творог, яйцо, сахар, ванилин",
        shelfLife: "6 месяцев",
        nutritionalValue: "Белки: 10г, Жиры: 6г, Углеводы: 32г (на 100г)",
        get availabilityTitle() {
        if (this.availability) { return `В наличии ${this.availability}` }
        else return 'Нет в наличии'
        }
    }
]
