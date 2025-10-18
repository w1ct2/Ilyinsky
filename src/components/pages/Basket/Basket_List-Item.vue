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
        <div class="basket-item__actionBlock"></div>
        <button class="basket-item__favorite">
            <img :src="isActiveFavoriteUrl">
        </button>
        <h4 class="basket-item__finalPrice">nnn руб</h4>
    </div>
</template>

<script setup>
import favorUnactive from '@/assets/img/discounts/favorActive.svg'
import favorActive from '@/assets/img/discounts/favorUnactive.svg'
import { computed } from 'vue'
const isActiveFavoriteUrl = computed(() => {
    return props.data.favorite ? favorActive : favorUnactive
})
const props = defineProps({
    data: {
        type: Object,
    }
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
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: 15.2% auto 14% 15% rem(42) 8.8%;
    padding: rem(7);
    &__img {
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        width: 100%;
        height: 100%;
        border-radius: rem(20);
        grid-row: 1/3;
    }
    &__title {
        width: 100%;
        font-weight: 600;
        font-size: 20px;
        padding-left: rem(40);
    }
    &__availabilityTitle {
        font-size: 14px;
        color: #434343;
        grid-row: 2/3;
        padding-left: rem(40);
    }
    &__price {
        display: flex;
        flex-direction: column;
        color: #000;
        padding-left: rem(10);
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
    &__actionBlock {
        width: 100%;
        height: rem(40);
        border: 1px solid #FFE7B9;
        border-radius: rem(45);
        background-color: #FFF8EB;
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
    }
}
</style>