<template>
    <div class="slide">
        <div class="slide__discount" v-if="data.discount">%</div>
        <img :src="isActiveFavoriteUrl" class="slide__favorite" @click="toggleFavorite"></img>
        <div class="slide__img">
            <img :src="data.imgUrl" alt="">
        </div>
        <p class="slide__availability-title" :class="{'slide__availability-title--active' : !data.availability}">{{ data.availabilityTitle }}</p>
        <p class="slide__availability-price">{{ data.price }}</p>
        <h3 class="slide__title">{{ data.title }}</h3>
        <div class="slide__price">
            <h4 :class="{'slide__price--active' : data.discount}" class="slide__price-title">{{ data.price }}</h4>
            <p v-if="data.discount">{{ data.oldPrice }}</p>
        </div>
        <button class="slide__button">В корзину</button>
    </div>
</template>

<script setup>
import favorUnactive from '@/assets/img/discounts/favorActive.svg'
import favorActive from '@/assets/img/discounts/favorUnactive.svg'
import { useMainStore } from '@/store/MainStore'
import { computed, ref } from 'vue'
const mainStore = useMainStore()
const props = defineProps({
    indexCard: {
        type: Number,
    }
})
const data = computed(() => mainStore.discounts[props.indexCard])
const isActiveFavoriteUrl = computed(() => {
    return data.value.favorite ? favorActive : favorUnactive
})
const toggleFavorite = () => {
    mainStore.toggleFavorite(props.indexCard) 
}
</script>

<style lang="scss" scoped>
@import "@/scss/remFunction";
.slide {
    height: rem(400);
    max-width: rem(300);
    width: 100%;
    border-radius: 20px;
    border: 1px solid #DADADA;
    padding: 18px;
    position: relative;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    overflow: hidden;
    grid-template-rows: 45% 20px 30% 50px;
    row-gap: 5px;
    &__discount {
        position: absolute;
        left: 0;
        top: 0;
        background-color: var(--red);
        display: flex;
        align-items: center;
        justify-content: center;
        border-bottom-right-radius: 20px;
        width: 52px;
        height: 36px;
        font-size: 24px;
    }
    &__favorite {
        position: absolute;
        top: 15px;
        right: 15px;
        width: 22px;
        height: 22px;
    }
    &__img {
        grid-column: 1/3;
        grid-row: 1/2;
        display: flex;
        align-items: center;
        justify-content: center;
        & img {
            width: auto;
            max-height: 100%;
            margin: 0 auto;
        }
    }
    &__availability-title {
        grid-column: 1/2;
        grid-row: 2/3;
        color: #434343;
        font-size: 14px;
        &--active {
            color: #BF7373;
        }
    }
    &__availability-price {
        grid-column: 2/3;
        grid-row: 2/3;
        color: #434343;
        font-size: 14px;
        width: fit-content;
        margin-left: auto;
    }
    &__title {
        grid-column: 1/3;
        grid-row: 3/4;
        overflow: hidden;
        font-size: 20px;
        color: #000000;
        font-weight: 600;
    }
    &__price {
        grid-column: 1/2;
        grid-row: 4/5;
        display: flex;
        flex-direction: column;
        color: #000;
        &--active {
            color: var(--red);
        }
        &-title {
            font-size: 24px;
            font-weight: 600;
        }
        & p {
            font-size: 14px;
            text-decoration: line-through;
            color: #434343;
        }
    }
    &__button {
        grid-column: 2/3;
        grid-row: 4/5;
        color: var(--red);
        height: rem(40);
        border-radius: 60px;
        border: 1px solid var(--red);
        transition: all .2s ease;
        width: fit-content;
        margin-left: auto;
        margin-top: auto;
        margin-bottom: auto;
        padding: 0 15px;
        &:hover {
            background-color: var(--red);
            color: #fff;
        }
    }
}
</style>
