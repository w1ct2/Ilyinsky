import img1 from '@/assets/products-img/cooking/hot-dish/pyure.png'
import img2 from '@/assets/products-img/cooking/hot-dish/french_chicken.png'
import img3 from '@/assets/products-img/cooking/hot-dish/pork_meat.png'
import img4 from '@/assets/products-img/cooking/hot-dish/salmon.png'
import img5 from '@/assets/products-img/cooking/hot-dish/cabbage.png'
import img6 from '@/assets/products-img/cooking/hot-dish/ratatouille.png'
import img7 from '@/assets/products-img/cooking/hot-dish/teftelya.png'
import img8 from '@/assets/products-img/cooking/hot-dish/duck.png'
export const hotDish = [
        {
            id: 701,
            title: "Бефстроганов с картофельным пюре",
            discount: false,
            favorite: false,
            availability: 7,
            price: "420 руб",
            oldPrice: null,
            imgUrl: img1,
            compound: "говяжья вырезка, лук, грибы, сметана, картофельное пюре",
            shelfLife: "48 часов",
            nutritionalValue: "Белки: 18г, Жиры: 14г, Углеводы: 22г (на 100г)",
            category: 'hotDish',
            get availabilityTitle() {
            if (this.availability) { return `В наличии ${this.availability}` }
            else return 'Нет в наличии'
            }
        },
        {
            id: 702,
            title: "Курица по-французски",
            discount: true,
            favorite: false,
            availability: 9,
            price: "380 руб",
            oldPrice: "430 руб",
            imgUrl: img2,
            compound: "куриное филе, сыр, помидоры, лук, майонез, специи",
            shelfLife: "48 часов",
            nutritionalValue: "Белки: 16г, Жиры: 18г, Углеводы: 8г (на 100г)",
            category: 'hotDish',
            get availabilityTitle() {
            if (this.availability) { return `В наличии ${this.availability}` }
            else return 'Нет в наличии'
            }
        },
        {
            id: 703,
            title: "Жаркое из свинины",
            discount: false,
            favorite: false,
            availability: 6,
            price: "350 руб",
            oldPrice: null,
            imgUrl: img3,
            compound: "свинина, картофель, морковь, лук, чеснок, специи",
            shelfLife: "48 часов",
            nutritionalValue: "Белки: 14г, Жиры: 16г, Углеводы: 20г (на 100г)",
            category: 'hotDish',
            get availabilityTitle() {
            if (this.availability) { return `В наличии ${this.availability}` }
            else return 'Нет в наличии'
            }
        },
        {
            id: 704,
            title: "Лосось под сливочным соусом",
            discount: false,
            favorite: false,
            availability: 5,
            price: "520 руб",
            oldPrice: null,
            imgUrl: img4,
            compound: "филе лосося, сливки, шпинат, лимон, рис басмати",
            shelfLife: "48 часов",
            nutritionalValue: "Белки: 19г, Жиры: 22г, Углеводы: 15г (на 100г)",
            category: 'hotDish',
            get availabilityTitle() {
            if (this.availability) { return `В наличии ${this.availability}` }
            else return 'Нет в наличии'
            }
        },
        {
            id: 705,
            title: "Голубцы с говядиной",
            discount: false,
            favorite: false,
            availability: 8,
            price: "290 руб",
            oldPrice: null,
            imgUrl: img5,
            compound: "капуста, говяжий фарш, рис, морковь, лук, томатный соус",
            shelfLife: "48 часов",
            nutritionalValue: "Белки: 12г, Жиры: 10г, Углеводы: 18г (на 100г)",
            category: 'hotDish',
            get availabilityTitle() {
            if (this.availability) { return `В наличии ${this.availability}` }
            else return 'Нет в наличии'
            }
        },
        {
            id: 706,
            title: "Рататуй",
            discount: true,
            favorite: false,
            availability: 10,
            price: "270 руб",
            oldPrice: "320 руб",
            imgUrl: img6,
            compound: "баклажаны, кабачки, помидоры, перец, чеснок, прованские травы",
            shelfLife: "48 часов",
            nutritionalValue: "Белки: 4г, Жиры: 8г, Углеводы: 12г (на 100г)",
            category: 'hotDish',
            get availabilityTitle() {
            if (this.availability) { return `В наличии ${this.availability}` }
            else return 'Нет в наличии'
            }
        },
        {
            id: 707,
            title: "Тефтели в томатном соусе",
            discount: false,
            favorite: false,
            availability: 12,
            price: "310 руб",
            oldPrice: null,
            imgUrl: img7,
            compound: "говяжий фарш, рис, томатный соус, сметана, специи",
            shelfLife: "48 часов",
            nutritionalValue: "Белки: 13г, Жиры: 12г, Углеводы: 16г (на 100г)",
            category: 'hotDish',
            get availabilityTitle() {
            if (this.availability) { return `В наличии ${this.availability}` }
            else return 'Нет в наличии'
            }
        },
        {
            id: 708,
            title: "Утка с яблоками",
            discount: false,
            favorite: false,
            availability: 0,
            price: "580 руб",
            oldPrice: null,
            imgUrl: img8,
            compound: "утка, яблоки, мед, горчица, картофель, розмарин",
            shelfLife: "48 часов",
            nutritionalValue: "Белки: 17г, Жиры: 25г, Углеводы: 20г (на 100г)",
            category: 'hotDish',
            get availabilityTitle() {
            if (this.availability) { return `В наличии ${this.availability}` }
            else return 'Нет в наличии'
            }
        }
    ]