import { defineStore } from 'pinia';
import { computed, Ref, ref } from 'vue';
import card1 from '@/assets/img/discounts/card1.png'
import card2 from '@/assets/img/discounts/card2.png'
interface DiscountItem {
    id: number
    discount: boolean
    favorite: boolean
    imgUrl: string
    availability: number
    readonly availabilityTitle: string
    title: string
    price: string
    oldPrice: string | null
}
export const useAllData = defineStore('alldata', ()=>{
    const discounts: Ref<DiscountItem[]>  = ref([
        {
            id: 1,
            discount: true, 
            favorite: true,
            imgUrl: card1,
            availability: 2,
            get availabilityTitle():string {
                if(this.availability){return `В наличии ${this.availability}`}
                else return 'Нет в наличии'
            },
            title: 'Гранола Мюсли Bionova ягодные запечённые хрустящие, 400г',
            price: '99,90 руб',
            oldPrice: '129,00 руб'
        },
        {
            id: 2,
            discount: false, 
            favorite: false,
            imgUrl: card2,
            availability: 33,
            get availabilityTitle() {
                if(this.availability){return `В наличии ${this.availability}`}
                else return 'Нет в наличии'
            },
            title: 'Сок Ideas тыквенно-апельсиновый, 1л',
            price: '70,90 руб',
            oldPrice: null
        },
        {
            id: 3,
            discount: false, 
            favorite: true,
            imgUrl: card1,
            availability: 0,
            get availabilityTitle(): any {
                if(this.availability){return `В наличии ${this.availability}`}
                else return 'Нет в наличии'
            },
            title: 'Гранола Мюсли Bionova ягодные запечённые хрустящие, 400г',
            price: '99,90 руб',
            oldPrice: null
        },
        {
            id: 4,
            discount: false, 
            favorite: false,
            imgUrl: card2,
            availability: 3,
            get availabilityTitle() {
                if(this.availability){return `В наличии ${this.availability}`}
                else return 'Нет в наличии'
            },
            title: 'Сок Ideas тыквенно-апельсиновый, 1л',
            price: '70,90 руб',
            oldPrice: null
        },
        {
            id: 5,
            discount: false, 
            favorite: false,
            imgUrl: card2,
            availability: 5,
            get availabilityTitle() {
                if(this.availability){return `В наличии ${this.availability}`}
                else return 'Нет в наличии'
            },
            title: 'Сок Ideas тыквенно-апельсиновый, 1л',
            price: '70,90 руб',
            oldPrice: null
        },
        {
            id: 6,
            discount: true, 
            favorite: false,
            imgUrl: card1,
            availability: 2,
            get availabilityTitle():string {
                if(this.availability){return `В наличии ${this.availability}`}
                else return 'Нет в наличии'
            },
            title: 'Гранола Мюсли Bionova ягодные запечённые хрустящие, 400г',
            price: '99,90 руб',
            oldPrice: '129,00 руб'
        },
    ])
    const bakery = ref([
        {
            id: 101,
            title: "Круассан с шоколадом",
            discount: false,
            favorite: false,
            availability: 15,
            price: '120 руб',
            oldPrice: null,
            imgUrl: "",
            compound: "мука пшеничная, масло сливочное, шоколадная начинка (10%), вода, сахар, дрожжи, соль, яичный меланж",
            shelfLife: "24 часа",
            nutritionalValue: "Белки: 6г, Жиры: 19г, Углеводы: 42г (на 100г)",
            get availabilityTitle():string {
                if(this.availability){return `В наличии ${this.availability}`}
                else return 'Нет в наличии'
            },
        },
        {
            id: 102,
            title: "Слойка с яблоком и корицей",
            discount: true,
            favorite: false,
            availability: 8,
            price: '95 руб',
            oldPrice: '110 руб',
            imgUrl: "",
            compound: "тесто слоеное, начинка яблочная (15%), сахар, корица, глазурь сахарная",
            shelfLife: "36 часов",
            nutritionalValue: "Белки: 5г, Жиры: 12г, Углеводы: 45г (на 100г)",
            get availabilityTitle():string {
                if(this.availability){return `В наличии ${this.availability}`}
                else return 'Нет в наличии'
            },
        },
        {
            id: 103,
            title: "Пирожок с вишней",
            discount: false,
            favorite: false,
            availability: 0,
            price: "65 руб",
            oldPrice: null,
            imgUrl: "",
            compound: "тесто дрожжевое, начинка вишневая (20%), сахар, крахмал кукурузный",
            shelfLife: "24 часа",
            nutritionalValue: "Белки: 5г, Жиры: 8г, Углеводы: 38г (на 100г)",
            get availabilityTitle():string {
                if(this.availability){return `В наличии ${this.availability}`}
                else return 'Нет в наличии'
            },
        },
        {
            id: 104,
            title: "Багет французский",
            discount: false,
            favorite: false,
            availability: 12,
            price: "85 руб",
            oldPrice: null,
            imgUrl: "",
            compound: "мука пшеничная высший сорт, вода, дрожжи, соль, солод",
            shelfLife: "48 часов",
            nutritionalValue: "Белки: 8г, Жиры: 1г, Углеводы: 52г (на 100г)",
            get availabilityTitle():string {
                if(this.availability){return `В наличии ${this.availability}`}
                else return 'Нет в наличии'
            },
        },
        {
            id: 105,
            title: "Пончик с сахарной пудрой",
            discount: true,
            favorite: false,
            availability: 20,
            price: "70 руб",
            oldPrice: "80 руб",
            imgUrl: "",
            compound: "мука, сахар, яйцо, масло растительное, молоко, дрожжи, сахарная пудра, ванилин",
            shelfLife: "48 часов",
            nutritionalValue: "Белки: 6г, Жиры: 15г, Углеводы: 50г (на 100г)",
            get availabilityTitle():string {
                if(this.availability){return `В наличии ${this.availability}`}
                else return 'Нет в наличии'
            },
        },
        {
            id: 106,
            title: "Пирог с курицей и грибами",
            discount: false,
            favorite: false,
            availability: 5,
            price: "220 руб",
            oldPrice: null,
            imgUrl: "",
            compound: "тесто дрожжевое, филе куриное, шампиньоны, лук, сливки, соль, перец, зелень",
            shelfLife: "36 часов",
            nutritionalValue: "Белки: 12г, Жиры: 15г, Углеводы: 25г (на 100г)",
            get availabilityTitle():string {
                if(this.availability){return `В наличии ${this.availability}`}
                else return 'Нет в наличии'
            },
        },
        {
            id: 107,
            title: "Булочка с маком",
            discount: false,
            favorite: false,
            availability: 18,
            price: "55 руб",
            oldPrice: null,
            imgUrl: "",
            compound: "мука, мак, молоко, масло сливочное, сахар, дрожжи, яйцо, ванилин",
            shelfLife: "72 часа",
            nutritionalValue: "Белки: 7г, Жиры: 10г, Углеводы: 48г (на 100г)",
            get availabilityTitle():string {
                if(this.availability){return `В наличии ${this.availability}`}
                else return 'Нет в наличии'
            },
        },
        {
            id: 108,
            title: "Чечил копченый (косичка)",
            discount: true,
            favorite: false,
            availability: 7,
            price: "150 руб",
            oldPrice: "170 руб",
            imgUrl: "",
            compound: "сыр чечил, соль",
            shelfLife: "45 суток",
            nutritionalValue: "Белки: 25г, Жиры: 25г, Углеводы: 0г (на 100г)",
            get availabilityTitle():string {
                if(this.availability){return `В наличии ${this.availability}`}
                else return 'Нет в наличии'
            },
        },
        {
            id: 109,
            title: "Кулич пасхальный",
            discount: false,
            favorite: false,
            availability: 3,
            price: "390 руб",
            oldPrice: null,
            imgUrl: "",
            compound: "мука, изюм, цукаты, масло сливочное, яйца, молоко, дрожжи, сахар, ванилин, глазурь",
            shelfLife: "120 часов",
            nutritionalValue: "Белки: 8г, Жиры: 14г, Углеводы: 55г (на 100г)",
            get availabilityTitle():string {
                if(this.availability){return `В наличии ${this.availability}`}
                else return 'Нет в наличии'
            },
        },
        {
            id: 110,
            title: "Пирожное Картошка",
            discount: false,
            favorite: false,
            availability: 10,
            price: "45 руб",
            oldPrice: null,
            imgUrl: "",
            compound: "печенье сахарное, масло сливочное, сгущенное молоко, какао, орехи грецкие, коньяк",
            shelfLife: "96 часов",
            nutritionalValue: "Белки: 5г, Жиры: 20г, Углеводы: 45г (на 100г)",
            get availabilityTitle():string {
                if(this.availability){return `В наличии ${this.availability}`}
                else return 'Нет в наличии'
            },
        }
    ])
    const pizza = ref([
        {
            id: 201,
            title: "Пицца Пепперони",
            discount: false,
            favorite: false,
            availability: 8,
            price: "450 руб",
            oldPrice: null,
            imgUrl: "",
            compound: "томатный соус, сыр моцарелла, пепперони, орегано",
            shelfLife: "24 часа",
            nutritionalValue: "Белки: 12г, Жиры: 18г, Углеводы: 28г (на 100г)",
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
            imgUrl: "",
            compound: "томатный соус, сыр моцарелла, свежие томаты, базилик",
            shelfLife: "24 часа",
            nutritionalValue: "Белки: 10г, Жиры: 15г, Углеводы: 25г (на 100г)",
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
            imgUrl: "",
            compound: "сыр моцарелла, горгонзола, пармезан, рикотта, сливочный соус",
            shelfLife: "24 часа",
            nutritionalValue: "Белки: 15г, Жиры: 22г, Углеводы: 20г (на 100г)",
            get availabilityTitle() {
            if (this.availability) { return `В наличии ${this.availability}` }
            else return 'Нет в наличии'
            }
        },
        {
            id: 204,
            title: "Пицца Гавайская",
            discount: false,
            favorite: false,
            availability: 0,
            price: "480 руб",
            oldPrice: null,
            imgUrl: "",
            compound: "томатный соус, сыр моцарелла, ветчина, ананасы",
            shelfLife: "24 часа",
            nutritionalValue: "Белки: 11г, Жиры: 16г, Углеводы: 30г (на 100г)",
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
            imgUrl: "",
            compound: "сливочный соус, сыр моцарелла, бекон, яйцо, пармезан",
            shelfLife: "24 часа",
            nutritionalValue: "Белки: 14г, Жиры: 20г, Углеводы: 22г (на 100г)",
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
            imgUrl: "",
            compound: "острый томатный соус, сыр моцарелла, салями, перец халапеньо, чили",
            shelfLife: "24 часа",
            nutritionalValue: "Белки: 13г, Жиры: 17г, Углеводы: 26г (на 100г)",
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
            imgUrl: "",
            compound: "томатный соус, сыр моцарелла, болгарский перец, грибы, маслины, кукуруза",
            shelfLife: "24 часа",
            nutritionalValue: "Белки: 9г, Жиры: 12г, Углеводы: 32г (на 100г)",
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
            imgUrl: "",
            compound: "томатный соус, сыр моцарелла, ветчина, пепперони, бекон, куриное филе",
            shelfLife: "24 часа",
            nutritionalValue: "Белки: 16г, Жиры: 25г, Углеводы: 18г (на 100г)",
            get availabilityTitle() {
            if (this.availability) { return `В наличии ${this.availability}` }
            else return 'Нет в наличии'
            }
        },
        {
            id: 209,
            title: "Пицца с морепродуктами",
            discount: false,
            favorite: false,
            availability: 3,
            price: "620 руб",
            oldPrice: null,
            imgUrl: "",
            compound: "сливочный соус, сыр моцарелла, креветки, мидии, кальмары",
            shelfLife: "24 часа",
            nutritionalValue: "Белки: 14г, Жиры: 15г, Углеводы: 24г (на 100г)",
            get availabilityTitle() {
            if (this.availability) { return `В наличии ${this.availability}` }
            else return 'Нет в наличии'
            }
        },
        {
            id: 210,
            title: "Пицца Деревенская",
            discount: false,
            favorite: false,
            availability: 9,
            price: "470 руб",
            oldPrice: null,
            imgUrl: "",
            compound: "томатный соус, сыр моцарелла, картофель, колбаски, лук, грибы",
            shelfLife: "24 часа",
            nutritionalValue: "Белки: 11г, Жиры: 19г, Углеводы: 35г (на 100г)",
            get availabilityTitle() {
            if (this.availability) { return `В наличии ${this.availability}` }
            else return 'Нет в наличии'
            }
        }
    ])
    const grill = ref([
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
    ])
    const meat = ref([
        {
            id: 401,
            title: "Говяжья вырезка",
            discount: false,
            favorite: false,
            availability: 5,
            price: "890 руб",
            oldPrice: null,
            imgUrl: "",
            compound: "говяжья вырезка охлажденная",
            shelfLife: "72 часа",
            nutritionalValue: "Белки: 22г, Жиры: 5г, Углеводы: 0г (на 100г)",
            get availabilityTitle() {
            if (this.availability) { return `В наличии ${this.availability}` }
            else return 'Нет в наличии'
            }
        },
        {
            id: 402,
            title: "Свиная шея",
            discount: true,
            favorite: false,
            availability: 8,
            price: "450 руб",
            oldPrice: "520 руб",
            imgUrl: "",
            compound: "свиная шея охлажденная",
            shelfLife: "72 часа",
            nutritionalValue: "Белки: 18г, Жиры: 20г, Углеводы: 0г (на 100г)",
            get availabilityTitle() {
            if (this.availability) { return `В наличии ${this.availability}` }
            else return 'Нет в наличии'
            }
        },
        {
            id: 403,
            title: "Куриное филе",
            discount: false,
            favorite: false,
            availability: 12,
            price: "320 руб",
            oldPrice: null,
            imgUrl: "",
            compound: "куриное филе охлажденное",
            shelfLife: "48 часов",
            nutritionalValue: "Белки: 23г, Жиры: 2г, Углеводы: 0г (на 100г)",
            get availabilityTitle() {
            if (this.availability) { return `В наличии ${this.availability}` }
            else return 'Нет в наличии'
            }
        },
        {
            id: 404,
            title: "Бараний окорок",
            discount: false,
            favorite: false,
            availability: 3,
            price: "750 руб",
            oldPrice: null,
            imgUrl: "",
            compound: "бараний окорок охлажденный",
            shelfLife: "72 часа",
            nutritionalValue: "Белки: 20г, Жиры: 18г, Углеводы: 0г (на 100г)",
            get availabilityTitle() {
            if (this.availability) { return `В наличии ${this.availability}` }
            else return 'Нет в наличии'
            }
        },
        {
            id: 405,
            title: "Индейка грудка",
            discount: false,
            favorite: false,
            availability: 7,
            price: "480 руб",
            oldPrice: null,
            imgUrl: "",
            compound: "филе грудки индейки охлажденное",
            shelfLife: "48 часов",
            nutritionalValue: "Белки: 24г, Жиры: 3г, Углеводы: 0г (на 100г)",
            get availabilityTitle() {
            if (this.availability) { return `В наличии ${this.availability}` }
            else return 'Нет в наличии'
            }
        },
        {
            id: 406,
            title: "Свиные ребрышки",
            discount: true,
            favorite: false,
            availability: 6,
            price: "380 руб",
            oldPrice: "430 руб",
            imgUrl: "",
            compound: "свиные ребрышки охлажденные",
            shelfLife: "72 часа",
            nutritionalValue: "Белки: 16г, Жиры: 25г, Углеводы: 0г (на 100г)",
            get availabilityTitle() {
            if (this.availability) { return `В наличии ${this.availability}` }
            else return 'Нет в наличии'
            }
        },
        {
            id: 407,
            title: "Говяжий фарш",
            discount: false,
            favorite: false,
            availability: 10,
            price: "420 руб",
            oldPrice: null,
            imgUrl: "",
            compound: "говяжий фарш охлажденный",
            shelfLife: "48 часов",
            nutritionalValue: "Белки: 20г, Жиры: 15г, Углеводы: 0г (на 100г)",
            get availabilityTitle() {
            if (this.availability) { return `В наличии ${this.availability}` }
            else return 'Нет в наличии'
            }
        },
        {
            id: 408,
            title: "Утиная грудка",
            discount: false,
            favorite: false,
            availability: 4,
            price: "680 руб",
            oldPrice: null,
            imgUrl: "",
            compound: "утиная грудка охлажденная",
            shelfLife: "72 часа",
            nutritionalValue: "Белки: 19г, Жиры: 22г, Углеводы: 0г (на 100г)",
            get availabilityTitle() {
            if (this.availability) { return `В наличии ${this.availability}` }
            else return 'Нет в наличии'
            }
        }

    ])
    const salad = ref([
        {
            id: 501,
            title: "Салат Цезарь",
            discount: false,
            favorite: false,
            availability: 8,
            price: "320 руб",
            oldPrice: null,
            imgUrl: "",
            compound: "салат айсберг, куриное филе, сыр пармезан, сухарики, соус цезарь",
            shelfLife: "24 часа",
            nutritionalValue: "Белки: 12г, Жиры: 15г, Углеводы: 18г (на 100г)",
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
            imgUrl: "",
            compound: "помидоры, огурцы, перец, маслины, сыр фета, лук, оливковое масло",
            shelfLife: "24 часа",
            nutritionalValue: "Белки: 6г, Жиры: 12г, Углеводы: 8г (на 100г)",
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
            imgUrl: "",
            compound: "картофель, морковь, яйцо, колбаса, огурцы, горошек, майонез",
            shelfLife: "24 часа",
            nutritionalValue: "Белки: 8г, Жиры: 14г, Углеводы: 20г (на 100г)",
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
            imgUrl: "",
            compound: "тунец, яйцо, помидоры, листовой салат, оливки, оливковое масло",
            shelfLife: "24 часа",
            nutritionalValue: "Белки: 14г, Жиры: 10г, Углеводы: 6г (на 100г)",
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
            imgUrl: "",
            compound: "свекла, картофель, морковь, огурцы, горошек, масло растительное",
            shelfLife: "24 часа",
            nutritionalValue: "Белки: 3г, Жиры: 5г, Углеводы: 15г (на 100г)",
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
            imgUrl: "",
            compound: "креветки, авокадо, руккола, помидоры черри, лимонный сок",
            shelfLife: "24 часа",
            nutritionalValue: "Белки: 11г, Жиры: 12г, Углеводы: 7г (на 100г)",
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
            imgUrl: "",
            compound: "сельдь, картофель, морковь, свекла, яйцо, майонез",
            shelfLife: "24 часа",
            nutritionalValue: "Белки: 7г, Жиры: 13г, Углеводы: 16г (на 100г)",
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
            imgUrl: "",
            compound: "рыбные консервы, картофель, морковь, яйцо, сыр, майонез",
            shelfLife: "24 часа",
            nutritionalValue: "Белки: 9г, Жиры: 16г, Углеводы: 14г (на 100г)",
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
            imgUrl: "",
            compound: "буженина, огурцы, помидоры, перец, листовой салат, сметанный соус",
            shelfLife: "24 часа",
            nutritionalValue: "Белки: 15г, Жиры: 12г, Углеводы: 9г (на 100г)",
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
            imgUrl: "",
            compound: "помидоры, моцарелла, базилик, оливковое масло, бальзамик",
            shelfLife: "24 часа",
            nutritionalValue: "Белки: 10г, Жиры: 18г, Углеводы: 6г (на 100г)",
            get availabilityTitle() {
            if (this.availability) { return `В наличии ${this.availability}` }
            else return 'Нет в наличии'
            }
        }
    ])
    const soup = ref([
        {
            id: 601,
            title: "Борщ украинский",
            discount: false,
            favorite: false,
            availability: 8,
            price: "280 руб",
            oldPrice: null,
            imgUrl: "",
            compound: "говядина, свекла, капуста, картофель, морковь, лук, сметана",
            shelfLife: "48 часов",
            nutritionalValue: "Белки: 8г, Жиры: 6г, Углеводы: 12г (на 100г)",
            get availabilityTitle() {
            if (this.availability) { return `В наличии ${this.availability}` }
            else return 'Нет в наличии'
            }
        },
        {
            id: 602,
            title: "Солянка мясная",
            discount: true,
            favorite: false,
            availability: 6,
            price: "320 руб",
            oldPrice: "370 руб",
            imgUrl: "",
            compound: "говядина, ветчина, колбаса, огурцы, маслины, лимон, сметана",
            shelfLife: "48 часов",
            nutritionalValue: "Белки: 10г, Жиры: 9г, Углеводы: 8г (на 100г)",
            get availabilityTitle() {
            if (this.availability) { return `В наличии ${this.availability}` }
            else return 'Нет в наличии'
            }
        },
        {
            id: 603,
            title: "Куриный суп с лапшой",
            discount: false,
            favorite: false,
            availability: 12,
            price: "240 руб",
            oldPrice: null,
            imgUrl: "",
            compound: "куриное филе, лапша, морковь, лук, зелень, специи",
            shelfLife: "48 часов",
            nutritionalValue: "Белки: 9г, Жиры: 4г, Углеводы: 15г (на 100г)",
            get availabilityTitle() {
            if (this.availability) { return `В наличии ${this.availability}` }
            else return 'Нет в наличии'
            }
        },
        {
            id: 604,
            title: "Грибной крем-суп",
            discount: false,
            favorite: false,
            availability: 7,
            price: "290 руб",
            oldPrice: null,
            imgUrl: "",
            compound: "шампиньоны, сливки, картофель, лук, чеснок, сухарики",
            shelfLife: "48 часов",
            nutritionalValue: "Белки: 5г, Жиры: 12г, Углеводы: 10г (на 100г)",
            get availabilityTitle() {
            if (this.availability) { return `В наличии ${this.availability}` }
            else return 'Нет в наличии'
            }
        },
        {
            id: 605,
            title: "Рассольник",
            discount: false,
            favorite: false,
            availability: 9,
            price: "260 руб",
            oldPrice: null,
            imgUrl: "",
            compound: "говядина, перловая крупа, огурцы, картофель, морковь, сметана",
            shelfLife: "48 часов",
            nutritionalValue: "Белки: 7г, Жиры: 5г, Углеводы: 14г (на 100г)",
            get availabilityTitle() {
            if (this.availability) { return `В наличии ${this.availability}` }
            else return 'Нет в наличии'
            }
        },
        {
            id: 606,
            title: "Том Ям с креветками",
            discount: true,
            favorite: false,
            availability: 4,
            price: "380 руб",
            oldPrice: "430 руб",
            imgUrl: "",
            compound: "креветки, грибы, кокосовое молоко, лемонграсс, лайм, чили",
            shelfLife: "48 часов",
            nutritionalValue: "Белки: 11г, Жиры: 8г, Углеводы: 9г (на 100г)",
            get availabilityTitle() {
            if (this.availability) { return `В наличии ${this.availability}` }
            else return 'Нет в наличии'
            }
        }
    ])
    const hotDish = ref([
        {
            id: 701,
            title: "Бефстроганов с картофельным пюре",
            discount: false,
            favorite: false,
            availability: 7,
            price: "420 руб",
            oldPrice: null,
            imgUrl: "",
            compound: "говяжья вырезка, лук, грибы, сметана, картофельное пюре",
            shelfLife: "48 часов",
            nutritionalValue: "Белки: 18г, Жиры: 14г, Углеводы: 22г (на 100г)",
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
            imgUrl: "",
            compound: "куриное филе, сыр, помидоры, лук, майонез, специи",
            shelfLife: "48 часов",
            nutritionalValue: "Белки: 16г, Жиры: 18г, Углеводы: 8г (на 100г)",
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
            imgUrl: "",
            compound: "свинина, картофель, морковь, лук, чеснок, специи",
            shelfLife: "48 часов",
            nutritionalValue: "Белки: 14г, Жиры: 16г, Углеводы: 20г (на 100г)",
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
            imgUrl: "",
            compound: "филе лосося, сливки, шпинат, лимон, рис басмати",
            shelfLife: "48 часов",
            nutritionalValue: "Белки: 19г, Жиры: 22г, Углеводы: 15г (на 100г)",
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
            imgUrl: "",
            compound: "капуста, говяжий фарш, рис, морковь, лук, томатный соус",
            shelfLife: "48 часов",
            nutritionalValue: "Белки: 12г, Жиры: 10г, Углеводы: 18г (на 100г)",
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
            imgUrl: "",
            compound: "баклажаны, кабачки, помидоры, перец, чеснок, прованские травы",
            shelfLife: "48 часов",
            nutritionalValue: "Белки: 4г, Жиры: 8г, Углеводы: 12г (на 100г)",
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
            imgUrl: "",
            compound: "говяжий фарш, рис, томатный соус, сметана, специи",
            shelfLife: "48 часов",
            nutritionalValue: "Белки: 13г, Жиры: 12г, Углеводы: 16г (на 100г)",
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
            availability: 4,
            price: "580 руб",
            oldPrice: null,
            imgUrl: "",
            compound: "утка, яблоки, мед, горчица, картофель, розмарин",
            shelfLife: "48 часов",
            nutritionalValue: "Белки: 17г, Жиры: 25г, Углеводы: 20г (на 100г)",
            get availabilityTitle() {
            if (this.availability) { return `В наличии ${this.availability}` }
            else return 'Нет в наличии'
            }
        }
    ])
    const dessert = ref([
        {
            id: 801,
            title: "Тирамису",
            discount: false,
            favorite: false,
            availability: 6,
            price: "280 руб",
            oldPrice: null,
            imgUrl: "",
            compound: "сыр маскарпоне, кофе, печенье савоярди, какао, яйцо, сахар",
            shelfLife: "48 часов",
            nutritionalValue: "Белки: 8г, Жиры: 22г, Углеводы: 35г (на 100г)",
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
            imgUrl: "",
            compound: "сливочный сыр, песочное основание, сметана, яйцо, ваниль",
            shelfLife: "72 часа",
            nutritionalValue: "Белки: 7г, Жиры: 25г, Углеводы: 30г (на 100г)",
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
            availability: 5,
            price: "250 руб",
            oldPrice: null,
            imgUrl: "",
            compound: "слоеное тесто, заварной крем, сливочное масло, сахарная пудра",
            shelfLife: "48 часов",
            nutritionalValue: "Белки: 6г, Жиры: 28г, Углеводы: 40г (на 100г)",
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
            availability: 7,
            price: "190 руб",
            oldPrice: null,
            imgUrl: "",
            compound: "горький шоколад, масло сливочное, яйцо, сахар, мука, ванильное мороженое",
            shelfLife: "24 часа",
            nutritionalValue: "Белки: 7г, Жиры: 30г, Углеводы: 45г (на 100г)",
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
            imgUrl: "",
            compound: "сливки, сахар, желатин, ваниль, ягодный соус",
            shelfLife: "48 часов",
            nutritionalValue: "Белки: 4г, Жиры: 20г, Углеводы: 25г (на 100г)",
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
            imgUrl: "",
            compound: "мед, сметана, сгущенное молоко, яйцо, мука, грецкие орехи",
            shelfLife: "72 часа",
            nutritionalValue: "Белки: 6г, Жиры: 18г, Углеводы: 50г (на 100г)",
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
            imgUrl: "",
            compound: "заварное тесто, заварной крем, шоколадная глазурь",
            shelfLife: "48 часов",
            nutritionalValue: "Белки: 5г, Жиры: 15г, Углеводы: 35г (на 100г)",
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
            imgUrl: "",
            compound: "какао, пахта, пищевой краситель, сливочный сыр, масло",
            shelfLife: "72 часа",
            nutritionalValue: "Белки: 5г, Жиры: 22г, Углеводы: 42г (на 100г)",
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
            imgUrl: "",
            compound: "творог, яйцо, манка, изюм, сметана, ванилин",
            shelfLife: "48 часов",
            nutritionalValue: "Белки: 12г, Жиры: 8г, Углеводы: 25г (на 100г)",
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
            imgUrl: "",
            compound: "миндальная мука, сахар, яичный белок, ганаш, пищевые красители",
            shelfLife: "96 часов",
            nutritionalValue: "Белки: 9г, Жиры: 20г, Углеводы: 55г (на 100г)",
            get availabilityTitle() {
            if (this.availability) { return `В наличии ${this.availability}` }
            else return 'Нет в наличии'
            }
        }
    ])
    const allData = ref([
        ...discounts.value,
        
        ...bakery.value,
        ...pizza.value,
        ...grill.value,
        ...meat.value,
        ...salad.value,
        ...soup.value,
        ...hotDish.value,
        ...dessert.value
    ])
    const favoriteData = computed(()=>{
        return [...allData.value].filter(item => item.favorite === true)
    })
    
    return {
        allData,
        favoriteData,
        discounts,
        bakery,
        pizza,
        grill,
        meat,
        salad,
        soup,
        hotDish,
        dessert
    }
})