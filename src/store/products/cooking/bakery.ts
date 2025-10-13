import img1 from '@/assets/products-img/cooking/bakery/cruassan.webp'
import img2 from '@/assets/products-img/cooking/bakery/apple_bun.webp'
import img3 from '@/assets/products-img/cooking/bakery/cherry_bun.webp'
import img4 from '@/assets/products-img/cooking/bakery/baguette.jpeg'
import img5 from '@/assets/products-img/cooking/bakery/donut.webp'
import img6 from '@/assets/products-img/cooking/bakery/pie.jpeg'
import img7 from '@/assets/products-img/cooking/bakery/poppy_bun.webp'
import img8 from '@/assets/products-img/cooking/bakery/chechil.webp'
import img9 from '@/assets/products-img/cooking/bakery/kulich.png'
import img10 from '@/assets/products-img/cooking/bakery/pie_potato.webp'
export const bakery = [
    {
        id: 101,
        title: "Круассан с шоколадом",
        discount: false,
        favorite: false,
        availability: 15,
        price: '120 руб',
        oldPrice: null,
        imgUrl: img1,
        compound: "мука пшеничная, масло сливочное, шоколадная начинка (10%), вода, сахар, дрожжи, соль, яичный меланж",
        shelfLife: "24 часа",
        nutritionalValue: "Белки: 6г, Жиры: 19г, Углеводы: 42г (на 100г)",
        category: 'bakery',
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
        imgUrl: img2,
        compound: "тесто слоеное, начинка яблочная (15%), сахар, корица, глазурь сахарная",
        shelfLife: "36 часов",
        nutritionalValue: "Белки: 5г, Жиры: 12г, Углеводы: 45г (на 100г)",
        category: 'bakery',
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
        imgUrl: img3,
        compound: "тесто дрожжевое, начинка вишневая (20%), сахар, крахмал кукурузный",
        shelfLife: "24 часа",
        nutritionalValue: "Белки: 5г, Жиры: 8г, Углеводы: 38г (на 100г)",
        category: 'bakery',
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
        imgUrl: img4,
        compound: "мука пшеничная высший сорт, вода, дрожжи, соль, солод",
        shelfLife: "48 часов",
        nutritionalValue: "Белки: 8г, Жиры: 1г, Углеводы: 52г (на 100г)",
        category: 'bakery',
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
        imgUrl: img5,
        compound: "мука, сахар, яйцо, масло растительное, молоко, дрожжи, сахарная пудра, ванилин",
        shelfLife: "48 часов",
        nutritionalValue: "Белки: 6г, Жиры: 15г, Углеводы: 50г (на 100г)",
        category: 'bakery',
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
        imgUrl: img6,
        compound: "тесто дрожжевое, филе куриное, шампиньоны, лук, сливки, соль, перец, зелень",
        shelfLife: "36 часов",
        nutritionalValue: "Белки: 12г, Жиры: 15г, Углеводы: 25г (на 100г)",
        category: 'bakery',
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
        imgUrl: img7,
        compound: "мука, мак, молоко, масло сливочное, сахар, дрожжи, яйцо, ванилин",
        shelfLife: "72 часа",
        nutritionalValue: "Белки: 7г, Жиры: 10г, Углеводы: 48г (на 100г)",
        category: 'bakery',
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
        imgUrl: img8,
        compound: "сыр чечил, соль",
        shelfLife: "45 суток",
        nutritionalValue: "Белки: 25г, Жиры: 25г, Углеводы: 0г (на 100г)",
        category: 'bakery',
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
        imgUrl: img9,
        compound: "мука, изюм, цукаты, масло сливочное, яйца, молоко, дрожжи, сахар, ванилин, глазурь",
        shelfLife: "120 часов",
        nutritionalValue: "Белки: 8г, Жиры: 14г, Углеводы: 55г (на 100г)",
        category: 'bakery',
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
        imgUrl: img10,
        compound: "печенье сахарное, масло сливочное, сгущенное молоко, какао, орехи грецкие, коньяк",
        shelfLife: "96 часов",
        nutritionalValue: "Белки: 5г, Жиры: 20г, Углеводы: 45г (на 100г)",
        category: 'bakery',
        get availabilityTitle():string {
            if(this.availability){return `В наличии ${this.availability}`}
            else return 'Нет в наличии'
        },
    }
]