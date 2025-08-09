<template>
    <Header></Header>
    <main class="main">
        <Contacts_Map></Contacts_Map>
        <Contacts_Addresses></Contacts_Addresses>
    </main>
    <Footer></Footer>
</template>

<script setup>
import Header from '@/components/header/Header.vue';
import Footer from '@/components/footer/Footer.vue';
import Contacts_Map from './Contacts_Map.vue';
import Contacts_Addresses from './Contacts_Addresses.vue';
</script>

<style lang="scss" scoped>
@import "@/scss/remFunction";
</style>