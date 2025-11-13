import img1 from '@/assets/products-img/cooking/pizza/pepperonny.png'
import img2 from '@/assets/products-img/cooking/pizza/margoritta.png'
import img3 from '@/assets/products-img/cooking/pizza/four_cheeses.png'
import img4 from '@/assets/products-img/cooking/pizza/zotman.jpeg'
import img5 from '@/assets/products-img/cooking/pizza/carbonara.webp'
import img6 from '@/assets/products-img/cooking/pizza/diablo.jpeg'
import img7 from '@/assets/products-img/cooking/pizza/vegetarian.png'
import img8 from '@/assets/products-img/cooking/pizza/meat.png'
import img9 from '@/assets/products-img/cooking/pizza/ceasar.png'
import img10 from '@/assets/products-img/cooking/pizza/mix.png'
export const pizza = [
    {
        id: 201,
        title: "Пицца Пепперони",
        discount: false,
        favorite: false,
        availability: 8,
        price: "450 руб",
        oldPrice: null,
        imgUrl: img1,
        compound: "томатный соус, сыр моцарелла, пепперони, орегано",
        shelfLife: "24 часа",
        nutritionalValue: "Белки: 12г, Жиры: 18г, Углеводы: 28г (на 100г)",
        category: 'pizza',
        get availabilityTitle() {
        if (this.availability) { return `В наличии ${this.availability}` }
        else return 'Нет в наличии'
        }
    },
    {
        id: 202,
        title: "Пицца Маргарита",
        discount: true,
        favorite: false,
        availability: 12,
        price: "390 руб",
        oldPrice: "450 руб",
        imgUrl: img2,
        compound: "томатный соус, сыр моцарелла, свежие томаты, базилик",
        shelfLife: "24 часа",
        nutritionalValue: "Белки: 10г, Жиры: 15г, Углеводы: 25г (на 100г)",
        category: 'pizza',
        get availabilityTitle() {
        if (this.availability) { return `В наличии ${this.availability}` }
        else return 'Нет в наличии'
        }
    },
    {
        id: 203,
        title: "Пицца Четыре сыра",
        discount: false,
        favorite: false,
        availability: 5,
        price: "520 руб",
        oldPrice: null,
        imgUrl: img3,
        compound: "сыр моцарелла, горгонзола, пармезан, рикотта, сливочный соус",
        shelfLife: "24 часа",
        nutritionalValue: "Белки: 15г, Жиры: 22г, Углеводы: 20г (на 100г)",
        category: 'pizza',
        get availabilityTitle() {
        if (this.availability) { return `В наличии ${this.availability}` }
        else return 'Нет в наличии'
        }
    },
    {
        id: 204,
        title: "Пицца ZOTMAN",
        discount: false,
        favorite: false,
        availability: 0,
        price: "480 руб",
        oldPrice: null,
        imgUrl: img4,
        compound: "томатный соус, сыр моцарелла, ветчина, ананасы",
        shelfLife: "24 часа",
        nutritionalValue: "Белки: 11г, Жиры: 16г, Углеводы: 30г (на 100г)",
        category: 'pizza',
        get availabilityTitle() {
        if (this.availability) { return `В наличии ${this.availability}` }
        else return 'Нет в наличии'
        }
    },
    {
        id: 205,
        title: "Пицца Карбонара",
        discount: true,
        favorite: false,
        availability: 7,
        price: "510 руб",
        oldPrice: "570 руб",
        imgUrl: img5,
        compound: "сливочный соус, сыр моцарелла, бекон, яйцо, пармезан",
        shelfLife: "24 часа",
        nutritionalValue: "Белки: 14г, Жиры: 20г, Углеводы: 22г (на 100г)",
        category: 'pizza',
        get availabilityTitle() {
        if (this.availability) { return `В наличии ${this.availability}` }
        else return 'Нет в наличии'
        }
    },
    {
        id: 206,
        title: "Пицца Диабло",
        discount: false,
        favorite: false,
        availability: 10,
        price: "490 руб",
        oldPrice: null,
        imgUrl: img6,
        compound: "острый томатный соус, сыр моцарелла, салями, перец халапеньо, чили",
        shelfLife: "24 часа",
        nutritionalValue: "Белки: 13г, Жиры: 17г, Углеводы: 26г (на 100г)",
        category: 'pizza',
        get availabilityTitle() {
        if (this.availability) { return `В наличии ${this.availability}` }
        else return 'Нет в наличии'
        }
    },
    {
        id: 207,
        title: "Пицца Вегетарианская",
        discount: false,
        favorite: false,
        availability: 15,
        price: "430 руб",
        oldPrice: null,
        imgUrl: img7,
        compound: "томатный соус, сыр моцарелла, болгарский перец, грибы, маслины, кукуруза",
        shelfLife: "24 часа",
        nutritionalValue: "Белки: 9г, Жиры: 12г, Углеводы: 32г (на 100г)",
        category: 'pizza',
        get availabilityTitle() {
        if (this.availability) { return `В наличии ${this.availability}` }
        else return 'Нет в наличии'
        }
    },
    {
        id: 208,
        title: "Пицца Мясная",
        discount: true,
        favorite: false,
        availability: 6,
        price: "580 руб",
        oldPrice: "640 руб",
        imgUrl: img8,
        compound: "томатный соус, сыр моцарелла, ветчина, пепперони, бекон, куриное филе",
        shelfLife: "24 часа",
        nutritionalValue: "Белки: 16г, Жиры: 25г, Углеводы: 18г (на 100г)",
        category: 'pizza',
        get availabilityTitle() {
        if (this.availability) { return `В наличии ${this.availability}` }
        else return 'Нет в наличии'
        }
    },
    {
        id: 209,
        title: "Пицца Цезарь",
        discount: false,
        favorite: false,
        availability: 3,
        price: "620 руб",
        oldPrice: null,
        imgUrl: img9,
        compound: "сливочный соус, сыр моцарелла, креветки, мидии, кальмары",
        shelfLife: "24 часа",
        nutritionalValue: "Белки: 14г, Жиры: 15г, Углеводы: 24г (на 100г)",
        category: 'pizza',
        get availabilityTitle() {
        if (this.availability) { return `В наличии ${this.availability}` }
        else return 'Нет в наличии'
        }
    },
    {
        id: 210,
        title: "Пицца Mix",
        discount: false,
        favorite: false,
        availability: 9,
        price: "470 руб",
        oldPrice: null,
        imgUrl: img10,
        compound: "томатный соус, сыр моцарелла, картофель, колбаски, лук, грибы",
        shelfLife: "24 часа",
        nutritionalValue: "Белки: 11г, Жиры: 19г, Углеводы: 35г (на 100г)",
        category: 'pizza',
        get availabilityTitle() {
        if (this.availability) { return `В наличии ${this.availability}` }
        else return 'Нет в наличии'
        }
    }
]