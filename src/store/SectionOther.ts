import { defineStore } from "pinia";
import { Ref, ref } from "vue";
import img1 from '@/assets/img/grocery-section4/img1.png'
import img2 from '@/assets/img/grocery-section4/img2.png'
import img3 from '@/assets/img/grocery-section4/img3.png'
import img4 from '@/assets/img/grocery-section4/img4.png'
interface SectionItem {
    id: number
    name: string
    category: string
    styles: object
}
export const useSectionOtherStore = defineStore('sectionOtherStore', ()=>{
    const OtherBaseStyles = {
        color: '#274447C',
        backgroundColor: '#EBFDFF',
        border: '1px solid #A3D0D6',
        backgroundSize: 'contain',
    };
    const other: Ref<SectionItem[]> = ref([
        {
            id: 1,
            name: 'Красота и гигиена',
            category: 'beautyHygiene',
            styles: {
                backgroundImage: `url(${img1})`,
                ...OtherBaseStyles,
                backgroundSize: '60%'
            }
        },
        {
            id: 2,
            name: 'Стирка и уборка',
            category: 'cleaningLaundry',
            styles: {
                backgroundImage: `url(${img2})`,
                ...OtherBaseStyles,
                backgroundSize: '80%'
            }
        },
        {
            id: 3,
            name: 'Полезные мелочи',
            category: 'usefullStuff',
            styles: {
                backgroundImage: `url(${img3})`,
                ...OtherBaseStyles,
                backgroundSize: '90%'
            }
        },
        {
            id: 4,
            name: 'Бытовая техника',
            category: 'appliances',
            styles: {
                backgroundImage: `url(${img4})`,
                ...OtherBaseStyles,
                backgroundSize: '50%'
            }
        }
    ]);
    return {other, OtherBaseStyles}
})