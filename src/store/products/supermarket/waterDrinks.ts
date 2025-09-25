export const waterDrinks = [
    {
        id: 1001,
        title: "Вода минеральная Боржоми",
        discount: false,
        favorite: false,
        availability: 25,
        price: "120 руб",
        oldPrice: null,
        imgUrl: "",
        compound: "минеральная вода натуральная газированная",
        shelfLife: "12 месяцев",
        nutritionalValue: "Кальций: 20мг, Магний: 15мг, Натрий: 120мг (на 1л)",
        get availabilityTitle() {
        if (this.availability) { return `В наличии ${this.availability}` }
        else return 'Нет в наличии'
        }
    },
    {
        id: 1002,
        title: "Сок Rich апельсиновый",
        discount: true,
        favorite: false,
        availability: 18,
        price: "95 руб",
        oldPrice: "110 руб",
        imgUrl: "",
        compound: "апельсиновый сок восстановленный, мякоть",
        shelfLife: "9 месяцев",
        nutritionalValue: "Углеводы: 11г, Витамин C: 25мг (на 100мл)",
        get availabilityTitle() {
        if (this.availability) { return `В наличии ${this.availability}` }
        else return 'Нет в наличии'
        }
    },
    {
        id: 1003,
        title: "Лимонад Буратино",
        discount: false,
        favorite: false,
        availability: 30,
        price: "85 руб",
        oldPrice: null,
        imgUrl: "",
        compound: "вода, сахар, лимонная кислота, ароматизатор",
        shelfLife: "6 месяцев",
        nutritionalValue: "Углеводы: 10г, Белки: 0г, Жиры: 0г (на 100мл)",
        get availabilityTitle() {
        if (this.availability) { return `В наличии ${this.availability}` }
        else return 'Нет в наличии'
        }
    },
    {
        id: 1004,
        title: "Энергетический напиток Burn",
        discount: false,
        favorite: false,
        availability: 15,
        price: "140 руб",
        oldPrice: null,
        imgUrl: "",
        compound: "вода, сахар, таурин, кофеин, витамины группы B",
        shelfLife: "12 месяцев",
        nutritionalValue: "Углеводы: 11г, Кофеин: 32мг (на 100мл)",
        get availabilityTitle() {
        if (this.availability) { return `В наличии ${this.availability}` }
        else return 'Нет в наличии'
        }
    },
    {
        id: 1005,
        title: "Вода питьевая Святой Источник",
        discount: false,
        favorite: false,
        availability: 40,
        price: "65 руб",
        oldPrice: null,
        imgUrl: "",
        compound: "вода питьевая негазированная",
        shelfLife: "12 месяцев",
        nutritionalValue: "Кальций: 5мг, Магний: 2мг (на 1л)",
        get availabilityTitle() {
        if (this.availability) { return `В наличии ${this.availability}` }
        else return 'Нет в наличии'
        }
    },
    {
        id: 1006,
        title: "Морс клюквенный Я",
        discount: true,
        favorite: false,
        availability: 12,
        price: "130 руб",
        oldPrice: "150 руб",
        imgUrl: "",
        compound: "клюквенный сок, вода, сахар, натуральный ароматизатор",
        shelfLife: "8 месяцев",
        nutritionalValue: "Углеводы: 12г, Витамин C: 15мг (на 100мл)",
        get availabilityTitle() {
        if (this.availability) { return `В наличии ${this.availability}` }
        else return 'Нет в наличии'
        }
    },
    {
        id: 1007,
        title: "Газировка Coca-Cola",
        discount: false,
        favorite: false,
        availability: 35,
        price: "90 руб",
        oldPrice: null,
        imgUrl: "",
        compound: "вода, сахар, диоксид углерода, краситель, кофеин",
        shelfLife: "9 месяцев",
        nutritionalValue: "Углеводы: 10.6г, Кофеин: 10мг (на 100мл)",
        get availabilityTitle() {
        if (this.availability) { return `В наличии ${this.availability}` }
        else return 'Нет в наличии'
        }
    },
    {
        id: 1008,
        title: "Иван-чай ферментированный",
        discount: false,
        favorite: false,
        availability: 8,
        price: "180 руб",
        oldPrice: null,
        imgUrl: "",
        compound: "трава иван-чая ферментированная",
        shelfLife: "24 месяца",
        nutritionalValue: "Белки: 0г, Жиры: 0г, Углеводы: 0г (на 100мл заваренного)",
        get availabilityTitle() {
        if (this.availability) { return `В наличии ${this.availability}` }
        else return 'Нет в наличии'
        }
    },
    {
        id: 1009,
        title: "Тоник Schweppes",
        discount: false,
        favorite: false,
        availability: 20,
        price: "110 руб",
        oldPrice: null,
        imgUrl: "",
        compound: "вода, сахар, хинин, лимонная кислота, натуральные ароматизаторы",
        shelfLife: "12 месяцев",
        nutritionalValue: "Углеводы: 8.9г, Хинин: 0.005% (на 100мл)",
        get availabilityTitle() {
        if (this.availability) { return `В наличии ${this.availability}` }
        else return 'Нет в наличии'
        }
    },
    {
        id: 1010,
        title: "Сок прямого отжима Добрый",
        discount: true,
        favorite: false,
        availability: 14,
        price: "160 руб",
        oldPrice: "185 руб",
        imgUrl: "",
        compound: "яблочный сок прямого отжима, витамин C",
        shelfLife: "12 месяцев",
        nutritionalValue: "Углеводы: 11г, Витамин C: 30мг (на 100мл)",
        get availabilityTitle() {
        if (this.availability) { return `В наличии ${this.availability}` }
        else return 'Нет в наличии'
        }
    }
]
