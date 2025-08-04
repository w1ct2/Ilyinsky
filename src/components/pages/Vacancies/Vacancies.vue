<template>
    <Header></Header>
    <main class="main">
        <Vacancies_Content></Vacancies_Content>
    </main>
    <Footer></Footer>
</template>

<script setup>
import Header from '@/components/header/Header.vue';
import Footer from '@/components/footer/Footer.vue';
import { useMainStore } from '@/store/MainStore'
import Vacancies_Content from './Vacancies_Content.vue';
const mainStore = useMainStore()
</script>

<style lang="scss" scoped>
@import "@/scss/remFunction";
</style>
