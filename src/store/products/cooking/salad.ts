import img1 from '@/assets/products-img/cooking/salad/caesar.png'
import img2 from '@/assets/products-img/cooking/salad/greek.png'
import img3 from '@/assets/products-img/cooking/salad/olivier.png'
import img4 from '@/assets/products-img/cooking/salad/tuna.png'
import img5 from '@/assets/products-img/cooking/salad/vinaigrette.png'
import img6 from '@/assets/products-img/cooking/salad/shrimp.png'
import img7 from '@/assets/products-img/cooking/salad/herring.png'
import img8 from '@/assets/products-img/cooking/salad/minoza.png'
import img9 from '@/assets/products-img/cooking/salad/buzhenina.png'
import img10 from '@/assets/products-img/cooking/salad/caprese.png'
export const salad = [
        {
            id: 501,
            title: "Салат Цезарь",
            discount: false,
            favorite: false,
            availability: 8,
            price: "320 руб",
            oldPrice: null,
            imgUrl: img1,
            compound: "салат айсберг, куриное филе, сыр пармезан, сухарики, соус цезарь",
            shelfLife: "24 часа",
            nutritionalValue: "Белки: 12г, Жиры: 15г, Углеводы: 18г (на 100г)",
            category: 'salad',
            get availabilityTitle() {
            if (this.availability) { return `В наличии ${this.availability}` }
            else return 'Нет в наличии'
            }
        },
        {
            id: 502,
            title: "Греческий салат",
            discount: true,
            favorite: false,
            availability: 12,
            price: "280 руб",
            oldPrice: "330 руб",
            imgUrl: img2,
            compound: "помидоры, огурцы, перец, маслины, сыр фета, лук, оливковое масло",
            shelfLife: "24 часа",
            nutritionalValue: "Белки: 6г, Жиры: 12г, Углеводы: 8г (на 100г)",
            category: 'salad',
            get availabilityTitle() {
            if (this.availability) { return `В наличии ${this.availability}` }
            else return 'Нет в наличии'
            }
        },
        {
            id: 503,
            title: "Оливье",
            discount: false,
            favorite: false,
            availability: 15,
            price: "250 руб",
            oldPrice: null,
            imgUrl: img3,
            compound: "картофель, морковь, яйцо, колбаса, огурцы, горошек, майонез",
            shelfLife: "24 часа",
            nutritionalValue: "Белки: 8г, Жиры: 14г, Углеводы: 20г (на 100г)",
            category: 'salad',
            get availabilityTitle() {
            if (this.availability) { return `В наличии ${this.availability}` }
            else return 'Нет в наличии'
            }
        },
        {
            id: 504,
            title: "Салат с тунцом",
            discount: false,
            favorite: false,
            availability: 6,
            price: "350 руб",
            oldPrice: null,
            imgUrl: img4,
            compound: "тунец, яйцо, помидоры, листовой салат, оливки, оливковое масло",
            shelfLife: "24 часа",
            nutritionalValue: "Белки: 14г, Жиры: 10г, Углеводы: 6г (на 100г)",
            category: 'salad',
            get availabilityTitle() {
            if (this.availability) { return `В наличии ${this.availability}` }
            else return 'Нет в наличии'
            }
        },
        {
            id: 505,
            title: "Винегрет",
            discount: false,
            favorite: false,
            availability: 10,
            price: "190 руб",
            oldPrice: null,
            imgUrl: img5,
            compound: "свекла, картофель, морковь, огурцы, горошек, масло растительное",
            shelfLife: "24 часа",
            nutritionalValue: "Белки: 3г, Жиры: 5г, Углеводы: 15г (на 100г)",
            category: 'salad',
            get availabilityTitle() {
            if (this.availability) { return `В наличии ${this.availability}` }
            else return 'Нет в наличии'
            }
        },
        {
            id: 506,
            title: "Салат с креветками",
            discount: true,
            favorite: false,
            availability: 5,
            price: "420 руб",
            oldPrice: "480 руб",
            imgUrl: img6,
            compound: "креветки, авокадо, руккола, помидоры черри, лимонный сок",
            shelfLife: "24 часа",
            nutritionalValue: "Белки: 11г, Жиры: 12г, Углеводы: 7г (на 100г)",
            category: 'salad',
            get availabilityTitle() {
            if (this.availability) { return `В наличии ${this.availability}` }
            else return 'Нет в наличии'
            }
        },
        {
            id: 507,
            title: "Сельдь под шубой",
            discount: false,
            favorite: false,
            availability: 9,
            price: "270 руб",
            oldPrice: null,
            imgUrl: img7,
            compound: "сельдь, картофель, морковь, свекла, яйцо, майонез",
            shelfLife: "24 часа",
            nutritionalValue: "Белки: 7г, Жиры: 13г, Углеводы: 16г (на 100г)",
            category: 'salad',
            get availabilityTitle() {
            if (this.availability) { return `В наличии ${this.availability}` }
            else return 'Нет в наличии'
            }
        },
        {
            id: 508,
            title: "Салат Мимоза",
            discount: false,
            favorite: false,
            availability: 7,
            price: "290 руб",
            oldPrice: null,
            imgUrl: img8,
            compound: "рыбные консервы, картофель, морковь, яйцо, сыр, майонез",
            shelfLife: "24 часа",
            nutritionalValue: "Белки: 9г, Жиры: 16г, Углеводы: 14г (на 100г)",
            category: 'salad',
            get availabilityTitle() {
            if (this.availability) { return `В наличии ${this.availability}` }
            else return 'Нет в наличии'
            }
        },
        {
            id: 509,
            title: "Салат с бужениной",
            discount: false,
            favorite: false,
            availability: 11,
            price: "380 руб",
            oldPrice: null,
            imgUrl: img9,
            compound: "буженина, огурцы, помидоры, перец, листовой салат, сметанный соус",
            shelfLife: "24 часа",
            nutritionalValue: "Белки: 15г, Жиры: 12г, Углеводы: 9г (на 100г)",
            category: 'salad',
            get availabilityTitle() {
            if (this.availability) { return `В наличии ${this.availability}` }
            else return 'Нет в наличии'
            }
        },
        {
            id: 510,
            title: "Капрезе",
            discount: true,
            favorite: false,
            availability: 8,
            price: "310 руб",
            oldPrice: "360 руб",
            imgUrl: img10,
            compound: "помидоры, моцарелла, базилик, оливковое масло, бальзамик",
            shelfLife: "24 часа",
            nutritionalValue: "Белки: 10г, Жиры: 18г, Углеводы: 6г (на 100г)",
            category: 'salad',
            get availabilityTitle() {
            if (this.availability) { return `В наличии ${this.availability}` }
            else return 'Нет в наличии'
            }
        }
    ]