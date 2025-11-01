import img1 from '@/assets/products-img/cooking/meat/pork_neck.png'
import img2 from '@/assets/products-img/cooking/meat/chicken_fillets.webp'
import img3 from '@/assets/products-img/cooking/meat/lamb.png'
import img4 from '@/assets/products-img/cooking/meat/turkey.jpeg'
import img5 from '@/assets/products-img/cooking/meat/pork_ribs.png'
import img6 from '@/assets/products-img/cooking/meat/ground_beef.webp'
import img7 from '@/assets/products-img/cooking/meat/duck.png'
export const meat = [
    {
        id: 402,
        title: "Свиная шея",
        discount: true,
        favorite: false,
        availability: 8,
        price: "450 руб",
        oldPrice: "520 руб",
        imgUrl: img1,
        compound: "свиная шея охлажденная",
        shelfLife: "72 часа",
        nutritionalValue: "Белки: 18г, Жиры: 20г, Углеводы: 0г (на 100г)",
        category: 'meat',
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
        imgUrl: img2,
        compound: "куриное филе охлажденное",
        shelfLife: "48 часов",
        nutritionalValue: "Белки: 23г, Жиры: 2г, Углеводы: 0г (на 100г)",
        category: 'meat',
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
        imgUrl: img3,
        compound: "бараний окорок охлажденный",
        shelfLife: "72 часа",
        nutritionalValue: "Белки: 20г, Жиры: 18г, Углеводы: 0г (на 100г)",
        category: 'meat',
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
        imgUrl: img4,
        compound: "филе грудки индейки охлажденное",
        shelfLife: "48 часов",
        nutritionalValue: "Белки: 24г, Жиры: 3г, Углеводы: 0г (на 100г)",
        category: 'meat',
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
        availability: 0,
        price: "380 руб",
        oldPrice: "430 руб",
        imgUrl: img5,
        compound: "свиные ребрышки охлажденные",
        shelfLife: "72 часа",
        nutritionalValue: "Белки: 16г, Жиры: 25г, Углеводы: 0г (на 100г)",
        category: 'meat',
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
        imgUrl: img6,
        compound: "говяжий фарш охлажденный",
        shelfLife: "48 часов",
        nutritionalValue: "Белки: 20г, Жиры: 15г, Углеводы: 0г (на 100г)",
        category: 'meat',
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
        imgUrl: img7,
        compound: "утиная грудка охлажденная",
        shelfLife: "72 часа",
        nutritionalValue: "Белки: 19г, Жиры: 22г, Углеводы: 0г (на 100г)",
        category: 'meat',
        get availabilityTitle() {
        if (this.availability) { return `В наличии ${this.availability}` }
        else return 'Нет в наличии'
        }
    }

]