import img1 from '@/assets/products-img/supermarket/water-drinks/borjomi.webp'
import img2 from '@/assets/products-img/supermarket/water-drinks/rich.webp'
import img3 from '@/assets/products-img/supermarket/water-drinks/buratino.webp'
import img4 from '@/assets/products-img/supermarket/water-drinks/burn.webp'
import img5 from '@/assets/products-img/supermarket/water-drinks/holy-spring.webp'
import img6 from '@/assets/products-img/supermarket/water-drinks/ya.jpeg'
import img7 from '@/assets/products-img/supermarket/water-drinks/coca-cola.webp'
import img8 from '@/assets/products-img/supermarket/water-drinks/ivan-tea.webp'
import img9 from '@/assets/products-img/supermarket/water-drinks/schweppes.jpeg'
import img10 from '@/assets/products-img/supermarket/water-drinks/dobriy.webp'
export const waterDrinks = [
    {
        id: 1001,
        title: "Вода минеральная Боржоми",
        discount: false,
        favorite: false,
        availability: 25,
        price: "120 руб",
        oldPrice: null,
        imgUrl: img1,
        compound: "минеральная вода натуральная газированная",
        shelfLife: "12 месяцев",
        nutritionalValue: "Кальций: 20мг, Магний: 15мг, Натрий: 120мг (на 1л)",
        category: 'waterDrinks',
        get availabilityTitle() {
        if (this.availability) { return `В наличии ${this.availability}` }
        else return 'Нет в наличии'
        }
    },
    {
        id: 1002,
        title: "Сок Rich апельсиновый",
        discount: true,
        favorite: false,
        availability: 18,
        price: "95 руб",
        oldPrice: "110 руб",
        imgUrl: img2,
        compound: "апельсиновый сок восстановленный, мякоть",
        shelfLife: "9 месяцев",
        nutritionalValue: "Углеводы: 11г, Витамин C: 25мг (на 100мл)",
        category: 'waterDrinks',
        get availabilityTitle() {
        if (this.availability) { return `В наличии ${this.availability}` }
        else return 'Нет в наличии'
        }
    },
    {
        id: 1003,
        title: "Лимонад Буратино",
        discount: false,
        favorite: false,
        availability: 30,
        price: "85 руб",
        oldPrice: null,
        imgUrl: img3,
        compound: "вода, сахар, лимонная кислота, ароматизатор",
        shelfLife: "6 месяцев",
        nutritionalValue: "Углеводы: 10г, Белки: 0г, Жиры: 0г (на 100мл)",
        category: 'waterDrinks',
        get availabilityTitle() {
        if (this.availability) { return `В наличии ${this.availability}` }
        else return 'Нет в наличии'
        }
    },
    {
        id: 1004,
        title: "Энергетический напиток Burn",
        discount: false,
        favorite: false,
        availability: 15,
        price: "140 руб",
        oldPrice: null,
        imgUrl: img4,
        compound: "вода, сахар, таурин, кофеин, витамины группы B",
        shelfLife: "12 месяцев",
        nutritionalValue: "Углеводы: 11г, Кофеин: 32мг (на 100мл)",
        category: 'waterDrinks',
        get availabilityTitle() {
        if (this.availability) { return `В наличии ${this.availability}` }
        else return 'Нет в наличии'
        }
    },
    {
        id: 1005,
        title: "Вода питьевая Святой Источник",
        discount: false,
        favorite: false,
        availability: 40,
        price: "65 руб",
        oldPrice: null,
        imgUrl: img5,
        compound: "вода питьевая негазированная",
        shelfLife: "12 месяцев",
        nutritionalValue: "Кальций: 5мг, Магний: 2мг (на 1л)",
        category: 'waterDrinks',
        get availabilityTitle() {
        if (this.availability) { return `В наличии ${this.availability}` }
        else return 'Нет в наличии'
        }
    },
    {
        id: 1006,
        title: "Морс клюквенный Я",
        discount: true,
        favorite: false,
        availability: 12,
        price: "130 руб",
        oldPrice: "150 руб",
        imgUrl: img6,
        compound: "клюквенный сок, вода, сахар, натуральный ароматизатор",
        shelfLife: "8 месяцев",
        nutritionalValue: "Углеводы: 12г, Витамин C: 15мг (на 100мл)",
        category: 'waterDrinks',
        get availabilityTitle() {
        if (this.availability) { return `В наличии ${this.availability}` }
        else return 'Нет в наличии'
        }
    },
    {
        id: 1007,
        title: "Газировка Coca-Cola",
        discount: false,
        favorite: false,
        availability: 35,
        price: "90 руб",
        oldPrice: null,
        imgUrl: img7,
        compound: "вода, сахар, диоксид углерода, краситель, кофеин",
        shelfLife: "9 месяцев",
        nutritionalValue: "Углеводы: 10.6г, Кофеин: 10мг (на 100мл)",
        category: 'waterDrinks',
        get availabilityTitle() {
        if (this.availability) { return `В наличии ${this.availability}` }
        else return 'Нет в наличии'
        }
    },
    {
        id: 1008,
        title: "Иван-чай ферментированный",
        discount: false,
        favorite: false,
        availability: 8,
        price: "180 руб",
        oldPrice: null,
        imgUrl: img8,
        compound: "трава иван-чая ферментированная",
        shelfLife: "24 месяца",
        nutritionalValue: "Белки: 0г, Жиры: 0г, Углеводы: 0г (на 100мл заваренного)",
        category: 'waterDrinks',
        get availabilityTitle() {
        if (this.availability) { return `В наличии ${this.availability}` }
        else return 'Нет в наличии'
        }
    },
    {
        id: 1009,
        title: "Тоник Schweppes",
        discount: false,
        favorite: false,
        availability: 20,
        price: "110 руб",
        oldPrice: null,
        imgUrl: img9,
        compound: "вода, сахар, хинин, лимонная кислота, натуральные ароматизаторы",
        shelfLife: "12 месяцев",
        nutritionalValue: "Углеводы: 8.9г, Хинин: 0.005% (на 100мл)",
        category: 'waterDrinks',
        get availabilityTitle() {
        if (this.availability) { return `В наличии ${this.availability}` }
        else return 'Нет в наличии'
        }
    },
    {
        id: 1010,
        title: "Сок прямого отжима Добрый",
        discount: true,
        favorite: false,
        availability: 14,
        price: "160 руб",
        oldPrice: "185 руб",
        imgUrl: img10,
        compound: "яблочный сок прямого отжима, витамин C",
        shelfLife: "12 месяцев",
        nutritionalValue: "Углеводы: 11г, Витамин C: 30мг (на 100мл)",
        category: 'waterDrinks',
        get availabilityTitle() {
        if (this.availability) { return `В наличии ${this.availability}` }
        else return 'Нет в наличии'
        }
    }
]
