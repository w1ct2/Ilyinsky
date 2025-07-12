<template>
    <div class="catalog">
        <h2 class="catalog__title">{{ title }}</h2>
        <ul class="catalog__list">
            <li class="catalog__item">
                <p>Войти</p>
                <span>-5%</span>
            </li>
            <li class="catalog__item">
                <p>Заказы</p>
            </li>
            <li class="catalog__item">
                <p>Бонусы</p>
                <span>12</span>
            </li>
            <li class="catalog__item">
                <p>Избранное</p>
                <span>16 тов.</span>
            </li>
        </ul>
        <button class="catalog__btn">Выход</button>
    </div>
</template>

<script setup>
import { useMainStore } from '@/store/MainStore'
const mainStore = useMainStore()
const props = defineProps({
    title: {
        type: String
    },
})
</script>

<style lang="scss" scoped>
@function rem($pixels) {
    @return calc($pixels / 16) * 1rem;
}
.catalog {
    margin: 0 auto;
    max-width: rem(290);
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    color: #000000;
    padding: 0 20px;
    border-right: 1px solid #E7EFEE;
    &__title {
        text-transform: uppercase;
        font-size: 19px;
        font-weight: 600;
    }
    &__list {
        display: flex;
        flex-direction: column;
        font-size: 18px;
        gap: 15px;
    }
    &__item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        position: relative;
        cursor: pointer;
        & span {
            color: var(--red);
            font-size: 14px;
        }
    }
    &__btn {
        opacity: .5;
        max-width: rem(60);
        text-align: left;
        margin-top: 10px;
    }
}
</style>
