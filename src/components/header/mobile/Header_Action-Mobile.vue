<template>
    <div class="navigation__action" :class="{'navigation__action--active': isActive}">
        <Header_BurgerBtn :isActive="isActive" @funActive="funActive(n)"></Header_BurgerBtn>
        <div class="navigation__icon">
            <img :src="icon" alt="Ильинский онлайн">
        </div>
        <div class="navigation__delivery">
            <div class="navigation__delivery-icon">
                <img :src="compass" alt="">
                <p>MCK</p>
            </div>
        </div>
        <div class="navigation__search">
            <img :src="search" alt="">
        </div>
    </div>
    <Header_BurgerMenu :isActive="isActive"></Header_BurgerMenu>
</template>

<script setup>
import icon from '@/assets/img/mainImage/mainIcon.svg'
import search from '@/assets/img/svg/search2.svg'
import compass from '@/assets/img/svg/compass1.svg'
import Header_BurgerMenu from './Header_BurgerMenu.vue'
import Header_BurgerBtn from '@/components/header/mobile/Header_BurgerBtn.vue'
import { useMainStore } from '@/store/MainStore'
import { ref } from 'vue'
const mainStore = useMainStore()

const isActive = ref(false)
const funActive = (n)=>{
    isActive.value = !isActive.value
}
</script>

<style lang="scss" scoped>
@function rem($pixels) {
    @return calc($pixels / 16) * 1rem;
}
.navigation {
    &__action {
        display: flex;
        align-items: center;
        gap: 25px;
        z-index: 3;
        position: relative;
        width: 100%;
        transition: top 0.5s ease 0s;
        &--active {
            position: fixed;
            left: 0;
            margin: 0 20px;
            right: 0;
            width: auto;
            padding-bottom: 20px;
            border-bottom: 1px solid #E7EFEE;
            // top: 25px;
        }
    }
    &__search {
        width: rem(50);
        height: 50px;
        border-radius: 16px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #FFA900B2;
        & img {
            width: 15px;
            height: 15px;
        }
    }
    &__delivery {
        width: rem(50);
        height: 50px;
        overflow: hidden;
        display: flex;
        border-radius: 16px;
        align-items: center;
        cursor: pointer;
        margin-left: auto;
        &-icon {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            background-color: #FFA900B2;
            width: rem(65);
            height: 100%;
            & img {
                width: 9px;
                height: 9px;
            }
            & p {
                font-size: 12px;
            }
        }
    }
}
</style>
