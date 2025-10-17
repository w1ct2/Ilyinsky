<template>
    <Header></Header>
    <main class="main">
        <Basket_Inner></Basket_Inner>
        <Discounts :title="'вам может быть интересно'"></Discounts>
    </main>
    <Footer></Footer>
</template>

<script setup>
import Header from '@/components/header/Header.vue';
import Footer from '@/components/footer/Footer.vue';
import Discounts from '../Home/discounts/Discounts.vue';
import Basket_Inner from './Basket_Inner.vue';
</script>

<style lang="scss" scoped>
@import "@/scss/remFunction";
</style>