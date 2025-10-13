<template>
    <div class="favorites">
        <RouterLink :to="'/personal-account'">
            <img :src="favorites" class="favorites__img">
        </RouterLink>
    </div>
</template>

<script setup>
import favorites from '@/assets/img/svg/favorites1.svg'
import { RouterLink } from 'vue-router';
</script>

<style lang="scss" scoped>
@import "@/scss/remFunction";
.favorites {
    width: rem(50);
    height: rem(50);
    border-radius: 16px;
    cursor: pointer;
    border: 1px solid #E1E1E1;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: -10px;
    &:hover {
        .favorites__img {
            animation: heart .8s;
        }
    }
}
@keyframes heart {
    0% {
        transform: scale(1);
    } 25% {
        transform: scale(1.2);
    } 50% {
        transform: scale(1);
    } 75% {
        transform: scale(1.2);
    } 100% {
        transform: scale(1);
    }
    
}
</style>