<template>
    <div class="favorites">
        <!-- <PersonalFavorites_Item
            v-for="(card, index) in cards"
            :key="card.id"
            :dataCard="card"
            :indexCard="index">
        </PersonalFavorites_Item> -->

        <PersonalFavorites_Item
            v-for="(card, index) in ddd"
            :key="card.id"
            :dataCard="card"
            :indexCard="index">
        </PersonalFavorites_Item>
    </div>
</template>

<script setup>
import PersonalFavorites_Item from '@/components/pages/Profile/PersonalFavorites_Item.vue'
import { computed, onMounted } from 'vue';
import { useAllData } from '@/store/AllData';
const AllData = useAllData()
const cards = computed(()=> AllData.favoriteData)
const ddd = computed(()=> AllData.allData)
</script>

<style lang="scss" scoped>
@import "@/scss/remFunction";
.favorites {
    margin-top: rem(65);
    margin-bottom: rem(180);
    width: 100%;
    height: auto;
    min-height: 0;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: rem(25);
}
</style>