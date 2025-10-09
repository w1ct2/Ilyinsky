import img1 from '@/assets/products-img/freeze/khinkali/khinkali-georgia.webp'
import img2 from '@/assets/products-img/freeze/khinkali/khinkali-beef.jpg'
import img3 from '@/assets/products-img/freeze/khinkali/khinkali-sheepmeat.webp'
import img4 from '@/assets/products-img/freeze/khinkali/manty-pumpkin.png'
import img5 from '@/assets/products-img/freeze/khinkali/khinkali-chicken.png'
import img6 from '@/assets/products-img/freeze/khinkali/manty-mini.png'

export const khinkaliManty = [
    {
        id: 1801,
        title: "Хинкали грузинские",
        discount: false,
        favorite: false,
        availability: 18,
        price: "480 руб",
        oldPrice: null,
        imgUrl: img1,
        compound: "мука, говядина, свинина, лук, чеснок, зелень, специи",
        shelfLife: "6 месяцев",
        nutritionalValue: "Белки: 14г, Жиры: 16г, Углеводы: 22г (на 100г)",
        get availabilityTitle() {
        if (this.availability) { return `В наличии ${this.availability}` }
        else return 'Нет в наличии'
        }
    },
    {
        id: 1802,
        title: "Хинкали с говядиной",
        discount: true,
        favorite: false,
        availability: 15,
        price: "390 руб",
        oldPrice: "450 руб",
        imgUrl: img2,
        compound: "мука, говядина, лук, курдючное сало, специи",
        shelfLife: "6 месяцев",
        nutritionalValue: "Белки: 13г, Жиры: 18г, Углеводы: 20г (на 100г)",
        get availabilityTitle() {
        if (this.availability) { return `В наличии ${this.availability}` }
        else return 'Нет в наличии'
        }
    },
    {
        id: 1803,
        title: "Хинкали с бараниной",
        discount: false,
        favorite: false,
        availability: 12,
        price: "520 руб",
        oldPrice: null,
        imgUrl: img3,
        compound: "мука, баранина, лук, кинза, зира, перец",
        shelfLife: "6 месяцев",
        nutritionalValue: "Белки: 15г, Жиры: 20г, Углеводы: 21г (на 100г)",
        get availabilityTitle() {
        if (this.availability) { return `В наличии ${this.availability}` }
        else return 'Нет в наличии'
        }
    },
    {
        id: 1804,
        title: "Манты с тыквой",
        discount: false,
        favorite: false,
        availability: 10,
        price: "320 руб",
        oldPrice: null,
        imgUrl: img4,
        compound: "мука, тыква, лук, курдючное сало, специи",
        shelfLife: "6 месяцев",
        nutritionalValue: "Белки: 6г, Жиры: 8г, Углеводы: 28г (на 100г)",
        get availabilityTitle() {
        if (this.availability) { return `В наличии ${this.availability}` }
        else return 'Нет в наличии'
        }
    },
    {
        id: 1805,
        title: "Хинкали куриные",
        discount: false,
        favorite: false,
        availability: 22,
        price: "420 руб",
        oldPrice: null,
        imgUrl: img5,
        compound: "мука, куриное филе, лук, зелень, специи",
        shelfLife: "6 месяцев",
        nutritionalValue: "Белки: 16г, Жиры: 12г, Углеводы: 23г (на 100г)",
        get availabilityTitle() {
        if (this.availability) { return `В наличии ${this.availability}` }
        else return 'Нет в наличии'
        }
    },
    {
        id: 1808,
        title: "Манты мини",
        discount: false,
        favorite: false,
        availability: 25,
        price: "280 руб",
        oldPrice: null,
        imgUrl: img6,
        compound: "мука, говядина, лук, специи",
        shelfLife: "6 месяцев",
        nutritionalValue: "Белки: 12г, Жиры: 15г, Углеводы: 18г (на 100г)",
        get availabilityTitle() {
        if (this.availability) { return `В наличии ${this.availability}` }
        else return 'Нет в наличии'
        }
    }
]
