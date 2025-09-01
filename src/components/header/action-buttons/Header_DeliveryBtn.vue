<template>
    <div class="delivery" @click="isActiveModal = true">
        <div class="delivery__icon">
            <img :src="compass" alt="">
            <p>MCK</p>
        </div>
        <div class="delivery__title">
            <p>Выберите способ получения</p>
            <h4>Доставка или самовывоз</h4>
        </div>
        <Header_DeliveryMenu
            @click.stop
            v-show="isActiveModal"
            @resetModal="resetActiveModal"></Header_DeliveryMenu>
    </div>
</template>

<script setup>
import compass from '@/assets/img/svg/compass1.svg'
import Header_DeliveryMenu from './Header_DeliveryMenu.vue';
import { ref } from 'vue';
const isActiveModal = ref(true)
const resetActiveModal = ()=>{
    isActiveModal.value = false
}
</script>

<style lang="scss" scoped>
@import "@/scss/remFunction";
.delivery {
    width: rem(300);
    height: 100%;
    max-height: 50px;
    overflow: hidden;
    display: flex;
    border-radius: 16px;
    align-items: center;
    cursor: pointer;
    position: relative;
    &__icon {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: #FFA900B2;
        padding-top: 15px;
        width: rem(65);
        height: 100%;
        border-top-left-radius: 16px;
        border-bottom-left-radius: 16px;
        position: relative;
        & img {
            width: 14px;
            height: 14px;
            transition: all .6s ease;
            position: absolute;
            top: 10px;
            // outline: 1px solid red;
        }
    }
    &__title {
        flex-grow: 1;
        height: 100%;
        border-top-right-radius: 16px;
        border-bottom-right-radius: 16px;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        background-color: #FFA900;
        & h4 {
            font-weight: 600;
        }
    }
    &:hover {
        .delivery__icon img {
            transform: translate(40px, -30px) scale(1.3);
        }
    }
    @media (max-width: 1300px) {
        & {
            width: auto;
            margin-left: auto;
        }
        &__title {
            display: none;
        }
    }
}
</style>