import { defineStore } from "pinia";
import { Ref, ref } from "vue";
import img1 from '@/assets/img/grocery-section3/img1.png'
import img2 from '@/assets/img/grocery-section3/img2.png'
import img3 from '@/assets/img/grocery-section3/img3.png'
import img4 from '@/assets/img/grocery-section3/img4.png'
import img5 from '@/assets/img/grocery-section3/img5.png'
import img6 from '@/assets/img/grocery-section3/img6.png'
interface SectionItem {
    id: number
    name: string
    category: string
    styles: object
}
export const useSectionFreezingStore = defineStore('sectionFreezingStore', ()=>{
    const FreezingBaseStyles = {
        color: '#383C5C',
        backgroundColor: '#EBEDFF',
        border: '1px solid #C0C5F2',
        backgroundSize: 'contain',
    };
    const freezing: Ref<SectionItem[]> = ref([
        {
            id: 1,
            name: 'Пельмени, вареники и равиоли',
            category: 'dumplings',
            styles: {
                backgroundImage: `url(${img1})`,
                ...FreezingBaseStyles,
                backgroundSize: '80%'
            }
        },
        {
            id: 2,
            name: 'Хинкали и манты',
            category: 'khinkaliManty',
            styles: {
                backgroundImage: `url(${img2})`,
                ...FreezingBaseStyles,
                backgroundSize: '60%'
            }
        },
        {
            id: 3,
            name: 'Полуфабрикаты',
            category: 'semiFinished',
            styles: {
                backgroundImage: `url(${img3})`,
                ...FreezingBaseStyles,
                backgroundSize: '90%'
            }
        },
        {
            id: 4,
            name: 'Замороженные овощи',
            category: 'frozenVegetables',
            styles: {
                backgroundImage: `url(${img4})`,
                ...FreezingBaseStyles,
                backgroundSize: '90%'
            }
        },
        {
            id: 5,
            name: 'Рыба и морепродукты',
            category: 'fish',
            styles: {
                backgroundImage: `url(${img5})`,
                ...FreezingBaseStyles,
            }
        },
        {
            id: 6,
            name: 'Мясо',
            category: 'meat',
            styles: {
                backgroundImage: `url(${img6})`,
                ...FreezingBaseStyles,
            }
        },
    ]);
    return {freezing, FreezingBaseStyles}
})