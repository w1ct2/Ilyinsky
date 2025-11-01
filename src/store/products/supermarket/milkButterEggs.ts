import img1 from '@/assets/products-img/supermarket/milk-oil-eggs/prostokvasheno.webp'
import img2 from '@/assets/products-img/supermarket/milk-oil-eggs/eggs.webp'
import img4 from '@/assets/products-img/supermarket/milk-oil-eggs/house-in-village.webp'
import img5 from '@/assets/products-img/supermarket/milk-oil-eggs/sour-cream-prostokvasheno.webp'
import img6 from '@/assets/products-img/supermarket/milk-oil-eggs/curd-prostokvasheno.webp'
import img7 from '@/assets/products-img/supermarket/milk-oil-eggs/sunflower-oil.webp'
import img8 from '@/assets/products-img/supermarket/milk-oil-eggs/druzhba.webp'
import img9 from '@/assets/products-img/supermarket/milk-oil-eggs/parmalat.webp'
export const milkButterEggs = [
    {
        id: 1101,
        title: "Молоко пастеризованное Простоквашино 3.2%",
        discount: false,
        favorite: false,
        availability: 22,
        price: "89 руб",
        oldPrice: null,
        imgUrl: img1,
        compound: "молоко цельное пастеризованное",
        shelfLife: "10 суток",
        nutritionalValue: "Белки: 3г, Жиры: 3.2г, Углеводы: 4.7г (на 100мл)",
        category: 'milkButterEggs',
        get availabilityTitle() {
        if (this.availability) { return `В наличии ${this.availability}` }
        else return 'Нет в наличии'
        }
    },
    {
        id: 1102,
        title: "Яйца куриные отборные С1",
        discount: true,
        favorite: false,
        availability: 30,
        price: "120 руб",
        oldPrice: "140 руб",
        imgUrl: img2,
        compound: "яйца куриные пищевые",
        shelfLife: "30 суток",
        nutritionalValue: "Белки: 13г, Жиры: 11г, Углеводы: 1г (на 100г)",
        category: 'milkButterEggs',
        get availabilityTitle() {
        if (this.availability) { return `В наличии ${this.availability}` }
        else return 'Нет в наличии'
        }
    },
    {
        id: 1104,
        title: "Кефир Домик в деревне 2.5%",
        discount: false,
        favorite: false,
        availability: 18,
        price: "75 руб",
        oldPrice: null,
        imgUrl: img4,
        compound: "молоко нормализованное, закваска",
        shelfLife: "12 суток",
        nutritionalValue: "Белки: 3г, Жиры: 2.5г, Углеводы: 4г (на 100мл)",
        category: 'milkButterEggs',
        get availabilityTitle() {
        if (this.availability) { return `В наличии ${this.availability}` }
        else return 'Нет в наличии'
        }
    },
    {
        id: 1105,
        title: "Сметана 20% Простоквашино",
        discount: true,
        favorite: false,
        availability: 25,
        price: "95 руб",
        oldPrice: "110 руб",
        imgUrl: img5,
        compound: "сливки нормализованные, закваска",
        shelfLife: "20 суток",
        nutritionalValue: "Белки: 3г, Жиры: 20г, Углеводы: 3г (на 100г)",
        category: 'milkButterEggs',
        get availabilityTitle() {
        if (this.availability) { return `В наличии ${this.availability}` }
        else return 'Нет в наличии'
        }
    },
    {
        id: 1106,
        title: "Творог обезжиренный 0%",
        discount: false,
        favorite: false,
        availability: 0,
        price: "85 руб",
        oldPrice: null,
        imgUrl: img6,
        compound: "творог из обезжиренного молока",
        shelfLife: "7 суток",
        nutritionalValue: "Белки: 18г, Жиры: 0г, Углеводы: 3г (на 100г)",
        category: 'milkButterEggs',
        get availabilityTitle() {
        if (this.availability) { return `В наличии ${this.availability}` }
        else return 'Нет в наличии'
        }
    },
    {
        id: 1108,
        title: "Масло подсолнечное",
        discount: false,
        favorite: false,
        availability: 20,
        price: "150 руб",
        oldPrice: null,
        imgUrl: img7,
        compound: "масло подсолнечное рафинированное",
        shelfLife: "18 месяцев",
        nutritionalValue: "Жиры: 99.9г, Витамин E: 40мг (на 100г)",
        category: 'milkButterEggs',
        get availabilityTitle() {
        if (this.availability) { return `В наличии ${this.availability}` }
        else return 'Нет в наличии'
        }
    },
    {
        id: 1109,
        title: "Сыр плавленый Дружба",
        discount: true,
        favorite: false,
        availability: 0,
        price: "65 руб",
        oldPrice: "75 руб",
        imgUrl: img8,
        compound: "сыры, масло сливочное, сухое молоко, соли-плавители",
        shelfLife: "6 месяцев",
        nutritionalValue: "Белки: 20г, Жиры: 23г, Углеводы: 2г (на 100г)",
        category: 'milkButterEggs',
        get availabilityTitle() {
        if (this.availability) { return `В наличии ${this.availability}` }
        else return 'Нет в наличии'
        }
    },
    {
        id: 1110,
        title: "Молоко ультрапастеризованное Parmalat",
        discount: false,
        favorite: false,
        availability: 14,
        price: "110 руб",
        oldPrice: null,
        imgUrl: img9,
        compound: "молоко цельное ультрапастеризованное",
        shelfLife: "6 месяцев",
        nutritionalValue: "Белки: 3.2г, Жиры: 3.5г, Углеводы: 4.8г (на 100мл)",
        category: 'milkButterEggs',
        get availabilityTitle() {
        if (this.availability) { return `В наличии ${this.availability}` }
        else return 'Нет в наличии'
        }
    }
]
