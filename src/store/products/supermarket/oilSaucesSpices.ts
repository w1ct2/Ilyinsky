import img1 from '@/assets/products-img/supermarket/oilSaucesSpices/mr-ricco.webp'
import img2 from '@/assets/products-img/supermarket/oilSaucesSpices/heinz.webp'
import img3 from '@/assets/products-img/supermarket/oilSaucesSpices/kikkoman.webp'
import img4 from '@/assets/products-img/supermarket/oilSaucesSpices/olive-oil.webp'
import img5 from '@/assets/products-img/supermarket/oilSaucesSpices/pepper-mixture.webp'
import img6 from '@/assets/products-img/supermarket/oilSaucesSpices/mustard.webp'
import img7 from '@/assets/products-img/supermarket/oilSaucesSpices/indana.webp'
import img8 from '@/assets/products-img/supermarket/oilSaucesSpices/bbq.webp'
import img9 from '@/assets/products-img/supermarket/oilSaucesSpices/salt.webp'
import img10 from '@/assets/products-img/supermarket/oilSaucesSpices/vinegar.webp'
export const oilSaucesSpices = [
    {
        id: 1501,
        title: "Майонез Провансаль Mr. Ricco",
        discount: false,
        favorite: false,
        availability: 32,
        price: "120 руб",
        oldPrice: null,
        imgUrl: img1,
        compound: "масло подсолнечное, яичный желток, уксус, сахар, соль, горчица",
        shelfLife: "6 месяцев",
        nutritionalValue: "Белки: 1г, Жиры: 67г, Углеводы: 3г (на 100г)",
        get availabilityTitle() {
        if (this.availability) { return `В наличии ${this.availability}` }
        else return 'Нет в наличии'
        }
    },
    {
        id: 1502,
        title: "Кетчуп Heinz томатный",
        discount: true,
        favorite: false,
        availability: 28,
        price: "180 руб",
        oldPrice: "210 руб",
        imgUrl: img2,
        compound: "томатная паста, сахар, уксус, соль, специи",
        shelfLife: "12 месяцев",
        nutritionalValue: "Белки: 2г, Жиры: 0г, Углеводы: 23г (на 100г)",
        get availabilityTitle() {
        if (this.availability) { return `В наличии ${this.availability}` }
        else return 'Нет в наличии'
        }
    },
    {
        id: 1503,
        title: "Соевый соус Kikkoman",
        discount: false,
        favorite: false,
        availability: 25,
        price: "290 руб",
        oldPrice: null,
        imgUrl: img3,
        compound: "соя, пшеница, соль, вода",
        shelfLife: "24 месяца",
        nutritionalValue: "Белки: 6г, Жиры: 0г, Углеводы: 11г (на 100мл)",
        get availabilityTitle() {
        if (this.availability) { return `В наличии ${this.availability}` }
        else return 'Нет в наличии'
        }
    },
    {
        id: 1504,
        title: "Оливковое масло extra virgin",
        discount: false,
        favorite: false,
        availability: 15,
        price: "450 руб",
        oldPrice: null,
        imgUrl: img4,
        compound: "оливковое масло первого холодного отжима",
        shelfLife: "18 месяцев",
        nutritionalValue: "Жиры: 100г, Витамин E: 15мг (на 100г)",
        get availabilityTitle() {
        if (this.availability) { return `В наличии ${this.availability}` }
        else return 'Нет в наличии'
        }
    },
    {
        id: 1505,
        title: "Смесь перцев горошком",
        discount: false,
        favorite: false,
        availability: 40,
        price: "85 руб",
        oldPrice: null,
        imgUrl: img5,
        compound: "перец черный, белый, душистый, розовый горошком",
        shelfLife: "36 месяцев",
        nutritionalValue: "Белки: 11г, Жиры: 6г, Углеводы: 64г (на 100г)",
        get availabilityTitle() {
        if (this.availability) { return `В наличии ${this.availability}` }
        else return 'Нет в наличии'
        }
    },
    {
        id: 1506,
        title: "Горчица русская острая",
        discount: true,
        favorite: false,
        availability: 22,
        price: "65 руб",
        oldPrice: "80 руб",
        imgUrl: img6,
        compound: "горчичный порошок, вода, уксус, сахар, соль, масло",
        shelfLife: "9 месяцев",
        nutritionalValue: "Белки: 5г, Жиры: 6г, Углеводы: 12г (на 100г)",
        get availabilityTitle() {
        if (this.availability) { return `В наличии ${this.availability}` }
        else return 'Нет в наличии'
        }
    },
    {
        id: 1507,
        title: "Специи для курицы",
        discount: false,
        favorite: false,
        availability: 35,
        price: "75 руб",
        oldPrice: null,
        imgUrl: img7,
        compound: "куркума, паприка, чеснок сушеный, имбирь, кориандр",
        shelfLife: "24 месяца",
        nutritionalValue: "Белки: 8г, Жиры: 5г, Углеводы: 45г (на 100г)",
        get availabilityTitle() {
        if (this.availability) { return `В наличии ${this.availability}` }
        else return 'Нет в наличии'
        }
    },
    {
        id: 1508,
        title: "Соус барбекю",
        discount: false,
        favorite: false,
        availability: 18,
        price: "160 руб",
        oldPrice: null,
        imgUrl: img8,
        compound: "томатная паста, мед, уксус, специи, чеснок, лук",
        shelfLife: "10 месяцев",
        nutritionalValue: "Белки: 1г, Жиры: 0г, Углеводы: 28г (на 100г)",
        get availabilityTitle() {
        if (this.availability) { return `В наличии ${this.availability}` }
        else return 'Нет в наличии'
        }
    },
    {
        id: 1509,
        title: "Соль йодированная",
        discount: false,
        favorite: false,
        availability: 50,
        price: "25 руб",
        oldPrice: null,
        imgUrl: img9,
        compound: "соль поваренная, йодат калия",
        shelfLife: "24 месяца",
        nutritionalValue: "Натрий: 39г, Йод: 40мкг (на 100г)",
        get availabilityTitle() {
        if (this.availability) { return `В наличии ${this.availability}` }
        else return 'Нет в наличии'
        }
    },
    {
        id: 1510,
        title: "Бальзамический уксус",
        discount: true,
        favorite: false,
        availability: 12,
        price: "320 руб",
        oldPrice: "380 руб",
        imgUrl: img10,
        compound: "виноградное сусло, уксус винный",
        shelfLife: "36 месяцев",
        nutritionalValue: "Углеводы: 17г, Белки: 1г, Жиры: 0г (на 100мл)",
        get availabilityTitle() {
        if (this.availability) { return `В наличии ${this.availability}` }
        else return 'Нет в наличии'
        }
    }
]
