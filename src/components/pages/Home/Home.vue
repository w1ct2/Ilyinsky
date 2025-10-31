<template>
    <Header></Header>
    <main class="main">
        <Panorama></Panorama>
        <Discounts></Discounts>
        <Section 
            :title="'Кулинария'"
            :data="sectionCookingStore.cooking"
            :category="'bakery'"></Section>
        <Section 
            :title="'Супермаркет'"
            :data="sectionSupermarketStore.superMarket"
            :category="'waterDrinks'"></Section>
        <Section 
            :title="'Заморозка'"
            :data="sectionFreezingStore.freezing"
            :category="'dumplings'"></Section>
        <Section 
            :title="'Другое'"
            :data="sectionOtherStore.other"
            :category="'beautyHygiene'"></Section>
        <Promotions></Promotions>
        <Delivery></Delivery>
        <GetPromo></GetPromo>
        <RateStore></RateStore>
    </main>
    <Footer></Footer>
</template>

<script lang="ts" setup>
import RateStore from "./rate-store/Rate-Store.vue"
import GetPromo from "./get-promo/Get-Promo.vue"
import Delivery from "./delivery/Delivery.vue"
import Promotions from "./promotions/Promotions.vue"
import Discounts from "./discounts/Discounts.vue"
import Section from "./grocery-section/Section.vue"
import Panorama from "@/components/pages/Home/panorama/Panorama.vue"
import Header from '@/components/header/Header.vue'
import Footer from "@/components/footer/Footer.vue"

import { useSectionSupermarketStore } from "@/store/SectionSupermarketStore"
const sectionSupermarketStore = useSectionSupermarketStore()

import { useSectionCookingStore } from "@/store/SectionCookingStore"
const sectionCookingStore = useSectionCookingStore()

import { useSectionFreezingStore } from "@/store/SectionFreezing"
const sectionFreezingStore = useSectionFreezingStore()

import { useSectionOtherStore } from "@/store/SectionOther"
const sectionOtherStore = useSectionOtherStore()
</script>

<style>
</style>