import { defineStore } from "pinia";
import { computed, Ref, ref } from "vue";
import img1 from '@/assets/img/grocery-section2/img1.png'
import img2 from '@/assets/img/grocery-section2/img2.png'
import img3 from '@/assets/img/grocery-section2/img3.png'
import img4 from '@/assets/img/grocery-section2/img4.png'
import img5 from '@/assets/img/grocery-section2/img5.png'
import img6 from '@/assets/img/grocery-section2/img6.png'
import img7 from '@/assets/img/grocery-section2/img7.png'
import img8 from '@/assets/img/grocery-section2/img8.png'
interface SectionItem {
    id: number
    name: string
    styles: object
}
export const useSectionCookingStore = defineStore('sectionCookingStore', ()=>{
    const CookingBaseStyles = {
        color: '#774631',
        backgroundColor: '#FFF8EB',
        border: '1px solid #FFE7B9',
        backgroundSize: 'contain',
    };
    const cooking: Ref<SectionItem[]> = ref([
        {
            id: 1,
            name: 'Выпечка',
            styles: {
                backgroundImage: `url(${img1})`,
                ...CookingBaseStyles,
                backgroundSize: '70%'
            }
        },
        {
            id: 2,
            name: 'Пиццы',
            styles: {
                backgroundImage: `url(${img2})`,
                ...CookingBaseStyles,
                backgroundSize: '80%'
            }
        },
        {
            id: 3,
            name: 'Гриль-меню',
            styles: {
                backgroundImage: `url(${img3})`,
                ...CookingBaseStyles,
                backgroundSize: '73%'
            }
        },
        {
            id: 5,
            name: 'Салаты',
            styles: {
                backgroundImage: `url(${img5})`,
                ...CookingBaseStyles,
                backgroundSize: '80%'
            }
        },
        {
            id: 6,
            name: 'Супы',
            styles: {
                backgroundImage: `url(${img6})`,
                ...CookingBaseStyles,
                backgroundSize: '80%'
            }
        },
        {
            id: 7,
            name: 'Горячие блюда',
            styles: {
                backgroundImage: `url(${img7})`,
                ...CookingBaseStyles,
                backgroundSize: '80%'
            }
        },
        {
            id: 8,
            name: 'Десерты',
            styles: {
                backgroundImage: `url(${img8})`,
                ...CookingBaseStyles,
                backgroundSize: '60%'
            }
        }
    ]);
    return {cooking, CookingBaseStyles}
})