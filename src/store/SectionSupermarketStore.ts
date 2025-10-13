import { defineStore } from "pinia";
import { computed, Ref, ref } from "vue";
import img1_1 from '@/assets/img/grocery-section1/img1.png'
import img1_2 from '@/assets/img/grocery-section1/img2.png'
import img1_3 from '@/assets/img/grocery-section1/img3.png'
import img1_4 from '@/assets/img/grocery-section1/img4.png'
import img1_5 from '@/assets/img/grocery-section1/img5.png'
import img1_6 from '@/assets/img/grocery-section1/img6.png'
import img1_7 from '@/assets/img/grocery-section1/img7.png'
import img1_8 from '@/assets/img/grocery-section1/img8.png'
interface SectionItem {
    id: number
    name: string
    category: string
    styles: object
}
export const useSectionSupermarketStore = defineStore('sectionSupermarketStore', ()=>{
    const SuperMarketBaseStyles = {
        color: '#383C5C',
        backgroundColor: '#F7FFE5',
        border: '1px solid #CCE0A0',
        backgroundSize: 'contain',
    };
    const superMarket: Ref<SectionItem[]> = ref([
        {
            id: 1,
            name: 'Вода и напитки',
            category: 'waterDrinks',
            styles: {
                backgroundImage: `url(${img1_1})`, 
                ...SuperMarketBaseStyles
            }
        },
        {
            id: 2,
            name: 'Молоко, масло и яйца',
            category: 'milkButterEggs',
            styles: {
                backgroundImage: `url(${img1_2})`,
                ...SuperMarketBaseStyles
            }
        },
        {
            id: 3,
            name: 'Снэки и сухофрукты',
            category: 'snacks',
            styles: {
                backgroundImage: `url(${img1_3})`,
                ...SuperMarketBaseStyles,
                backgroundSize: '70%'
            }
        },
        {
            id: 4,
            name: 'Кофе, чай и сладости',
            category: 'coffeeTeaSweets',
            styles: {
                backgroundImage: `url(${img1_4})`,
                ...SuperMarketBaseStyles
            }
        },
        {
            id: 5,
            name: 'Макароны и крупы',
            category: 'pastaCereals',
            styles: {
                backgroundImage: `url(${img1_5})`,
                ...SuperMarketBaseStyles,
                backgroundSize: '80%'
            }
        },
        {
            id: 7,
            name: 'Масло, соусы и специи',
            category: 'oilSaucesSpices',
            styles: {
                backgroundImage: `url(${img1_7})`,
                ...SuperMarketBaseStyles
            }
        },
        {
            id: 8,
            name: 'Консервы и соления',
            category: 'cannedPickled',
            styles: {
                backgroundImage: `url(${img1_8})`,
                ...SuperMarketBaseStyles,
                backgroundSize: '60%'
            }
        }
    ])
    return {superMarket, SuperMarketBaseStyles}
})