import img1 from '@/assets/products-img/cooking/desserts/tiramisu.png'
import img2 from '@/assets/products-img/cooking/desserts/cheesecake.png'
import img3 from '@/assets/products-img/cooking/desserts/napoleon.png'
import img4 from '@/assets/products-img/cooking/desserts/chocolate.webp'
import img5 from '@/assets/products-img/cooking/desserts/panna-cotta.png'
import img6 from '@/assets/products-img/cooking/desserts/medovik.png'
import img7 from '@/assets/products-img/cooking/desserts/ekler.png'
import img8 from '@/assets/products-img/cooking/desserts/red-barhat.png'
import img9 from '@/assets/products-img/cooking/desserts/zapekanka.png'
import img10 from '@/assets/products-img/cooking/desserts/macaroons.jpg'
export const dessert = [
        {
            id: 801,
            title: "Тирамису",
            discount: false,
            favorite: false,
            availability: 6,
            price: "280 руб",
            oldPrice: null,
            imgUrl: img1,
            compound: "сыр маскарпоне, кофе, печенье савоярди, какао, яйцо, сахар",
            shelfLife: "48 часов",
            nutritionalValue: "Белки: 8г, Жиры: 22г, Углеводы: 35г (на 100г)",
            category: 'dessert',
            get availabilityTitle() {
            if (this.availability) { return `В наличии ${this.availability}` }
            else return 'Нет в наличии'
            }
        },
        {
            id: 802,
            title: "Чизкейк Нью-Йорк",
            discount: true,
            favorite: false,
            availability: 8,
            price: "320 руб",
            oldPrice: "370 руб",
            imgUrl: img2,
            compound: "сливочный сыр, песочное основание, сметана, яйцо, ваниль",
            shelfLife: "72 часа",
            nutritionalValue: "Белки: 7г, Жиры: 25г, Углеводы: 30г (на 100г)",
            category: 'dessert',
            get availabilityTitle() {
            if (this.availability) { return `В наличии ${this.availability}` }
            else return 'Нет в наличии'
            }
        },
        {
            id: 803,
            title: "Наполеон",
            discount: false,
            favorite: false,
            availability: 0,
            price: "250 руб",
            oldPrice: null,
            imgUrl: img3,
            compound: "слоеное тесто, заварной крем, сливочное масло, сахарная пудра",
            shelfLife: "48 часов",
            nutritionalValue: "Белки: 6г, Жиры: 28г, Углеводы: 40г (на 100г)",
            category: 'dessert',
            get availabilityTitle() {
            if (this.availability) { return `В наличии ${this.availability}` }
            else return 'Нет в наличии'
            }
        },
        {
            id: 804,
            title: "Шоколадный фондан",
            discount: false,
            favorite: false,
            availability: 0,
            price: "190 руб",
            oldPrice: null,
            imgUrl: img4,
            compound: "горький шоколад, масло сливочное, яйцо, сахар, мука, ванильное мороженое",
            shelfLife: "24 часа",
            nutritionalValue: "Белки: 7г, Жиры: 30г, Углеводы: 45г (на 100г)",
            category: 'dessert',
            get availabilityTitle() {
            if (this.availability) { return `В наличии ${this.availability}` }
            else return 'Нет в наличии'
            }
        },
        {
            id: 805,
            title: "Панна-котта",
            discount: false,
            favorite: false,
            availability: 10,
            price: "210 руб",
            oldPrice: null,
            imgUrl: img5,
            compound: "сливки, сахар, желатин, ваниль, ягодный соус",
            shelfLife: "48 часов",
            nutritionalValue: "Белки: 4г, Жиры: 20г, Углеводы: 25г (на 100г)",
            category: 'dessert',
            get availabilityTitle() {
            if (this.availability) { return `В наличии ${this.availability}` }
            else return 'Нет в наличии'
            }
        },
        {
            id: 806,
            title: "Медовик",
            discount: true,
            favorite: false,
            availability: 9,
            price: "270 руб",
            oldPrice: "310 руб",
            imgUrl: img6,
            compound: "мед, сметана, сгущенное молоко, яйцо, мука, грецкие орехи",
            shelfLife: "72 часа",
            nutritionalValue: "Белки: 6г, Жиры: 18г, Углеводы: 50г (на 100г)",
            category: 'dessert',
            get availabilityTitle() {
            if (this.availability) { return `В наличии ${this.availability}` }
            else return 'Нет в наличии'
            }
        },
        {
            id: 807,
            title: "Эклеры с заварным кремом",
            discount: false,
            favorite: false,
            availability: 12,
            price: "150 руб",
            oldPrice: null,
            imgUrl: img7,
            compound: "заварное тесто, заварной крем, шоколадная глазурь",
            shelfLife: "48 часов",
            nutritionalValue: "Белки: 5г, Жиры: 15г, Углеводы: 35г (на 100г)",
            category: 'dessert',
            get availabilityTitle() {
            if (this.availability) { return `В наличии ${this.availability}` }
            else return 'Нет в наличии'
            }
        },
        {
            id: 808,
            title: "Красный бархат",
            discount: false,
            favorite: false,
            availability: 4,
            price: "340 руб",
            oldPrice: null,
            imgUrl: img8,
            compound: "какао, пахта, пищевой краситель, сливочный сыр, масло",
            shelfLife: "72 часа",
            nutritionalValue: "Белки: 5г, Жиры: 22г, Углеводы: 42г (на 100г)",
            category: 'dessert',
            get availabilityTitle() {
            if (this.availability) { return `В наличии ${this.availability}` }
            else return 'Нет в наличии'
            }
        },
        {
            id: 809,
            title: "Творожная запеканка",
            discount: false,
            favorite: false,
            availability: 15,
            price: "180 руб",
            oldPrice: null,
            imgUrl: img9,
            compound: "творог, яйцо, манка, изюм, сметана, ванилин",
            shelfLife: "48 часов",
            nutritionalValue: "Белки: 12г, Жиры: 8г, Углеводы: 25г (на 100г)",
            category: 'dessert',
            get availabilityTitle() {
            if (this.availability) { return `В наличии ${this.availability}` }
            else return 'Нет в наличии'
            }
        },
        {
            id: 810,
            title: "Макаруны",
            discount: true,
            favorite: false,
            availability: 8,
            price: "290 руб",
            oldPrice: "340 руб",
            imgUrl: img10,
            compound: "миндальная мука, сахар, яичный белок, ганаш, пищевые красители",
            shelfLife: "96 часов",
            nutritionalValue: "Белки: 9г, Жиры: 20г, Углеводы: 55г (на 100г)",
            category: 'dessert',
            get availabilityTitle() {
            if (this.availability) { return `В наличии ${this.availability}` }
            else return 'Нет в наличии'
            }
        }
    ]