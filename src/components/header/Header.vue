<template>
    <header class="header">
        <!-- <HeaderSpecialOffer
            v-if="active === true"
            :btn="'Получить скидку'" 
            :title="'Питайтесь разнообразно и копите <span>скидку</span> до 10%'"
            @closeBlock="closeBlock(n)">
        </HeaderSpecialOffer> -->
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