<template>
    <Header></Header>
    <main class="main">
        <section class="catalog">
            <div class="container">
                <div class="catalog__header">
                    <h1 class="catalog-title">{{ AllData.selectedCategory.categoryTitle }}</h1>
                    <button class="catalog__button" @click="showMenu">
                        <svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="20" height="3" rx="1.5" fill="#434343"/>
                            <rect y="6" width="20" height="3" rx="1.5" fill="#434343"/>
                            <rect y="12" width="13" height="3" rx="1.5" fill="#434343"/>
                        </svg>
                        <p>Категории</p>
                    </button>
                </div>
                <div class="catalog__inner">
                    <Catalog_Menu @handleFilter="handleFilter" v-if="!MainStore.isMobile768"></Catalog_Menu>
                    <div 
                        class="modal-page" 
                        v-else
                        v-show="isActiveMobileMenu"
                        @click="hideMenu">
                        <Catalog_Menu 
                            @handleFilter="handleFilter" 
                            :class="{'menu--active': isActiveMobileMenu}"
                            @click.stop></Catalog_Menu>
                    </div>
                    <Catalog_Content :activeFilter="activeFilter"></Catalog_Content>
                </div>
            </div>
        </section>
        <Discounts :title="'рекомендации для вас'"></Discounts>
        <Promotions_Input></Promotions_Input>
    </main>
    <Footer></Footer>
</template>

<script setup>
import Header from '@/components/header/Header.vue';
import Footer from '@/components/footer/Footer.vue';
import Discounts from '../Home/discounts/Discounts.vue';
import Promotions_Input from '../Promotions/Promotions_Input.vue';
import Catalog_Menu from './Catalog_Menu.vue';
import Catalog_Content from './Catalog_Content.vue';
import { onMounted, ref } from 'vue';
import { useAllData } from '@/store/AllData';
import { useMainStore } from '@/store/MainStore';
const MainStore = useMainStore()
const AllData = useAllData()
const activeFilter = ref(null)
const handleFilter = (filter) => {
    activeFilter.value = filter
}
const isActiveMobileMenu = ref(false)
const showMenu = ()=>{
    isActiveMobileMenu.value = true
    document.body.classList.add('no-scroll')
}
const hideMenu = ()=>{
    isActiveMobileMenu.value = false
    document.body.classList.remove('no-scroll')
}
</script>

<style lang="scss" scoped>
@import "@/scss/remFunction";
.catalog {
    &__inner {
        margin-top: rem(40);
        margin-bottom: rem(120);
        display: flex;
        justify-content: space-between;
        gap: rem(15);
    }
    &__header {
        display: flex;
        flex-direction: column;
        gap: rem(25);
    }
    &__button {
        display: none;
        gap: rem(12);
        align-items: center;
        color: #000;
        border-radius: rem(10);
        width: rem(200);
        height: rem(30);
        border: 1px solid #dadada;
        padding: 0 rem(15);
        position: relative;
        &::after, &::before {
            content: '';
            position: absolute;
            background-color: #000000;
            height: 2px;
            width: 7px;
            right: rem(15);
        }
        &::after {
            transform: rotate(-45deg) translate(0, -50%);
            margin-top: 5px;
        }
        &::before {
            transform: rotate(45deg) translate(0, 50%);
            margin-bottom: 5px;
        }
    }
    @media (max-width: 768px) {
        &__button {
            display: flex;
        }
    }
}
</style>