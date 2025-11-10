<template>
    <div class="history">
        <div class="history__close-btn" @click="AllData.setActivePagePersonalAccount(null)"></div>
        <h2 class="history__title" @click="AllData.setActivePagePersonalAccount(null)">История заказов</h2>
        <article class="history__additionally">Если не понравился вкус или качество продукта — поможем по всем вопросам. Поддержка 8 800 999 99 99</article>
        <div class="history__container">
            <PersonalHistory_Item
                v-for="card in cards"
                :key="card.id"
                :data="card"/>
        </div>
    </div>
</template>

<script setup>
import { useAllData } from '@/store/AllData';
import PersonalHistory_Item from './PersonalHistory_Item.vue';
import { usePersonalHistory } from '@/store/PersonalHistory';
import { onMounted, onUnmounted } from 'vue';
import { useMainStore } from '@/store/MainStore';
const PersonalHistory = usePersonalHistory()
const AllData = useAllData()
const cards = PersonalHistory.history
const MainStore = useMainStore()
onMounted(()=>{
    if (MainStore.isMobile480) {
        document.body.classList.add('no-scroll')
    }
})
onUnmounted(()=>{
    document.body.classList.remove('no-scroll')
})
</script>

<style lang="scss" scoped>
@import "@/scss/remFunction";
.history {
    display: flex;
    width: 100%;
    flex-direction: column;
    margin-top: rem(26);
    margin-bottom: rem(90);
    &__additionally {
        color: #888888;
    }
    &__container {
        margin-top: rem(40);
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        column-gap: rem(20);
        row-gap: rem(40);
    }
    &__title {
        display: none;
        position: relative;
        padding-left: rem(25);
        cursor: pointer;
        &::after, &::before {
            content: '';
            position: absolute;
            background-color: #000000;
            height: 2px;
            width: 7px;
            left: 0;
            display: flex;
            align-items: center;
        }
        &::after {
            transform: rotate(-45deg);
            margin-top: 6.5px;
            top: 7px;
        }
        &::before {
            transform: rotate(45deg);
            margin-bottom: 6.5px;
            bottom: 7px;
        }
    }
    @media (max-width: 1300px) {
        &__container {
            grid-template-columns: repeat(2, 1fr);
            max-width: rem(800);
        }
    }
    @media (max-width: 768px) {
        &__container {
            display: flex;
            flex-direction: column-reverse;
            max-width: rem(440);
        }
    }
    @media (max-width: 480px) {
        & {
            background-color: #fff;
            margin-top: 0;
            margin-bottom: 0;
            position: fixed;
            top: 0;
            left: 0;
            z-index: 100;
            width: 100%;
            height: 100%;
            padding: rem(40) rem(25);
            flex-direction: column;
            overflow-y: scroll;
        }
        &__close-btn {
            display: block;
            position: absolute;
            width: rem(16);
            height: rem(16);
            top: rem(15);
            right: rem(15);
            display: flex;
            align-items: center;
            justify-content: center;
            &::after, &::before {
                content: '';
                position: absolute;
                width: 100%;
                height: rem(3);
                background-color: var(--red);
            }
            &::after {
                transform: rotate(-45deg);
            }
            &::before {
                transform: rotate(45deg);
            }
        }
        &__title {
            display: block;
            font-size: 24px;
            margin-bottom: rem(25);
        }
        &__container {
            display: flex;
            flex-direction: column;
        }
    }
}
</style>