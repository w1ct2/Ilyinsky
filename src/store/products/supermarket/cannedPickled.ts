import img1 from '@/assets/products-img/supermarket/cannedPickled/tuna.webp'
import img2 from '@/assets/products-img/supermarket/cannedPickled/bonduelle.webp'
import img3 from '@/assets/products-img/supermarket/cannedPickled/cucumbers.webp'
import img4 from '@/assets/products-img/supermarket/cannedPickled/sprats.webp'
import img5 from '@/assets/products-img/supermarket/cannedPickled/green-bean.webp'
import img6 from '@/assets/products-img/supermarket/cannedPickled/squash-caviar.webp'
import img7 from '@/assets/products-img/supermarket/cannedPickled/pineapple.webp'
import img8 from '@/assets/products-img/supermarket/cannedPickled/cabbage.webp'
export const cannedPickled = [
    {
        id: 1601,
        title: "Тунец в собственном соку",
        discount: false,
        favorite: false,
        availability: 20,
        price: "190 руб",
        oldPrice: null,
        imgUrl: img1,
        compound: "тунец, соль, вода",
        shelfLife: "36 месяцев",
        nutritionalValue: "Белки: 26г, Жиры: 1г, Углеводы: 0г (на 100г)",
        category: 'cannedPickled',
        get availabilityTitle() {
        if (this.availability) { return `В наличии ${this.availability}` }
        else return 'Нет в наличии'
        }
    },
    {
        id: 1602,
        title: "Кукуруза Bonduelle сладкая",
        discount: true,
        favorite: false,
        availability: 25,
        price: "85 руб",
        oldPrice: "100 руб",
        imgUrl: img2,
        compound: "кукуруза зерновая, вода, сахар, соль",
        shelfLife: "24 месяца",
        nutritionalValue: "Белки: 3г, Жиры: 1г, Углеводы: 14г (на 100г)",
        category: 'cannedPickled',
        get availabilityTitle() {
        if (this.availability) { return `В наличии ${this.availability}` }
        else return 'Нет в наличии'
        }
    },
    {
        id: 1603,
        title: "Огурцы маринованные",
        discount: false,
        favorite: false,
        availability: 18,
        price: "120 руб",
        oldPrice: null,
        imgUrl: img3,
        compound: "огурцы, вода, уксус, соль, сахар, специи, укроп",
        shelfLife: "24 месяца",
        nutritionalValue: "Белки: 1г, Жиры: 0г, Углеводы: 3г (на 100г)",
        category: 'cannedPickled',
        get availabilityTitle() {
        if (this.availability) { return `В наличии ${this.availability}` }
        else return 'Нет в наличии'
        }
    },
    {
        id: 1604,
        title: "Шпроты в масле",
        discount: false,
        favorite: false,
        availability: 15,
        price: "220 руб",
        oldPrice: null,
        imgUrl: img4,
        compound: "шпроты, масло подсолнечное, соль",
        shelfLife: "24 месяца",
        nutritionalValue: "Белки: 17г, Жиры: 32г, Углеводы: 0г (на 100г)",
        category: 'cannedPickled',
        get availabilityTitle() {
        if (this.availability) { return `В наличии ${this.availability}` }
        else return 'Нет в наличии'
        }
    },
    {
        id: 1605,
        title: "Фасоль стручковая консервированная",
        discount: false,
        favorite: false,
        availability: 12,
        price: "75 руб",
        oldPrice: null,
        imgUrl: img5,
        compound: "фасоль стручковая, вода, соль",
        shelfLife: "24 месяца",
        nutritionalValue: "Белки: 2г, Жиры: 0г, Углеводы: 4г (на 100г)",
        category: 'cannedPickled',
        get availabilityTitle() {
        if (this.availability) { return `В наличии ${this.availability}` }
        else return 'Нет в наличии'
        }
    },
    {
        id: 1606,
        title: "Икра кабачковая",
        discount: true,
        favorite: false,
        availability: 22,
        price: "95 руб",
        oldPrice: "115 руб",
        imgUrl: img6,
        compound: "кабачки, томатная паста, морковь, лук, масло, соль, специи",
        shelfLife: "18 месяцев",
        nutritionalValue: "Белки: 2г, Жиры: 7г, Углеводы: 9г (на 100г)",
        category: 'cannedPickled',
        get availabilityTitle() {
        if (this.availability) { return `В наличии ${this.availability}` }
        else return 'Нет в наличии'
        }
    },
    {
        id: 1607,
        title: "Ананасы кусочками",
        discount: false,
        favorite: false,
        availability: 16,
        price: "150 руб",
        oldPrice: null,
        imgUrl: img7,
        compound: "ананасы, вода, сахар",
        shelfLife: "36 месяцев",
        nutritionalValue: "Белки: 0г, Жиры: 0г, Углеводы: 16г (на 100г)",
        category: 'cannedPickled',
        get availabilityTitle() {
        if (this.availability) { return `В наличии ${this.availability}` }
        else return 'Нет в наличии'
        }
    },
    {
        id: 1608,
        title: "Квашеная капуста",
        discount: false,
        favorite: false,
        availability: 30,
        price: "65 руб",
        oldPrice: null,
        imgUrl: img8,
        compound: "капуста белокочанная, морковь, соль",
        shelfLife: "6 месяцев",
        nutritionalValue: "Белки: 2г, Жиры: 0г, Углеводы: 5г (на 100г)",
        category: 'cannedPickled',
        get availabilityTitle() {
        if (this.availability) { return `В наличии ${this.availability}` }
        else return 'Нет в наличии'
        }
    }
    ]
