import { defineStore } from "pinia";
import { computed, Ref, ref } from "vue";
import img1 from '@/assets/img/grocery-section1/img1.png'
import img2 from '@/assets/img/grocery-section1/img2.png'
import img3 from '@/assets/img/grocery-section1/img3.png'
import img4 from '@/assets/img/grocery-section1/img4.png'
import img5 from '@/assets/img/grocery-section1/img5.png'
import img6 from '@/assets/img/grocery-section1/img6.png'
import img7 from '@/assets/img/grocery-section1/img7.png'
import img8 from '@/assets/img/grocery-section1/img8.png'
interface SectionItem {
    id: number
    name: string
    styles: object
}
export const useSectionStore = defineStore('sectionStore', ()=>{
    const superMarket: Ref<SectionItem[]> = ref([
        {
            id: 1,
            name: 'Вода и напитки',
            styles: {
                backgroundImage: `url(${img1})`, 
                color: '#383C5C',
                backgroundColor: '#F7FFE5',
                border: '1px solid #CCE0A0',
            }
        },
        {
            id: 2,
            name: 'Молоко, масло и яйца',
            styles: {
                backgroundImage: `url(${img2})`,
                color: '#383C5C',
                backgroundColor: '#F7FFE5',
                border: '1px solid #CCE0A0',
            }
        },
        {
            id: 3,
            name: 'Снэки и сухофрукты',
            styles: {
                backgroundImage: `url(${img3})`,
                color: '#383C5C',
                backgroundColor: '#F7FFE5',
                border: '1px solid #CCE0A0',
                backgroundSize: '70%'
            }
        },
        {
            id: 4,
            name: 'Кофе, чай и сладости',
            styles: {
                backgroundImage: `url(${img4})`,
                color: '#383C5C',
                backgroundColor: '#F7FFE5',
                border: '1px solid #CCE0A0',
            }
        },
        {
            id: 5,
            name: 'Макароны и крупы',
            styles: {
                backgroundImage: `url(${img5})`,
                color: '#383C5C',
                backgroundColor: '#F7FFE5',
                border: '1px solid #CCE0A0',
                backgroundSize: '80%'
            }
        },
        {
            id: 6,
            name: 'Хлеб и выпечка',
            styles: {
                backgroundImage: `url(${img6})`,
                color: '#383C5C',
                backgroundColor: '#F7FFE5',
                border: '1px solid #CCE0A0',
            }
        },
        {
            id: 7,
            name: 'Масло, соусы и специи',
            styles: {
                backgroundImage: `url(${img7})`,
                color: '#383C5C',
                backgroundColor: '#F7FFE5',
                border: '1px solid #CCE0A0',
            }
        },
        {
            id: 8,
            name: 'Консервы и соления',
            styles: {
                backgroundImage: `url(${img8})`,
                color: '#383C5C',
                backgroundColor: '#F7FFE5',
                border: '1px solid #CCE0A0',
                backgroundSize: '60%'
            }
        }
    ])
    return {superMarket}
})