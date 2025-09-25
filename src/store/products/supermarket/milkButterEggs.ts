export const milkButterEggs = [
    {
        id: 1101,
        title: "Молоко пастеризованное Простоквашино 3.2%",
        discount: false,
        favorite: false,
        availability: 22,
        price: "89 руб",
        oldPrice: null,
        imgUrl: "",
        compound: "молоко цельное пастеризованное",
        shelfLife: "10 суток",
        nutritionalValue: "Белки: 3г, Жиры: 3.2г, Углеводы: 4.7г (на 100мл)",
        get availabilityTitle() {
        if (this.availability) { return `В наличии ${this.availability}` }
        else return 'Нет в наличии'
        }
    },
    {
        id: 1102,
        title: "Яйца куриные отборные С1",
        discount: true,
        favorite: false,
        availability: 30,
        price: "120 руб",
        oldPrice: "140 руб",
        imgUrl: "",
        compound: "яйца куриные пищевые",
        shelfLife: "30 суток",
        nutritionalValue: "Белки: 13г, Жиры: 11г, Углеводы: 1г (на 100г)",
        get availabilityTitle() {
        if (this.availability) { return `В наличии ${this.availability}` }
        else return 'Нет в наличии'
        }
    },
    {
        id: 1103,
        title: "Масло сливочное Вкусвилл 82.5%",
        discount: false,
        favorite: false,
        availability: 15,
        price: "180 руб",
        oldPrice: null,
        imgUrl: "",
        compound: "сливки пастеризованные, вода, соль",
        shelfLife: "45 суток",
        nutritionalValue: "Белки: 0.5г, Жиры: 82.5г, Углеводы: 0.8г (на 100г)",
        get availabilityTitle() {
        if (this.availability) { return `В наличии ${this.availability}` }
        else return 'Нет в наличии'
        }
    },
    {
        id: 1104,
        title: "Кефир Домик в деревне 2.5%",
        discount: false,
        favorite: false,
        availability: 18,
        price: "75 руб",
        oldPrice: null,
        imgUrl: "",
        compound: "молоко нормализованное, закваска",
        shelfLife: "12 суток",
        nutritionalValue: "Белки: 3г, Жиры: 2.5г, Углеводы: 4г (на 100мл)",
        get availabilityTitle() {
        if (this.availability) { return `В наличии ${this.availability}` }
        else return 'Нет в наличии'
        }
    },
    {
        id: 1105,
        title: "Сметана 20% Простоквашино",
        discount: true,
        favorite: false,
        availability: 25,
        price: "95 руб",
        oldPrice: "110 руб",
        imgUrl: "",
        compound: "сливки нормализованные, закваска",
        shelfLife: "20 суток",
        nutritionalValue: "Белки: 3г, Жиры: 20г, Углеводы: 3г (на 100г)",
        get availabilityTitle() {
        if (this.availability) { return `В наличии ${this.availability}` }
        else return 'Нет в наличии'
        }
    },
    {
        id: 1106,
        title: "Творог обезжиренный 0%",
        discount: false,
        favorite: false,
        availability: 12,
        price: "85 руб",
        oldPrice: null,
        imgUrl: "",
        compound: "творог из обезжиренного молока",
        shelfLife: "7 суток",
        nutritionalValue: "Белки: 18г, Жиры: 0г, Углеводы: 3г (на 100г)",
        get availabilityTitle() {
        if (this.availability) { return `В наличии ${this.availability}` }
        else return 'Нет в наличии'
        }
    },
    {
        id: 1107,
        title: "Йогурт питьевой Danone",
        discount: false,
        favorite: false,
        availability: 35,
        price: "55 руб",
        oldPrice: null,
        imgUrl: "",
        compound: "молоко нормализованное, закваска, фруктовое пюре",
        shelfLife: "25 суток",
        nutritionalValue: "Белки: 3г, Жиры: 2.5г, Углеводы: 12г (на 100мл)",
        get availabilityTitle() {
        if (this.availability) { return `В наличии ${this.availability}` }
        else return 'Нет в наличии'
        }
    },
    {
        id: 1108,
        title: "Масло подсолнечное Щедрое лето",
        discount: false,
        favorite: false,
        availability: 20,
        price: "150 руб",
        oldPrice: null,
        imgUrl: "",
        compound: "масло подсолнечное рафинированное",
        shelfLife: "18 месяцев",
        nutritionalValue: "Жиры: 99.9г, Витамин E: 40мг (на 100г)",
        get availabilityTitle() {
        if (this.availability) { return `В наличии ${this.availability}` }
        else return 'Нет в наличии'
        }
    },
    {
        id: 1109,
        title: "Сыр плавленый Дружба",
        discount: true,
        favorite: false,
        availability: 16,
        price: "65 руб",
        oldPrice: "75 руб",
        imgUrl: "",
        compound: "сыры, масло сливочное, сухое молоко, соли-плавители",
        shelfLife: "6 месяцев",
        nutritionalValue: "Белки: 20г, Жиры: 23г, Углеводы: 2г (на 100г)",
        get availabilityTitle() {
        if (this.availability) { return `В наличии ${this.availability}` }
        else return 'Нет в наличии'
        }
    },
    {
        id: 1110,
        title: "Молоко ультрапастеризованное Parmalat",
        discount: false,
        favorite: false,
        availability: 14,
        price: "110 руб",
        oldPrice: null,
        imgUrl: "",
        compound: "молоко цельное ультрапастеризованное",
        shelfLife: "6 месяцев",
        nutritionalValue: "Белки: 3.2г, Жиры: 3.5г, Углеводы: 4.8г (на 100мл)",
        get availabilityTitle() {
        if (this.availability) { return `В наличии ${this.availability}` }
        else return 'Нет в наличии'
        }
    }
]
