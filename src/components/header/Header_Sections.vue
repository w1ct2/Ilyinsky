<template>
    <ul class="navigation-sections">
        <li 
            class="navigation-sections__item"
            :class="{'navigation-sections__item--active': activeSection === index}"
            @click="selectSection(index)"
            v-for="(item, index) in buttons"
            :key="item.id">
            <RouterLink :to="item.url" @click="AllData.setCategory(item.category, item.name)">
                <img :src="item.link" alt="">
            </RouterLink>
            <RouterLink :to="item.url" @click="AllData.setCategory(item.category, item.name)">{{ item.name }}</RouterLink>
        </li>
    </ul>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import apple from '@/assets/img/fruits/green-apple_1f34f.png'
import pizza from '@/assets/img/fruits/pizza.png'
import meat from '@/assets/img/fruits/cut-of-meat_1f969.png'
import sponge from '@/assets/img/fruits/sponge.png'
import fire from '@/assets/img/fruits/fire.png'
import pear from '@/assets/img/fruits/pear_1f350.png'
import { ref } from 'vue'
import { useAllData } from '@/store/AllData'
const AllData = useAllData()
const buttons = ref([
    {
        id: 1,
        name: 'Кулинария',
        link: pizza,
        url: 'catalog',
        category: 'bakery'
    },
    {
        id: 2,
        name: 'Супермаркет',
        link: apple,
        url: 'catalog',
        category: 'waterDrinks'
    },
    {
        id: 3,
        name: 'Заморозка',
        link: meat,
        url: 'catalog',
        category: 'dumplings'
    },
    {
        id: 4,
        name: 'Другое',
        link: sponge,
        url: 'catalog',
        category: 'beautyHygiene'
    },
    {
        id: 5,
        name: 'Акции',
        link: fire,
        url: 'promotions',
    },
    {
        id: 6,
        name: 'Магазины',
        link: pear,
        url: 'contacts',
    }
])
const activeSection = ref(null)
const selectSection = (index)=>{
    activeSection.value = index
}
</script>

<style lang="scss" scoped>
@import "@/scss/remFunction";
.navigation-sections {
    display: flex;
    align-items: center;
    gap: 14px;
    margin-top: 18px;
    width: 100%;
    height: rem(60);
    padding-bottom: 10px;
    overflow: scroll;
    scrollbar-width: none;
    &::-webkit-scrollbar {
        display: none;
    }
    -ms-overflow-style: none;
    &__item {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        cursor: pointer;
        background-color: #FFF8EB;
        height: 100%;
        border-radius: 16px;
        border: 1px solid #FFA90073;
        padding: 0 16px;
        &--active {
            background-color: #FFE8BC;
        }
        & img {
            width: 24px;
            height: 24px;
        }
        & a {
            font-weight: 600;
            color: #0A0A0A;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
        }
    }
    @media (max-width: 1000px) {
        margin-top: 15px;
        height: rem(50);
        &__item {
            border-radius: 12px;
            font-size: 14px;
        }
    }
    @media (max-width: 768px) {
        margin-top: 10px;
        height: rem(40);
        &__item {
            border-radius: 9px;
            font-size: 12px;
            & img {
                width: 20px;
                height: 20px;
            }
        }
    }
    @media (max-width: 480px) {
        margin-top: 10px;
        height: rem(35);
        &__item {
            border-radius: 8px;
            font-size: 10px;
            & img {
                width: 18px;
                height: 18px;
            }
        }
    }
}
</style>