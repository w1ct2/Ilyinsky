<template>
    <ul class="navigation-sections">
        <li 
            class="navigation-sections__item"
            :class="{'navigation-sections__item--active': activeSection === index}"
            @click="selectSection(index)"
            v-for="(item, index) in buttons"
            :key="item.id">
            <img :src="item.link" alt="">
            <button>{{ item.name }}</button>
        </li>
    </ul>
</template>

<script setup>
import apple from '@/assets/img/fruits/green-apple_1f34f.png'
import pizza from '@/assets/img/fruits/pizza.png'
import meat from '@/assets/img/fruits/cut-of-meat_1f969.png'
import sponge from '@/assets/img/fruits/sponge.png'
import fire from '@/assets/img/fruits/fire.png'
import pear from '@/assets/img/fruits/pear_1f350.png'
import { ref } from 'vue'
const buttons = ref([
    {
        id: 1,
        name: 'Супермаркет',
        link: apple
    },
    {
        id: 2,
        name: 'Кулинария',
        link: pizza
    },
    {
        id: 3,
        name: 'Заморозка',
        link: meat
    },
    {
        id: 4,
        name: 'Другое',
        link: sponge
    },
    {
        id: 5,
        name: 'Акции',
        link: fire
    },
    {
        id: 6,
        name: 'Магазины',
        link: pear
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
        & button {
            font-weight: 600;
            color: #0A0A0A;
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