<template>
    <div class="basket-item">
        <div class="basket-item__img">
            <img :src="data.imgUrl">
        </div>
        <h4 class="basket-item__title">{{ data.title }}</h4>
        <p class="basket-item__availabilityTitle">{{ data.availabilityTitle }}</p>
        <div class="basket-item__price">
            <h4 
                :class="{'basket-item__price--active' : data.discount}" 
                class="basket-item__price-title">
                {{ data.price }}
            </h4> 
            <p v-if="data.discount">{{ data.oldPrice }}</p>
        </div>
        <Basket_ActionBlock 
            @quantityUpdate="handleQuantity" 
            :data="data"
            class="basket-item__action-block">
        </Basket_ActionBlock>
        <button class="basket-item__favorite" @click="toggleFavorite">
            <img :src="isActiveFavoriteUrl">
        </button>
        <div class="basket-item__finalPrice">
            <h4 class="basket-item__price-title">{{ finishPrice }} <span>руб</span></h4>
            <p class="basket-item__finalPrice-quantity">{{ quantity }} шт</p>
        </div>
    </div>
</template>

<script setup>
import favorUnactive from '@/assets/img/discounts/favorActive.svg'
import favorActive from '@/assets/img/discounts/favorUnactive.svg'
import { computed, onMounted, ref, watch } from 'vue'
import Basket_ActionBlock from './Basket_ActionBlock.vue'
import { useAllData } from '@/store/AllData'
import { useBasketData } from '@/store/BasketData'
const AllData = useAllData()
const BasketData = useBasketData()
const isFavoriteProduct = ref(false)
const isActiveFavoriteUrl = computed(() => {
    return isFavoriteProduct.value ? favorActive : favorUnactive
})
const toggleFavorite = ()=>{
    AllData.toggleFavorite(props.data.id),
    isFavoriteProduct.value = !isFavoriteProduct.value
}
const props = defineProps({
    data: {
        type: Object,
    }
})



const priceCard = ref(parseInt(props.data.price))
const quantity = ref(1)
const handleQuantity = (newVal) => {
    quantity.value = newVal
}
const finishPrice = computed(()=>{
    return priceCard.value * quantity.value
})
watch(finishPrice, (newVal) => {
    BasketData.updateFinishPrice({
        id: props.data.id,
        finishPrice: newVal,
    })
})

watch(quantity, (newVal) => {
    BasketData.updateQuantityProduct({
        id: props.data.id,
        quantity: newVal
    })
})
onMounted(() => {
    BasketData.updateFinishPrice({
        id: props.data.id,
        finishPrice: finishPrice.value,
    })
    BasketData.updateQuantityProduct({
        id: props.data.id,
        quantity: quantity.value
    })
})
</script>

<style lang="scss" scoped>
@import "@/scss/remFunction";
.basket-item {
    color: #000;
    border: 1px solid #DADADA;
    width: 100%; 
    height: rem(130);
    border-radius: rem(20);
    display: grid;
    grid-template-columns: repeat(6, auto);
    grid-template-rows: repeat(3, auto);
    padding: rem(7);
    &__img {
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        width: 100%;
        height: 100%;
        max-width: rem(130);
        border-radius: rem(20);
        & img {
            max-height: 100%;
        }
    }
    &__header {
        display: flex;
        flex-direction: column;
        gap: rem(6);
        margin-left: rem(40);
    }
    &__title {
        width: 100%;
        max-width: rem(250);
        font-weight: 600;
        font-size: 20px;
    }
    &__availabilityTitle {
        font-size: 14px;
        color: #434343;
        grid-row: 2/3;
        grid-column: 2/3;
    }
    &__price {
        display: flex;
        flex-direction: column;
        color: #000;
        margin-left: rem(20);
        white-space: nowrap;
        overflow: hidden;
        &--active {
            color: var(--red);
        }
        &-title {
            font-size: 20px;
            font-weight: 600;
        }
        & p {
            font-size: 14px;
            text-decoration: line-through;
            color: #434343;
            margin-left: rem(15);
        }
    }
    &__favorite {
        width: rem(40);
        height: rem(40);
        border-radius: 50%;
        cursor: pointer;
        border: 1px solid #E1E1E1;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: rem(10);
    }
    &__finalPrice {
        display: flex;
        flex-direction: column;
        align-items: end;
        margin-left: auto;
        &-quantity {
            color: #434343;
            font-size: 14px;
        }
    }
    @media (max-width: 1300px) {
        & {
            column-gap: rem(20);
            row-gap: rem(8);
            height: auto;
            grid-template-columns: rem(100) repeat(2, auto);
            // max-width: rem(760);
            padding-right: rem(15);
        }
        &__img {
            grid-column: 1/2;
            grid-row: 1/3;
            width: rem(100);
            height: rem(100);
        }
        &__availabilityTitle { 
            grid-column: 1/2;
            grid-row: 3/4;
            margin-left: rem(8);
        }
        &__price {
            flex-direction: row-reverse;
            margin-right: auto;
            align-items: center;
            gap: rem(8);
            grid-row: 2/3;
            grid-column: 2/3;
            margin-left: 0;
            & p {
                margin-left: 0;
            }
        }
        &__favorite {
            grid-row: 3/4;
            grid-column: 3/4;
            margin-left: auto;
        }
        &__finalPrice {
            grid-row: 2/3;
        }
        &__action-block {
            margin-left: auto;
        }
    }
    @media (max-width: 1000px) {
        &__availabilityTitle { 
            font-size: 12px;
        }
        &__title {
            font-size: 18px;
        }
        &__price {
            &-title {
                font-size: 18px;
            }
        }
        &__favorite {
            grid-row: 3/4;
            grid-column: 3/4;
            margin-left: auto;
        }
        &__finalPrice {
            grid-row: 2/3;
        }
        &__action-block {
            margin-left: auto;
        }
    }
    @media (max-width: 768px) {
        & {
            column-gap: rem(10);
            border-radius: 0;
            border-left: none;
            border-right: none;
        }
        &__title {
            grid-row: 1/3;
        }
        &__price {
            grid-row: 3/4;
        }
        &__finalPrice {
            grid-column: 3/4;
        }
    }
    @media (max-width: 480px) {
        &__img {
            width: rem(90);
            height: rem(90);
        }
        &__title {
            font-size: 16px;
            grid-row: 1/2;
            grid-column: 2/4;
        }
        &__price {
            grid-row: 2/3;
            &-title {
                font-size: 12px;
                & span {
                    font-size: 9px;
                }
            }
        }
        &__finalPrice {
            grid-row: 3/4;
            align-items: center;
            justify-content: center;
            &-quantity {
                display: none;
            }
        }
        &__action-block {
            grid-row: 3/4;
            grid-column: 2/3;
            margin-left: 0;
        }
        &__favorite {
            display: none;
        }
    }
}
</style>