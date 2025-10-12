<template>
    <div class="products">
        <PersonalFavorites_Item
            v-for="card in cards"
            :key="card.id"
            :dataCard="card"></PersonalFavorites_Item>
    </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import PersonalFavorites_Item from '../Profile/PersonalFavorites_Item.vue';
import { useAllData } from '@/store/AllData';
const AllData = useAllData()
const cards = computed(()=> AllData.allData)
// const sortedData = (filter)=>{
//     return [...cards.value].filter(item => item.category === filter)
// }
</script>

<style lang="scss" scoped>
@import "@/scss/remFunction";
.products {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: rem(25);
}
</style>