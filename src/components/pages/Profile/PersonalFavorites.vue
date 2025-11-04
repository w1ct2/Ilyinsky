<template>
    <div class="favorites">
        <div class="favorites__close-btn" @click="AllData.setActivePagePersonalAccount(null)"></div>
        <h2 class="favorites__title">Избранное</h2>
        <ProductCard
            v-for="(card, index) in cards"
            :key="card.id"
            :dataCard="card"
            :indexCard="index">
        </ProductCard>
        <h1 
            class="favorites__else"
            v-if="!cards.length"
            >В избранном пока нет товаров.
        </h1>
    </div>
</template>

<script setup>
import ProductCard from '@/components/product-card/ProductCard.vue'
import { computed, onMounted, onUnmounted } from 'vue';
import { useAllData } from '@/store/AllData';
import { useMainStore } from '@/store/MainStore';
const AllData = useAllData()
const cards = computed(()=> AllData.favoriteData)
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
.favorites {
    margin-top: rem(65);
    margin-bottom: rem(180);
    min-height: rem(400);
    width: 100%;
    height: auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: rem(25);
    &__else {
        font-size: 24px;
        font-weight: 700;
        grid-column: 1/3;
        color: rgba(0, 0, 0, 0.5019607843);;
    }
    &__title {
        display: none;
    }
    &__close-btn {
        display: none;
    }
    @media (max-width: 1000px) {
        & {
            grid-template-columns: repeat(3, 1fr);
            max-width: rem(800);
        }
    }
    @media (max-width: 768px) {
        & {
            grid-template-columns: repeat(2, 1fr);
            max-width: rem(500);
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
            overflow-y: scroll;
            grid-template-columns: repeat(2, 1fr);
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
            grid-column: 1/3;
        }
    }
}
</style>