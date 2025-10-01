<template>
    <div class="history">
        <article class="history__additionally">Если не понравился вкус или качество продукта — поможем по всем вопросам. Поддержка 8 800 999 99 99</article>
        <div class="history__container">
            <PersonalHistory_Item
                v-for="card in cards"
                :key="card.id"
                :data="card"/>
        </div>
        <PersonalFavorites_Item
            v-for="(card, index) in ddd"
            :key="card.id"
            :dataCard="card"
            :indexCard="index">
        </PersonalFavorites_Item>
    </div>
</template>

<script setup>
import PersonalFavorites_Item from './PersonalFavorites_Item.vue';
import PersonalHistory_Item from './PersonalHistory_Item.vue';
import { usePersonalHistory } from '@/store/PersonalHistory';
const PersonalHistory = usePersonalHistory()
const cards = PersonalHistory.history
import { useAllData } from '@/store/AllData';
import { computed } from 'vue';
const AllData = useAllData()
const ddd = computed(()=> AllData.allData)
</script>

<style lang="scss" scoped>
@import "@/scss/remFunction";
.history {
    display: flex;
    width: 100%;
    flex-direction: column;
    margin-top: rem(26);
    margin-bottom: rem(90);
    &__additionally {
        color: #888888;
    }
    &__container {
        margin-top: rem(40);
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        column-gap: rem(20);
        row-gap: rem(40);
    }
}
</style>