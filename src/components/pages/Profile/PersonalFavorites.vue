<template>
    <div class="favorites">
        <ProductCard
            v-for="(card, index) in cards"
            :key="card.id"
            :dataCard="card"
            :indexCard="index">
        </ProductCard>
        <h1 
            class="favorites__else"
            v-if="!cards.length"
            >В избранном пока нет товаров.
        </h1>
    </div>
</template>

<script setup>
import ProductCard from '@/components/product-card/ProductCard.vue'
import { computed, onMounted } from 'vue';
import { useAllData } from '@/store/AllData';
const AllData = useAllData()
const cards = computed(()=> AllData.favoriteData)
</script>

<style lang="scss" scoped>
@import "@/scss/remFunction";
.favorites {
    margin-top: rem(65);
    margin-bottom: rem(180);
    min-height: rem(400);
    width: 100%;
    height: auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: rem(25);
    &__else {
        font-size: 24px;
        font-weight: 700;
        grid-column: 1/3;
        color: rgba(0, 0, 0, 0.5019607843);;
    }
}
</style>