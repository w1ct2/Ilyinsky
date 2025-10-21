<template>
    <div class="basket-item">
        <div class="basket-item__img">
            <img :src="data.imgUrl">
        </div>
        <div class="basket-item__header">
            <h4 class="basket-item__title">{{ data.title }}</h4>
            <p class="basket-item__availabilityTitle">{{ data.availabilityTitle }}</p>
        </div>
        <div class="basket-item__price">
            <h4 
                :class="{'basket-item__price--active' : data.discount}" 
                class="basket-item__price-title">
                {{ data.price }}
            </h4>
            <p v-if="data.discount">{{ data.oldPrice }}</p>
        </div>
        <Basket_ActionBlock 
            :data="data"
            @quantityUpdate="handleQuantity"></Basket_ActionBlock>
        <button class="basket-item__favorite" @click="toggleFavorite">
            <img :src="isActiveFavoriteUrl">
        </button>
        <div class="basket-item__finalPrice">
            <h4 class="basket-item__price-title">{{ finishPrice }} руб</h4>
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
const AllData = useAllData()
const isFavoriteProduct = ref(false)
const isActiveFavoriteUrl = computed(() => {
    return isFavoriteProduct.value ? favorActive : favorUnactive
})

const props = defineProps({
    data: {
        type: Object,
    }
})
const emits = defineEmits(['finishPriceChange', 'quantityProductsChange'])
const quantity = ref(1)
const handleQuantity = (newVal) => {
    quantity.value = newVal
}
const toggleFavorite = ()=>{
    AllData.toggleFavorite(props.data.id),
    isFavoriteProduct.value = !isFavoriteProduct.value
}
const priceCard = ref(parseInt(props.data.price))
const finishPrice = computed(()=>{
    return priceCard.value * quantity.value
})
watch(finishPrice, (newVal)=>{
    emits('finishPriceChange', {
        id: props.data.id,
        finishPrice: newVal,
    })
})
watch(quantity, (newVal)=>{
    emits('quantityProductsChange', {
        id: props.data.id,
        quantity: newVal
    })
})
onMounted(() => {
    emits('finishPriceChange', {
        id: props.data.id,
        finishPrice: finishPrice.value,
    })
    emits('quantityProductsChange', {
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
    display: flex;
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
    }
    &__header {
        display: flex;
        flex-direction: column;
        gap: rem(6);
        margin-left: rem(40);
    }
    &__title {
        width: 100vh;
        max-width: rem(250);
        font-weight: 600;
        font-size: 20px;
    }
    &__availabilityTitle {
        font-size: 14px;
        color: #434343;
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
}
</style>