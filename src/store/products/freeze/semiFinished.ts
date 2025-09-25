export const semiFinished = [
    {
        id: 1901,
        title: "Котлеты домашние",
        discount: false,
        favorite: false,
        availability: 20,
        price: "320 руб",
        oldPrice: null,
        imgUrl: "",
        compound: "говядина, свинина, лук, хлеб, яйцо, специи",
        shelfLife: "3 месяца",
        nutritionalValue: "Белки: 15г, Жиры: 20г, Углеводы: 8г (на 100г)",
        get availabilityTitle() {
        if (this.availability) { return `В наличии ${this.availability}` }
        else return 'Нет в наличии'
        }
    },
    {
        id: 1902,
        title: "Фарш говяжий",
        discount: true,
        favorite: false,
        availability: 25,
        price: "380 руб",
        oldPrice: "430 руб",
        imgUrl: "",
        compound: "говядина",
        shelfLife: "3 месяца",
        nutritionalValue: "Белки: 18г, Жиры: 15г, Углеводы: 0г (на 100г)",
        get availabilityTitle() {
        if (this.availability) { return `В наличии ${this.availability}` }
        else return 'Нет в наличии'
        }
    },
    {
        id: 1903,
        title: "Блинчики с мясом",
        discount: false,
        favorite: false,
        availability: 18,
        price: "290 руб",
        oldPrice: null,
        imgUrl: "",
        compound: "мука, яйцо, молоко, говядина, лук, специи",
        shelfLife: "3 месяца",
        nutritionalValue: "Белки: 12г, Жиры: 14г, Углеводы: 22г (на 100г)",
        get availabilityTitle() {
        if (this.availability) { return `В наличии ${this.availability}` }
        else return 'Нет в наличии'
        }
    },
    {
        id: 1904,
        title: "Тефтели в томатном соусе",
        discount: false,
        favorite: false,
        availability: 15,
        price: "350 руб",
        oldPrice: null,
        imgUrl: "",
        compound: "говяжий фарш, рис, томатный соус, лук, специи",
        shelfLife: "3 месяца",
        nutritionalValue: "Белки: 11г, Жиры: 12г, Углеводы: 18г (на 100г)",
        get availabilityTitle() {
        if (this.availability) { return `В наличии ${this.availability}` }
        else return 'Нет в наличии'
        }
    },
    {
        id: 1905,
        title: "Голубцы замороженные",
        discount: false,
        favorite: false,
        availability: 12,
        price: "420 руб",
        oldPrice: null,
        imgUrl: "",
        compound: "капуста, говяжий фарш, рис, морковь, томатный соус",
        shelfLife: "3 месяца",
        nutritionalValue: "Белки: 10г, Жиры: 8г, Углеводы: 15г (на 100г)",
        get availabilityTitle() {
        if (this.availability) { return `В наличии ${this.availability}` }
        else return 'Нет в наличии'
        }
    },
    {
        id: 1906,
        title: "Фарш куриный",
        discount: true,
        favorite: false,
        availability: 30,
        price: "280 руб",
        oldPrice: "320 руб",
        imgUrl: "",
        compound: "куриное филе",
        shelfLife: "3 месяца",
        nutritionalValue: "Белки: 20г, Жиры: 8г, Углеводы: 0г (на 100г)",
        get availabilityTitle() {
        if (this.availability) { return `В наличии ${this.availability}` }
        else return 'Нет в наличии'
        }
    },
    {
        id: 1907,
        title: "Зразы картофельные с мясом",
        discount: false,
        favorite: false,
        availability: 14,
        price: "310 руб",
        oldPrice: null,
        imgUrl: "",
        compound: "картофель, говяжий фарш, лук, яйцо, специи",
        shelfLife: "3 месяца",
        nutritionalValue: "Белки: 9г, Жиры: 10г, Углеводы: 25г (на 100г)",
        get availabilityTitle() {
        if (this.availability) { return `В наличии ${this.availability}` }
        else return 'Нет в наличии'
        }
    },
    {
        id: 1908,
        title: "Фрикадельки для супа",
        discount: false,
        favorite: false,
        availability: 22,
        price: "240 руб",
        oldPrice: null,
        imgUrl: "",
        compound: "говяжий фарш, лук, зелень, специи",
        shelfLife: "3 месяца",
        nutritionalValue: "Белки: 16г, Жиры: 18г, Углеводы: 3г (на 100г)",
        get availabilityTitle() {
        if (this.availability) { return `В наличии ${this.availability}` }
        else return 'Нет в наличии'
        }
    }
]
