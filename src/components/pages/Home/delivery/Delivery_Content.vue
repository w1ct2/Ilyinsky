<template>
    <div class="info">
        <div class="info__item">
            <p class="info__title">Зоны доставки</p>
            <p class="info__p">Доставка осуществляется в районе ЖК «Ильинские Луга» (Харьковськая обл., Красногорск, пос. Ильинское-Усово, ул. Заповедная) и ЖК «Новая Рига»  (Харьковськая обл., Красногорск, д. Глухово, ул. Рублевское Предместье)</p>
        </div>
        <div class="info__item">
            <p class="info__title">25 минут</p>
            <p class="info__p">Доставка 25 минут. Принимаем заказы с 7:00 до 23:00</p>
        </div>
        <div class="info__item">
            <p class="info__title">300 руб</p>
            <p class="info__p">Минимальная сумма бесплатной доставки с учетом скидок. Иначе стоимость доставке 50 руб</p>
        </div>
        <div class="info__item">
            <p class="info__title">Оплата</p>
            <p class="info__p">При оформлении заказа вы можете выбрать удобный для вас спобос рассчета</p>
        </div>
        <article class="info__article">Изображения продуктов могут отличаться от продуктов в заказе.</article>
    </div>
</template>

<script setup>
import { useMainStore } from '@/store/MainStore'
const mainStore = useMainStore()
</script>

<style lang="scss" scoped>
@import "@/scss/remFunction";
.info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 20px;
    width: 100%;
    font-size: 20px;
    &__item {
        display: flex;
        flex-direction: column;
        gap: 5px;
    }
    &__title {
        color: var(--red);
    }
    &__p {
        color: #000;
        font-size: 18px;
        line-height: 1.5;
    }
    @media (max-width: 1000px) {
        & {
            font-size: 17px;
        }
    }
    @media (max-width: 768px) {
        & {
            font-size: 16px;
        }
    }
    @media (max-width: 480px) {
        & {
            font-size: 14px;
        }
    }
}
</style>
