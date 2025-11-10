<template>
    <aside class="menu">
        <div class="modal-page__close-btn" @click="$emit('closeMenu')"></div>
        <Catalog_Filters @handleFilter="handleFilter"></Catalog_Filters>
        <Catalog_Category 
            :title="'Кулинария'"
            :data="cooking"
            :category="selectedCategory"></Catalog_Category>
        <Catalog_Category 
            :title="'Супермаркет'"
            :data="supermarket"
            :category="selectedCategory"></Catalog_Category>
        <Catalog_Category 
            :title="'Заморозка'"
            :data="freezing"
            :category="selectedCategory"></Catalog_Category>
        <Catalog_Category 
            :title="'Другое'"
            :data="other"
            :category="selectedCategory"></Catalog_Category>
    </aside>
</template>

<script setup>
import { useSectionCookingStore } from '@/store/SectionCookingStore';
import Catalog_Category from './Catalog_Category.vue';
import Catalog_Filters from './Catalog_Filters.vue';
import { computed, onMounted, ref } from 'vue';
import { useSectionSupermarketStore } from '@/store/SectionSupermarketStore';
import { useSectionFreezingStore } from '@/store/SectionFreezing';
import { useSectionOtherStore } from '@/store/SectionOther';
import { useAllData } from '@/store/AllData';
const emits = defineEmits(['handleFilter'])
const sectionCooking = useSectionCookingStore()
const cooking = computed(()=> sectionCooking.cooking)
const sectionSupermarket = useSectionSupermarketStore()
const supermarket = computed(()=> sectionSupermarket.superMarket)
const sectionFreezing = useSectionFreezingStore()
const freezing = computed(()=> sectionFreezing.freezing)
const sectionOther = useSectionOtherStore()
const other = computed(()=> sectionOther.other)

const AllData = useAllData()
const selectedCategory = computed(()=>AllData.selectedCategory.category)
const handleFilter = (filter)=>{
    emits('handleFilter', filter)
}
</script>

<style lang="scss" scoped>
@import "@/scss/remFunction";
.menu {
    display: flex;
    flex-direction: column;
    gap: rem(30);
    max-width: rem(315);
    width: 100%;
    &__all-data {
        color: #000;
        font-size: 20px;
        font-weight: 600; 
        text-align: left;
        text-transform: uppercase;
    }
    @media (max-width: 1000px) {
        & {
            max-width: rem(270);
        }
    }
    @media (max-width: 768px) {
        & {
            position: fixed;
            background-color: #fff;
            z-index: 100;
            top: 0;
            left: -100%;
            padding: rem(20);
            height: 100vh;
            overflow-y: auto;
            transition: all .5s ease;
        }
        &--active {
            left: 0;
        }
    }
    @media (max-width: 480px) {
        & {
            width: 100%;
            right: 0;
            max-width: none;
        }
        .modal-page__close-btn {
            display: flex;
        }
    }
}
.modal-page__close-btn {
    display: none;
    width: rem(25);
    height: rem(25);
    &::after, &::before {
        width: rem(11);
    }
}
</style>