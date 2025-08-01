<template>
    <Header></Header>
    <main class="main">
        <Promotions_Content :data="data" :title="'скидки'"></Promotions_Content>
        <Discounts :title="'рекомендации для вас'"></Discounts>
        <Promotions_Input></Promotions_Input>
    </main>
    <Footer></Footer>
</template>

<script setup>
import Footer from "@/components/footer/Footer.vue"
import Header from '@/components/header/Header.vue';
import Discounts from "../Home/discounts/Discounts.vue";
import Promotions_Content from "./Promotions_Content.vue";

import { useMainStore } from '@/store/MainStore'
import Promotions_Input from "./Promotions_Input.vue";
const mainStore = useMainStore()
const data = mainStore.promotions
</script>

<style lang="scss" scoped>
@import "@/scss/remFunction";
</style>
