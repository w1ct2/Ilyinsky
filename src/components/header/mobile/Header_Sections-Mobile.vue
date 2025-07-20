<template>
    <div class="bottom-bar">
        <div class="bottom-bar__item" @click="activeBurgerMenu">
            <span></span>
            <p>Каталог</p>
        </div>
        <div class="bottom-bar__item">
            <img :src="actions" alt="">
            <p>Акции</p>
        </div>
        <div class="bottom-bar__basket">
            <div class="bottom-bar__basket-img">
                <img :src="basket" alt="">
                <span>23</span>
            </div>
            <p>190 руб</p>
        </div>
        <div class="bottom-bar__item">
            <img :src="favorites" alt="">
            <p>Избранное</p>
        </div>
        <div class="bottom-bar__item">
            <img :src="profile" alt="">
            <p>Профиль</p>
        </div>
    </div>
</template>

<script setup>
import favorites from '@/assets/img/bottomBar/favorites.svg'
import actions from '@/assets/img/bottomBar/fire.svg'
import profile from '@/assets/img/bottomBar/profile.svg'
import basket from '@/assets/img/bottomBar/basket.svg'

import { useMainStore } from '@/store/MainStore'
const mainStore = useMainStore()

const activeBurgerMenu = (n)=>{
    mainStore.activeBurgerMenu()
}
</script>

<style lang="scss" scoped>
@import "@/scss/remFunction";
.bottom-bar {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: rem(65);
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    padding: 0 40px;
    box-shadow: 20px 0 20px #0000007d;
    &__basket {
        background-color: var(--red);
        width: rem(130);
        height: rem(45);
        border-radius: 16px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        gap: 10px;
        &-img {
            position: relative;
            max-width: 30px;
        }
        & span {
            position: absolute;
            right: -10px;
            top: -7px;
            border-radius: 50%;
            font-size: 10px;
            width: 20px;
            height: 20px;
            background-color: #FFA900;
            color: var(--red);
            font-weight: 600;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        & img {
            width: 28px;
            height: auto;
        }
        & p {
            font-weight: 700;
        }
    }
    &__item {
        display: flex;
        cursor: pointer;
        flex-direction: column;
        gap: 6px;
        align-items: center;
        justify-content: center;
        color: #6B6B6B;
        font-size: 14px;
        min-width: rem(70);
        & span {
            background-color: #FFD481;
            width: 18px;
            height: 3px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 10px 0;
            position: relative;
            &::after, &::before {
                content: '';
                background-color: #FFD481;
                width: 18px;
                height: 3px;
                position: absolute;
            }
            &::after {
                top: -7px;
            }
            &::before {
                bottom: -7px;
            }
        }
        & img {
            width: 25px;
            height: 25px;
        }
    }
    @media (max-width: 768px) {
        height: rem(60);
        &__item {
            font-size: 10px;
        }
    }
    @media (max-width: 480px) {
        &__item {
            font-size: 9px;
            min-width: rem(50);
        }
        &__basket {
            min-width: rem(110);
            height: rem(35);
            border-radius: 10px;
            & img {
                width: 24px;
                height: auto;
            }
            & p {
                font-weight: 600;
                font-size: 14px;
            }
        }
        padding: 0;
    }
}
</style>
