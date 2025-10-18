<template>
    <div class="basket-list">
        <div class="basket-list__header">
            <h1 class="basket-list__title catalog-title">корзина переделать всё нахуй под флекс. гриды параша на постном масле</h1>
            <button class="basket-list__clear-btn">Очистить</button>
        </div>
        <div class="basket-list__content">
            <Basket_ListItem
                v-for="product in products"
                :key="product.id"
                :data="product"></Basket_ListItem>
        </div>
    </div>
</template>

<script setup>
import { useBasketData } from '@/store/BasketData';
import Basket_ListItem from './Basket_List-Item.vue';
import { computed } from 'vue';
const BasketData = useBasketData()
const products = computed(()=> BasketData.basketData)
</script>

<style lang="scss" scoped>
@import "@/scss/remFunction";
.basket-list {
    display: flex;
    flex-direction: column;
    width: 100%;
    &__header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: #6B6B6B;
        font-size: 14px;
        margin-bottom: rem(40);
    }
    &__content {
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: rem(20);
    }
}
</style>