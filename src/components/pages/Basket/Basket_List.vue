<template>
    <div class="basket-list">
        <div class="basket-list__header">
            <h1 class="basket-list__title catalog-title">корзина</h1>
            <button class="basket-list__clear-btn" @click="BasketData.clearStorage">Очистить</button>
        </div>
        <div class="basket-list__content">
            <Basket_ListItem
                v-if="products.length > 0"
                v-for="product in products"
                :key="product.id"
                :data="product"
                @finishPriceChange="handlePrice"
                @quantityProductsChange="handleQuantity"></Basket_ListItem>
            <h4 class="basket-list__alert" v-else>Корзина пуста.</h4>
        </div>
    </div>
</template>

<script setup>
import { useBasketData } from '@/store/BasketData';
import Basket_ListItem from './Basket_List-Item.vue';
import { computed, ref, watch } from 'vue';
const emits = defineEmits(['handleTotalPrice', 'handleTotalQuantity'])
const BasketData = useBasketData()
const products = computed(()=> BasketData.basketData)
const finishPrices = ref({})
const quantityProducts= ref({})
const handlePrice = (priceData)=>{
    finishPrices.value[priceData.id] = priceData.finishPrice
}
const handleQuantity = (quantityData) =>{
    quantityProducts.value[quantityData.id] = quantityData.quantity
}
const totalPrice = computed(() => {
    return Object.values(finishPrices.value).reduce((sum, price) => sum + price, 0)
})
const totalQuantity = computed(()=>{
    return Object.values(quantityProducts.value).reduce((sum, item)=> sum + item, 0)
})
watch(totalPrice, (newVal)=>{
    emits('handleTotalPrice', newVal)
    BasketData.setBasketTotalPrice(totalPrice.value)
})
watch(totalQuantity, (newVal)=>{
    emits('handleTotalQuantity', newVal)
})
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
    &__alert {
        font-size: 24px;
        color: #6B6B6B;
        font-weight: 600;
        margin-right: auto;
    }
}
</style>