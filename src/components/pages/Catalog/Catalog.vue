<template>
    <Header></Header>
    <main class="main">
        <section class="catalog">
            <div class="container">
                <h1 class="catalog-title">{{ categoryName }} </h1>
                <div class="catalog__inner">
                    <Catalog_Menu @setCategory="setCategory"></Catalog_Menu>
                    <Catalog_Content :category="selectedCategory"></Catalog_Content>
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
import { ref } from 'vue';
const selectedCategory = ref('')
const categoryName = ref('каталог')

const setCategory = (category, categoryTextName)=>{
    selectedCategory.value = category
    categoryName.value = categoryTextName
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
}
</style>