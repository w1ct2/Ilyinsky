<template>
    <div class="delivery" @click="isActiveModal = true">
        <div class="delivery__icon">
            <img :src="compass" alt="">
            <p>MCK</p>
        </div>
        <div class="delivery__title" v-if="!MainStore.userDeliveryMethod">
            <p>Выберите способ получения</p>
            <h4>Доставка или самовывоз</h4>
        </div>
        <div class="delivery__title" v-else>
            <p>Способ получения: </p>
            <h4>{{ methodTitle}}</h4>
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
import { computed, ref } from 'vue';
import { useMainStore } from '@/store/MainStore';
const methodTitle = computed(()=>{
    if (MainStore.userDeliveryMethod === 'delivery') {
        return "Доставка"
    } else if (MainStore.userDeliveryMethod === 'pickup') {
        return "Самовывоз"
    }
})
const MainStore = useMainStore()
const isActiveModal = ref(true)
const resetActiveModal = (method)=>{
    isActiveModal.value = false
}
</script>

<style lang="scss" scoped>
@import "@/scss/remFunction";
.delivery {
    width: rem(300);
    height: 100%;
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
            text-align: left;
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
    @media (max-width:1000px){
        & {
            border-radius: 14px;
            margin-left: 0;
        }
        &__icon {
            & p {
                font-size: 14px;
            }
            & img {
                width: rem(11);
                height: rem(11);
                top: 8px;
            }
        }
    }
    @media (max-width:769px){
        width: rem(50);
    }
    @media (max-width:480px) {
        width: rem(40);
        &__icon {
            & p {
                font-size: 12px;
            }
            & img {
                width: rem(10);
                height: rem(10);
            }
        }
    }
}
</style>