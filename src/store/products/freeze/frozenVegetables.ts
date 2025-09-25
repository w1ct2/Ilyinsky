export const frozenVegetables = [
    {
        id: 2001,
        title: "Овощная смесь 'Мексиканская'",
        discount: false,
        favorite: false,
        availability: 25,
        price: "180 руб",
        oldPrice: null,
        imgUrl: "",
        compound: "кукуруза, горошек, перец болгарский, фасоль стручковая, морковь",
        shelfLife: "12 месяцев",
        nutritionalValue: "Белки: 4г, Жиры: 1г, Углеводы: 12г (на 100г)",
        get availabilityTitle() {
        if (this.availability) { return `В наличии ${this.availability}` }
        else return 'Нет в наличии'
        }
    },
    {
        id: 2002,
        title: "Брокколи замороженная",
        discount: true,
        favorite: false,
        availability: 18,
        price: "150 руб",
        oldPrice: "180 руб",
        imgUrl: "",
        compound: "брокколи",
        shelfLife: "12 месяцев",
        nutritionalValue: "Белки: 3г, Жиры: 0г, Углеводы: 7г (на 100г)",
        get availabilityTitle() {
        if (this.availability) { return `В наличии ${this.availability}` }
        else return 'Нет в наличии'
        }
    },
    {
        id: 2003,
        title: "Шпинат замороженный",
        discount: false,
        favorite: false,
        availability: 15,
        price: "120 руб",
        oldPrice: null,
        imgUrl: "",
        compound: "шпинат",
        shelfLife: "12 месяцев",
        nutritionalValue: "Белки: 3г, Жиры: 1г, Углеводы: 4г (на 100г)",
        get availabilityTitle() {
        if (this.availability) { return `В наличии ${this.availability}` }
        else return 'Нет в наличии'
        }
    },
    {
        id: 2004,
        title: "Цветная капуста",
        discount: false,
        favorite: false,
        availability: 20,
        price: "130 руб",
        oldPrice: null,
        imgUrl: "",
        compound: "цветная капуста",
        shelfLife: "12 месяцев",
        nutritionalValue: "Белки: 2г, Жиры: 0г, Углеводы: 5г (на 100г)",
        get availabilityTitle() {
        if (this.availability) { return `В наличии ${this.availability}` }
        else return 'Нет в наличии'
        }
    },
    {
        id: 2005,
        title: "Смесь для рататуя",
        discount: false,
        favorite: false,
        availability: 12,
        price: "190 руб",
        oldPrice: null,
        imgUrl: "",
        compound: "баклажаны, кабачки, перец, помидоры, лук",
        shelfLife: "12 месяцев",
        nutritionalValue: "Белки: 2г, Жиры: 0г, Углеводы: 8г (на 100г)",
        get availabilityTitle() {
        if (this.availability) { return `В наличии ${this.availability}` }
        else return 'Нет в наличии'
        }
    },
    {
        id: 2006,
        title: "Зеленый горошек",
        discount: true,
        favorite: false,
        availability: 30,
        price: "95 руб",
        oldPrice: "115 руб",
        imgUrl: "",
        compound: "горошек зеленый",
        shelfLife: "12 месяцев",
        nutritionalValue: "Белки: 5г, Жиры: 0г, Углеводы: 14г (на 100г)",
        get availabilityTitle() {
        if (this.availability) { return `В наличии ${this.availability}` }
        else return 'Нет в наличии'
        }
    }
]
