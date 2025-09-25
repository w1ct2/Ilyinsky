export const grill = [
    {
        id: 301,
        title: "Курица гриль",
        discount: false,
        favorite: false,
        availability: 6,
        price: "320 руб",
        oldPrice: null,
        imgUrl: "",
        compound: "курица, соль, перец, чеснок, специи для гриля",
        shelfLife: "48 часов",
        nutritionalValue: "Белки: 20г, Жиры: 15г, Углеводы: 0г (на 100г)",
        get availabilityTitle() {
        if (this.availability) { return `В наличии ${this.availability}` }
        else return 'Нет в наличии'
        }
    },
    {
        id: 302,
        title: "Ребрышки BBQ",
        discount: true,
        favorite: false,
        availability: 4,
        price: "450 руб",
        oldPrice: "520 руб",
        imgUrl: "",
        compound: "свиные ребрышки, соус BBQ, мед, горчица, специи",
        shelfLife: "48 часов",
        nutritionalValue: "Белки: 18г, Жиры: 25г, Углеводы: 8г (на 100г)",
        get availabilityTitle() {
        if (this.availability) { return `В наличии ${this.availability}` }
        else return 'Нет в наличии'
        }
    },
    {
        id: 303,
        title: "Шашлык из свинины",
        discount: false,
        favorite: false,
        availability: 8,
        price: "380 руб",
        oldPrice: null,
        imgUrl: "",
        compound: "свиная шейка, лук, специи для шашлыка, лимон",
        shelfLife: "24 часа",
        nutritionalValue: "Белки: 22г, Жиры: 18г, Углеводы: 2г (на 100г)",
        get availabilityTitle() {
        if (this.availability) { return `В наличии ${this.availability}` }
        else return 'Нет в наличии'
        }
    },
    {
        id: 304,
        title: "Креветки на гриле",
        discount: false,
        favorite: false,
        availability: 3,
        price: "580 руб",
        oldPrice: null,
        imgUrl: "",
        compound: "тигровые креветки, чеснок, оливковое масло, лимон, зелень",
        shelfLife: "24 часа",
        nutritionalValue: "Белки: 24г, Жиры: 8г, Углеводы: 2г (на 100г)",
        get availabilityTitle() {
        if (this.availability) { return `В наличии ${this.availability}` }
        else return 'Нет в наличии'
        }
    },
    {
        id: 305,
        title: "Бургер с говядиной",
        discount: false,
        favorite: false,
        availability: 12,
        price: "290 руб",
        oldPrice: null,
        imgUrl: "",
        compound: "говяжья котлета, булка бриошь, салат, помидор, сыр чеддер, соус",
        shelfLife: "24 часа",
        nutritionalValue: "Белки: 16г, Жиры: 22г, Углеводы: 28г (на 100г)",
        get availabilityTitle() {
        if (this.availability) { return `В наличии ${this.availability}` }
        else return 'Нет в наличии'
        }
    },
    {
        id: 306,
        title: "Овощи гриль",
        discount: true,
        favorite: false,
        availability: 10,
        price: "220 руб",
        oldPrice: "270 руб",
        imgUrl: "",
        compound: "кабачки, баклажаны, перец, помидоры, оливковое масло, прованские травы",
        shelfLife: "24 часа",
        nutritionalValue: "Белки: 3г, Жиры: 7г, Углеводы: 12г (на 100г)",
        get availabilityTitle() {
        if (this.availability) { return `В наличии ${this.availability}` }
        else return 'Нет в наличии'
        }
    },
    {
        id: 307,
        title: "Стейк из лосося",
        discount: false,
        favorite: false,
        availability: 5,
        price: "620 руб",
        oldPrice: null,
        imgUrl: "",
        compound: "филе лосося, лимон, укроп, оливковое масло, соль, перец",
        shelfLife: "24 часа",
        nutritionalValue: "Белки: 20г, Жиры: 15г, Углеводы: 0г (на 100г)",
        get availabilityTitle() {
        if (this.availability) { return `В наличии ${this.availability}` }
        else return 'Нет в наличии'
        }
    },
    {
        id: 308,
        title: "Куриные крылышки",
        discount: false,
        favorite: false,
        availability: 15,
        price: "280 руб",
        oldPrice: null,
        imgUrl: "",
        compound: "куриные крылья, соус терияки, кунжут, чеснок, имбирь",
        shelfLife: "48 часов",
        nutritionalValue: "Белки: 19г, Жиры: 16г, Углеводы: 5г (на 100г)",
        get availabilityTitle() {
        if (this.availability) { return `В наличии ${this.availability}` }
        else return 'Нет в наличии'
        }
    },
    {
        id: 309,
        title: "Люля-кебаб из баранины",
        discount: false,
        favorite: false,
        availability: 7,
        price: "410 руб",
        oldPrice: null,
        imgUrl: "",
        compound: "баранина, лук, зира, кинза, соль, перец",
        shelfLife: "24 часа",
        nutritionalValue: "Белки: 23г, Жиры: 20г, Углеводы: 1г (на 100г)",
        get availabilityTitle() {
        if (this.availability) { return `В наличии ${this.availability}` }
        else return 'Нет в наличии'
        }
    },
    {
        id: 310,
        title: "Свиная корейка",
        discount: true,
        favorite: false,
        availability: 4,
        price: "490 руб",
        oldPrice: "550 руб",
        imgUrl: "",
        compound: "свиная корейка, розмарин, тимьян, чеснок, оливковое масло",
        shelfLife: "48 часов",
        nutritionalValue: "Белки: 25г, Жиры: 22г, Углеводы: 0г (на 100г)",
        get availabilityTitle() {
        if (this.availability) { return `В наличии ${this.availability}` }
        else return 'Нет в наличии'
        }
    }
]