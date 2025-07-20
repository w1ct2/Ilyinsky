<template>
    <div class="slide">
        <div class="slide__discount"></div>
        <div class="slide__favorite"></div>
        <div class="slide__img">
            <img src="" alt="">
        </div>
        <p class="slide__availability-title"></p>
        <p class="slide__availability-price"></p>
        <h3 class="slide__title"></h3>
        <div class="slide__price">
            <h4></h4>
            <p></p>
        </div>
        <button class="slide__button">В корзину</button>
    </div>
</template>

<script setup>
import { useMainStore } from '@/store/MainStore'
const mainStore = useMainStore()
const props = defineProps({
    data: {
        type: Object,
        required: true
    }
})
</script>

<style lang="scss" scoped>
@import "@/scss/remFunction";
.slide {
    height: rem(400);
    min-width: rem(300);
    width: 100%;
    border-radius: 20px;
    border: 1px solid #DADADA;
    padding: 18px;
    position: relative;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 45% 20px 30% 50px;
    row-gap: 5px;
    &__img {
        grid-column: 1/3;
        grid-row: 1/2;

        width: 100%;
        height: auto;
    }
    &__availability-title {
        grid-column: 1/2;
        grid-row: 2/3;
        color: #434343;
        font-size: 14px;
    }
    &__availability-price {
        grid-column: 2/3;
        grid-row: 2/3;
        color: #434343;
        font-size: 14px;
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
        & h4 {
            font-size: 24px;
            color: #000;
            font-weight: 600;
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
        padding: 0 15px;
        &:hover {
            background-color: var(--red);
            color: #fff;
        }
    }
}
</style>
