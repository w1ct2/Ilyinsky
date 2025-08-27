<template>
    <Header></Header>
    <main class="main">
        <Profile_Inner></Profile_Inner>
    </main>
    <Footer></Footer>
</template>

<script setup>
import Header from '@/components/header/Header.vue';
import Footer from '@/components/footer/Footer.vue';
import Profile_Inner from './Profile_Inner.vue';
</script>

<style lang="scss" scoped>
@import "@/scss/remFunction";
</style>