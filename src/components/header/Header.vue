<template>
    <header class="header">
        <HeaderMain></HeaderMain>
    </header>
</template>

<script setup>
import HeaderSpecialOffer from './HeaderSpecialOffer.vue';
import HeaderMain from './HeaderMain.vue';
import { onMounted, ref } from 'vue';

const active = ref(true)
const closeBlock = (n)=>{
    active.value = n
}
</script>

<style lang="scss" scoped>
@import "@/scss/remFunction";
</style>