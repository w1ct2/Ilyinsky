<template>
    <div class="navigation__action" :class="{'navigation__action--active': isActive}">
        <Header_BurgerBtn :isActive="isActive" @funActive="funActive(n)"></Header_BurgerBtn>
        <Header_BurgerMenu :isActive="isActive"></Header_BurgerMenu>
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
</template>

<script setup>
import icon from '@/assets/img/mainImage/mainIcon.svg'
import search from '@/assets/img/svg/search2.svg'
import compass from '@/assets/img/svg/compass1.svg'
import Header_BurgerMenu from './Header_BurgerMenu.vue'
import Header_BurgerBtn from '@/components/header/mobile/Header_BurgerBtn.vue'
import { useMainStore } from '@/store/MainStore'
import { computed, ref } from 'vue'
const mainStore = useMainStore()

const isActive = computed(() => mainStore.isActiveBurgerMenu)
const funActive = (n)=>{
    mainStore.activeBurgerMenu()
}
</script>

<style lang="scss" scoped>
@import "@/scss/remFunction";
.navigation {
    &__action {
        display: flex;
        align-items: center;
        gap: 25px;
        position: relative;
        width: 100%;
        // &--active {
        //     position: fixed;
        //     left: 0;
        //     margin: 0 20px;
        //     right: 0;
        //     width: auto;
        //     padding-bottom: 20px;
        //     border-bottom: 1px solid #E7EFEE;
        //     // top: 25px;
        // }
        // РАЗОБРАТЬСЯ ПОЧЕМУ ТУТ ВОЗНИКАЛ БАГ 
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
    @media (max-width: 768px) {
        &__delivery,  &__search {
            width: rem(40);
            height: rem(40);
            border-radius: 12px;
        }
    }
}
</style>
