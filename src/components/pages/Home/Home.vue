<template>
    <Header></Header>
    <main class="main">
        <Panorama></Panorama>
        <Discounts></Discounts>
        <Section></Section>
    </main>
    <Footer></Footer>
</template>

<script lang="ts" setup>
import Discounts from "./discounts/Discounts.vue"
import Section from "./grocery-section/Section.vue"
import Panorama from "@/components/pages/Home/panorama/Panorama.vue"
import Header from '@/components/header/Header.vue'
import Footer from "@/components/footer/Footer.vue"
</script>

<style>
</style>