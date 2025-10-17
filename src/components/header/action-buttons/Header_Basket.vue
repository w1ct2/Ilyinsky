<template>
    <RouterLink class="basket" :to="'/basket'">
        <img :src="basket" class="basket__img">
        <p>Корзина</p>
    </RouterLink>
</template>

<script setup>
import basket from '@/assets/img/svg/basket1.svg'
import { RouterLink } from 'vue-router';
</script>

<style lang="scss" scoped>
@import "@/scss/remFunction";
.basket {
    width: rem(130);
    height: rem(50);
    border-radius: 16px;
    background-color: var(--red);
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: -10px;
    gap: 10px;
    color: #fff;
    &__img {
        transition: all .3s ease;
    }
    &:hover {
        .basket__img {
            transform: rotate(15deg);
        }
    }
}
</style>