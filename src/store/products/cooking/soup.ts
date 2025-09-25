export const soup = [
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
    ]