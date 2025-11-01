import img1 from '@/assets/products-img/freeze/frozenVegetables/hawaii-mix.webp'
import img2 from '@/assets/products-img/freeze/frozenVegetables/broccoli.webp'
import img3 from '@/assets/products-img/freeze/frozenVegetables/spinach.webp'
import img4 from '@/assets/products-img/freeze/frozenVegetables/cabbage.webp'
import img5 from '@/assets/products-img/freeze/frozenVegetables/carib.webp'
export const frozenVegetables = [
    {
        id: 2001,
        title: "Овощная смесь Гавайская",
        discount: false,
        favorite: false,
        availability: 25,
        price: "180 руб",
        oldPrice: null,
        imgUrl: img1,
        compound: "кукуруза, горошек, перец болгарский, фасоль стручковая, морковь",
        shelfLife: "12 месяцев",
        nutritionalValue: "Белки: 4г, Жиры: 1г, Углеводы: 12г (на 100г)",
        category: 'frozenVegetables',
        get availabilityTitle() {
        if (this.availability) { return `В наличии ${this.availability}` }
        else return 'Нет в наличии'
        }
    },
    {
        id: 2002,
        title: "Брокколи замороженная",
        discount: true,
        favorite: false,
        availability: 18,
        price: "150 руб",
        oldPrice: "180 руб",
        imgUrl: img2,
        compound: "брокколи",
        shelfLife: "12 месяцев",
        nutritionalValue: "Белки: 3г, Жиры: 0г, Углеводы: 7г (на 100г)",
        category: 'frozenVegetables',
        get availabilityTitle() {
        if (this.availability) { return `В наличии ${this.availability}` }
        else return 'Нет в наличии'
        }
    },
    {
        id: 2003,
        title: "Шпинат замороженный",
        discount: false,
        favorite: false,
        availability: 15,
        price: "120 руб",
        oldPrice: null,
        imgUrl: img3,
        compound: "шпинат",
        shelfLife: "12 месяцев",
        nutritionalValue: "Белки: 3г, Жиры: 1г, Углеводы: 4г (на 100г)",
        category: 'frozenVegetables',
        get availabilityTitle() {
        if (this.availability) { return `В наличии ${this.availability}` }
        else return 'Нет в наличии'
        }
    },
    {
        id: 2004,
        title: "Цветная капуста",
        discount: false,
        favorite: false,
        availability: 0,
        price: "130 руб",
        oldPrice: null,
        imgUrl: img4,
        compound: "цветная капуста",
        shelfLife: "12 месяцев",
        nutritionalValue: "Белки: 2г, Жиры: 0г, Углеводы: 5г (на 100г)",
        category: 'frozenVegetables',
        get availabilityTitle() {
        if (this.availability) { return `В наличии ${this.availability}` }
        else return 'Нет в наличии'
        }
    },
    {
        id: 2005,
        title: "Смесь Карибская",
        discount: false,
        favorite: false,
        availability: 12,
        price: "190 руб",
        oldPrice: null,
        imgUrl: img5,
        compound: "баклажаны, кабачки, перец, помидоры, лук",
        shelfLife: "12 месяцев",
        nutritionalValue: "Белки: 2г, Жиры: 0г, Углеводы: 8г (на 100г)",
        category: 'frozenVegetables',
        get availabilityTitle() {
        if (this.availability) { return `В наличии ${this.availability}` }
        else return 'Нет в наличии'
        }
    },
]
