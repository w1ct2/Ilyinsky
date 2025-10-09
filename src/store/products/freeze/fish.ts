import img1 from '@/assets/products-img/freeze/fish/salmon-fillet.webp'
import img2 from '@/assets/products-img/freeze/fish/shrimp.webp'
import img3 from '@/assets/products-img/freeze/fish/pollock-fillet.webp'
import img4 from '@/assets/products-img/freeze/fish/squids.webp'
import img5 from '@/assets/products-img/freeze/fish/trout.webp'
import img6 from '@/assets/products-img/freeze/fish/mussels.webp'
import img7 from '@/assets/products-img/freeze/fish/octopus.webp'
export const fishSeafood = [
    {
        id: 2101,
        title: "Филе семги замороженное",
        discount: false,
        favorite: false,
        availability: 12,
        price: "890 руб",
        oldPrice: null,
        imgUrl: img1,
        compound: "филе семги",
        shelfLife: "6 месяцев",
        nutritionalValue: "Белки: 20г, Жиры: 15г, Углеводы: 0г (на 100г)",
        get availabilityTitle() {
        if (this.availability) { return `В наличии ${this.availability}` }
        else return 'Нет в наличии'
        }
    },
    {
        id: 2102,
        title: "Креветки тигровые",
        discount: true,
        favorite: false,
        availability: 8,
        price: "650 руб",
        oldPrice: "750 руб",
        imgUrl: img2,
        compound: "креветки тигровые замороженные",
        shelfLife: "6 месяцев",
        nutritionalValue: "Белки: 24г, Жиры: 2г, Углеводы: 0г (на 100г)",
        get availabilityTitle() {
        if (this.availability) { return `В наличии ${this.availability}` }
        else return 'Нет в наличии'
        }
    },
    {
        id: 2103,
        title: "Филе минтая",
        discount: false,
        favorite: false,
        availability: 25,
        price: "280 руб",
        oldPrice: null,
        imgUrl: img3,
        compound: "филе минтая",
        shelfLife: "6 месяцев",
        nutritionalValue: "Белки: 16г, Жиры: 1г, Углеводы: 0г (на 100г)",
        get availabilityTitle() {
        if (this.availability) { return `В наличии ${this.availability}` }
        else return 'Нет в наличии'
        }
    },
    {
        id: 2104,
        title: "Кальмары тушками",
        discount: false,
        favorite: false,
        availability: 15,
        price: "420 руб",
        oldPrice: null,
        imgUrl: img4,
        compound: "кальмары замороженные",
        shelfLife: "6 месяцев",
        nutritionalValue: "Белки: 18г, Жиры: 2г, Углеводы: 2г (на 100г)",
        get availabilityTitle() {
        if (this.availability) { return `В наличии ${this.availability}` }
        else return 'Нет в наличии'
        }
    },
    {
        id: 2105,
        title: "Стейки форели",
        discount: false,
        favorite: false,
        availability: 10,
        price: "580 руб",
        oldPrice: null,
        imgUrl: img5,
        compound: "стейки форели",
        shelfLife: "6 месяцев",
        nutritionalValue: "Белки: 19г, Жиры: 10г, Углеводы: 0г (на 100г)",
        get availabilityTitle() {
        if (this.availability) { return `В наличии ${this.availability}` }
        else return 'Нет в наличии'
        }
    },
    {
        id: 2106,
        title: "Мидии в раковинах",
        discount: true,
        favorite: false,
        availability: 18,
        price: "320 руб",
        oldPrice: "380 руб",
        imgUrl: img6,
        compound: "мидии замороженные",
        shelfLife: "6 месяцев",
        nutritionalValue: "Белки: 12г, Жиры: 2г, Углеводы: 3г (на 100г)",
        get availabilityTitle() {
        if (this.availability) { return `В наличии ${this.availability}` }
        else return 'Нет в наличии'
        }
    },
    {
        id: 2108,
        title: "Осьминоги малые",
        discount: false,
        favorite: false,
        availability: 6,
        price: "720 руб",
        oldPrice: null,
        imgUrl: img7,
        compound: "осьминоги замороженные",
        shelfLife: "6 месяцев",
        nutritionalValue: "Белки: 15г, Жиры: 1г, Углеводы: 4г (на 100г)",
        get availabilityTitle() {
        if (this.availability) { return `В наличии ${this.availability}` }
        else return 'Нет в наличии'
        }
    }
]
