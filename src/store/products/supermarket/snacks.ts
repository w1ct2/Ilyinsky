import img1 from '@/assets/products-img/supermarket/snacks/lays-sour-cream.webp'
import img2 from '@/assets/products-img/supermarket/snacks/kuraga.webp'
import img3 from '@/assets/products-img/supermarket/snacks/kuraga.webp'
import img9 from '@/assets/products-img/supermarket/snacks/prunes.webp'
import img4 from '@/assets/products-img/supermarket/snacks/popcorn.webp'
import img5 from '@/assets/products-img/supermarket/snacks/dates.webp'
import img6 from '@/assets/products-img/supermarket/snacks/hrusteam.webp'
import img7 from '@/assets/products-img/supermarket/snacks/raisin.webp'
import img8 from '@/assets/products-img/supermarket/snacks/bite.webp'
import img10 from '@/assets/products-img/supermarket/snacks/seeds.webp'
export const snacksDriedFruits = [
    {
        id: 1201,
        title: "Чипсы Lays со сметаной и луком",
        discount: false,
        favorite: false,
        availability: 28,
        price: "145 руб",
        oldPrice: null,
        imgUrl: img1,
        compound: "картофель, масло подсолнечное, сметано-луковый вкус, соль",
        shelfLife: "6 месяцев",
        nutritionalValue: "Белки: 6г, Жиры: 35г, Углеводы: 53г (на 100г)",
        get availabilityTitle() {
        if (this.availability) { return `В наличии ${this.availability}` }
        else return 'Нет в наличии'
        }
    },
    {
        id: 1202,
        title: "Курага узбекская",
        discount: true,
        favorite: false,
        availability: 15,
        price: "320 руб",
        oldPrice: "380 руб",
        imgUrl: img2,
        compound: "абрикосы сушеные без косточки",
        shelfLife: "12 месяцев",
        nutritionalValue: "Белки: 5г, Жиры: 0.5г, Углеводы: 63г (на 100г)",
        get availabilityTitle() {
        if (this.availability) { return `В наличии ${this.availability}` }
        else return 'Нет в наличии'
        }
    },
    {
        id: 1203,
        title: "Орехи кешью жареные",
        discount: false,
        favorite: false,
        availability: 12,
        price: "450 руб",
        oldPrice: null,
        imgUrl: img3,
        compound: "кешью жареный, соль",
        shelfLife: "9 месяцев",
        nutritionalValue: "Белки: 18г, Жиры: 44г, Углеводы: 30г (на 100г)",
        get availabilityTitle() {
        if (this.availability) { return `В наличии ${this.availability}` }
        else return 'Нет в наличии'
        }
    },
    {
        id: 1204,
        title: "Попкорн соленый",
        discount: false,
        favorite: false,
        availability: 20,
        price: "85 руб",
        oldPrice: null,
        imgUrl: img4,
        compound: "кукуруза, пальмовое масло, соль",
        shelfLife: "8 месяцев",
        nutritionalValue: "Белки: 7г, Жиры: 28г, Углеводы: 57г (на 100г)",
        get availabilityTitle() {
        if (this.availability) { return `В наличии ${this.availability}` }
        else return 'Нет в наличии'
        }
    },
    {
        id: 1205,
        title: "Финики королевские",
        discount: false,
        favorite: false,
        availability: 18,
        price: "280 руб",
        oldPrice: null,
        imgUrl: img5,
        compound: "финики сушеные с косточкой",
        shelfLife: "18 месяцев",
        nutritionalValue: "Белки: 2г, Жиры: 0.5г, Углеводы: 75г (на 100г)",
        get availabilityTitle() {
        if (this.availability) { return `В наличии ${this.availability}` }
        else return 'Нет в наличии'
        }
    },
    {
        id: 1206,
        title: "Сухарики Хрусteam королевский краб",
        discount: true,
        favorite: false,
        availability: 25,
        price: "65 руб",
        oldPrice: "75 руб",
        imgUrl: img6,
        compound: "хлеб, масло растительное, вкусоароматическая добавка 'пицца'",
        shelfLife: "5 месяцев",
        nutritionalValue: "Белки: 10г, Жиры: 25г, Углеводы: 55г (на 100г)",
        get availabilityTitle() {
        if (this.availability) { return `В наличии ${this.availability}` }
        else return 'Нет в наличии'
        }
    },
    {
        id: 1207,
        title: "Изюм кишмиш",
        discount: false,
        favorite: false,
        availability: 22,
        price: "190 руб",
        oldPrice: null,
        imgUrl: img7,
        compound: "виноград сушеный без косточек",
        shelfLife: "12 месяцев",
        nutritionalValue: "Белки: 3г, Жиры: 0.6г, Углеводы: 79г (на 100г)",
        get availabilityTitle() {
        if (this.availability) { return `В наличии ${this.availability}` }
        else return 'Нет в наличии'
        }
    },
    {
        id: 1208,
        title: "Батончики мюсли Bite",
        discount: false,
        favorite: false,
        availability: 30,
        price: "55 руб",
        oldPrice: null,
        imgUrl: img8,
        compound: "овсяные хлопья, мед, сухофрукты, орехи, семечки",
        shelfLife: "7 месяцев",
        nutritionalValue: "Белки: 8г, Жиры: 12г, Углеводы: 60г (на 100г)",
        get availabilityTitle() {
        if (this.availability) { return `В наличии ${this.availability}` }
        else return 'Нет в наличии'
        }
    },
    {
        id: 1209,
        title: "Чернослив без косточки",
        discount: true,
        favorite: false,
        availability: 14,
        price: "240 руб",
        oldPrice: "290 руб",
        imgUrl: img9,
        compound: "сливы сушеные без косточки",
        shelfLife: "12 месяцев",
        nutritionalValue: "Белки: 2г, Жиры: 0.7г, Углеводы: 57г (на 100г)",
        get availabilityTitle() {
        if (this.availability) { return `В наличии ${this.availability}` }
        else return 'Нет в наличии'
        }
    },
    {
        id: 1210,
        title: "Семечки подсолнечные жареные",
        discount: false,
        favorite: false,
        availability: 35,
        price: "75 руб",
        oldPrice: null,
        imgUrl: img10,
        compound: "семена подсолнечника жареные, соль",
        shelfLife: "6 месяцев",
        nutritionalValue: "Белки: 21г, Жиры: 53г, Углеводы: 11г (на 100г)",
        get availabilityTitle() {
        if (this.availability) { return `В наличии ${this.availability}` }
        else return 'Нет в наличии'
        }
    }
]
