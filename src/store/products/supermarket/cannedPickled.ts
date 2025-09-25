export const cannedPickled = [
    {
        id: 1601,
        title: "Тунец в собственном соку",
        discount: false,
        favorite: false,
        availability: 20,
        price: "190 руб",
        oldPrice: null,
        imgUrl: "",
        compound: "тунец, соль, вода",
        shelfLife: "36 месяцев",
        nutritionalValue: "Белки: 26г, Жиры: 1г, Углеводы: 0г (на 100г)",
        get availabilityTitle() {
        if (this.availability) { return `В наличии ${this.availability}` }
        else return 'Нет в наличии'
        }
    },
    {
        id: 1602,
        title: "Кукуруза Bonduelle сладкая",
        discount: true,
        favorite: false,
        availability: 25,
        price: "85 руб",
        oldPrice: "100 руб",
        imgUrl: "",
        compound: "кукуруза зерновая, вода, сахар, соль",
        shelfLife: "24 месяца",
        nutritionalValue: "Белки: 3г, Жиры: 1г, Углеводы: 14г (на 100г)",
        get availabilityTitle() {
        if (this.availability) { return `В наличии ${this.availability}` }
        else return 'Нет в наличии'
        }
    },
    {
        id: 1603,
        title: "Огурцы маринованные",
        discount: false,
        favorite: false,
        availability: 18,
        price: "120 руб",
        oldPrice: null,
        imgUrl: "",
        compound: "огурцы, вода, уксус, соль, сахар, специи, укроп",
        shelfLife: "24 месяца",
        nutritionalValue: "Белки: 1г, Жиры: 0г, Углеводы: 3г (на 100г)",
        get availabilityTitle() {
        if (this.availability) { return `В наличии ${this.availability}` }
        else return 'Нет в наличии'
        }
    },
    {
        id: 1604,
        title: "Шпроты в масле",
        discount: false,
        favorite: false,
        availability: 15,
        price: "220 руб",
        oldPrice: null,
        imgUrl: "",
        compound: "шпроты, масло подсолнечное, соль",
        shelfLife: "24 месяца",
        nutritionalValue: "Белки: 17г, Жиры: 32г, Углеводы: 0г (на 100г)",
        get availabilityTitle() {
        if (this.availability) { return `В наличии ${this.availability}` }
        else return 'Нет в наличии'
        }
    },
    {
        id: 1605,
        title: "Фасоль стручковая консервированная",
        discount: false,
        favorite: false,
        availability: 12,
        price: "75 руб",
        oldPrice: null,
        imgUrl: "",
        compound: "фасоль стручковая, вода, соль",
        shelfLife: "24 месяца",
        nutritionalValue: "Белки: 2г, Жиры: 0г, Углеводы: 4г (на 100г)",
        get availabilityTitle() {
        if (this.availability) { return `В наличии ${this.availability}` }
        else return 'Нет в наличии'
        }
    },
    {
        id: 1606,
        title: "Икра кабачковая",
        discount: true,
        favorite: false,
        availability: 22,
        price: "95 руб",
        oldPrice: "115 руб",
        imgUrl: "",
        compound: "кабачки, томатная паста, морковь, лук, масло, соль, специи",
        shelfLife: "18 месяцев",
        nutritionalValue: "Белки: 2г, Жиры: 7г, Углеводы: 9г (на 100г)",
        get availabilityTitle() {
        if (this.availability) { return `В наличии ${this.availability}` }
        else return 'Нет в наличии'
        }
    },
    {
        id: 1607,
        title: "Ананасы кусочками",
        discount: false,
        favorite: false,
        availability: 16,
        price: "150 руб",
        oldPrice: null,
        imgUrl: "",
        compound: "ананасы, вода, сахар",
        shelfLife: "36 месяцев",
        nutritionalValue: "Белки: 0г, Жиры: 0г, Углеводы: 16г (на 100г)",
        get availabilityTitle() {
        if (this.availability) { return `В наличии ${this.availability}` }
        else return 'Нет в наличии'
        }
    },
    {
        id: 1608,
        title: "Квашеная капуста",
        discount: false,
        favorite: false,
        availability: 30,
        price: "65 руб",
        oldPrice: null,
        imgUrl: "",
        compound: "капуста белокочанная, морковь, соль",
        shelfLife: "6 месяцев",
        nutritionalValue: "Белки: 2г, Жиры: 0г, Углеводы: 5г (на 100г)",
        get availabilityTitle() {
        if (this.availability) { return `В наличии ${this.availability}` }
        else return 'Нет в наличии'
        }
    }
    ]
