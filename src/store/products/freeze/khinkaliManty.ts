export const khinkaliManty = [
    {
        id: 1801,
        title: "Хинкали грузинские",
        discount: false,
        favorite: false,
        availability: 18,
        price: "480 руб",
        oldPrice: null,
        imgUrl: "",
        compound: "мука, говядина, свинина, лук, чеснок, зелень, специи",
        shelfLife: "6 месяцев",
        nutritionalValue: "Белки: 14г, Жиры: 16г, Углеводы: 22г (на 100г)",
        get availabilityTitle() {
        if (this.availability) { return `В наличии ${this.availability}` }
        else return 'Нет в наличии'
        }
    },
    {
        id: 1802,
        title: "Манты с говядиной",
        discount: true,
        favorite: false,
        availability: 15,
        price: "390 руб",
        oldPrice: "450 руб",
        imgUrl: "",
        compound: "мука, говядина, лук, курдючное сало, специи",
        shelfLife: "6 месяцев",
        nutritionalValue: "Белки: 13г, Жиры: 18г, Углеводы: 20г (на 100г)",
        get availabilityTitle() {
        if (this.availability) { return `В наличии ${this.availability}` }
        else return 'Нет в наличии'
        }
    },
    {
        id: 1803,
        title: "Хинкали с бараниной",
        discount: false,
        favorite: false,
        availability: 12,
        price: "520 руб",
        oldPrice: null,
        imgUrl: "",
        compound: "мука, баранина, лук, кинза, зира, перец",
        shelfLife: "6 месяцев",
        nutritionalValue: "Белки: 15г, Жиры: 20г, Углеводы: 21г (на 100г)",
        get availabilityTitle() {
        if (this.availability) { return `В наличии ${this.availability}` }
        else return 'Нет в наличии'
        }
    },
    {
        id: 1804,
        title: "Манты с тыквой",
        discount: false,
        favorite: false,
        availability: 10,
        price: "320 руб",
        oldPrice: null,
        imgUrl: "",
        compound: "мука, тыква, лук, курдючное сало, специи",
        shelfLife: "6 месяцев",
        nutritionalValue: "Белки: 6г, Жиры: 8г, Углеводы: 28г (на 100г)",
        get availabilityTitle() {
        if (this.availability) { return `В наличии ${this.availability}` }
        else return 'Нет в наличии'
        }
    },
    {
        id: 1805,
        title: "Хинкали куриные",
        discount: false,
        favorite: false,
        availability: 22,
        price: "420 руб",
        oldPrice: null,
        imgUrl: "",
        compound: "мука, куриное филе, лук, зелень, специи",
        shelfLife: "6 месяцев",
        nutritionalValue: "Белки: 16г, Жиры: 12г, Углеводы: 23г (на 100г)",
        get availabilityTitle() {
        if (this.availability) { return `В наличии ${this.availability}` }
        else return 'Нет в наличии'
        }
    },
    {
        id: 1806,
        title: "Манты ассорти",
        discount: true,
        favorite: false,
        availability: 14,
        price: "450 руб",
        oldPrice: "500 руб",
        imgUrl: "",
        compound: "мука, говядина, баранина, лук, специи",
        shelfLife: "6 месяцев",
        nutritionalValue: "Белки: 14г, Жиры: 19г, Углеводы: 19г (на 100г)",
        get availabilityTitle() {
        if (this.availability) { return `В наличии ${this.availability}` }
        else return 'Нет в наличии'
        }
    },
    {
        id: 1807,
        title: "Хинкали острые",
        discount: false,
        favorite: false,
        availability: 16,
        price: "460 руб",
        oldPrice: null,
        imgUrl: "",
        compound: "мука, свинина, говядина, перец чили, чеснок, специи",
        shelfLife: "6 месяцев",
        nutritionalValue: "Белки: 14г, Жиры: 17г, Углеводы: 22г (на 100г)",
        get availabilityTitle() {
        if (this.availability) { return `В наличии ${this.availability}` }
        else return 'Нет в наличии'
        }
    },
    {
        id: 1808,
        title: "Манты мини",
        discount: false,
        favorite: false,
        availability: 25,
        price: "280 руб",
        oldPrice: null,
        imgUrl: "",
        compound: "мука, говядина, лук, специи",
        shelfLife: "6 месяцев",
        nutritionalValue: "Белки: 12г, Жиры: 15г, Углеводы: 18г (на 100г)",
        get availabilityTitle() {
        if (this.availability) { return `В наличии ${this.availability}` }
        else return 'Нет в наличии'
        }
    }
]
