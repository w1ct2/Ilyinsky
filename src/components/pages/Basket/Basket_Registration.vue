<template>
    <div class="basket-registration">
        <div class="basket-registration__container">
            <h3 class="basket-registration__title">Доставка сегодня, 18:11</h3>
            <p class="basket-registration__address">ул. Новая, д. 13, посёлок Ильинское-Усово, городской округ Красногорск</p>
            <div class="basket-registration__promo">
                <input type="text" class="basket-registration__input" placeholder="Есть промокод?">
                <button class="basket-registration__promo-btn">Применить</button>
            </div>
            <div class="basket-registration__row">
                <p class="basket-registration__row-title">Товары ({{ totalProducts }})</p>
            </div>
            <div class="basket-registration__row">
                <p class="basket-registration__row-title">Промокод:</p>
                <p class="basket-registration__row-title">-0 руб</p>
            </div>
            <div class="basket-registration__row">
                <p class="basket-registration__row-title">Доставка:</p>
                <p class="basket-registration__row-title">Бесплатно</p>
            </div>
            <div class="basket-registration__row basket-registration__row--price">
                <p class="basket-registration__row-title">К оплате:</p>
                <h3 class="basket-registration__price">{{ totalPrice }} руб</h3>
            </div>
            <button class="basket-registration__button">Оформить заказ</button>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    totalPrice: {
        type: Number
    },
    totalProducts: {
        type: Number
    }
})
</script>

<style lang="scss" scoped>
@import "@/scss/remFunction";
.basket-registration {
    width: 100%;
    height: auto;
    &__container {
        width: 100%;
        height: rem(630);
        background-color: #FFECCA;
        border: 1px solid #FFE7B9;
        border-radius: rem(16);
        display: flex;
        flex-direction: column;
        padding: rem(30) rem(25);
    }
    &__title {
        font-size: 20px;
        font-weight: 600;
    }
    &__address {
        font-size: 14px;
        line-height: 1.6;
        font-weight: 300;
        margin-top: rem(15);
    }
    &__promo {
        width: 100%;
        display: flex;
        align-items: center;
        position: relative;
        margin-top: rem(22);
        margin-bottom: rem(25);
    }
    &__input {
        background-color: #fff;
        width: 100%;
        height: rem(55);
        border-radius: rem(13);
        padding-left: rem(22);
        padding-right: rem(130);
        &::placeholder {
            color: #6B6B6B;
        }
    }
    &__promo-btn {
        width: rem(115);
        height: rem(45);
        position: absolute;
        right: rem(5);
        border-radius: rem(13);
        color: var(--red);
        border: 1px solid var(--red);
    }
    &__row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        margin-top: rem(12);
        &.basket-registration__row--price {
            margin-top: auto;
        }
        &-title {
            font-size: 20px;
        }
    }
    &__price {
        font-size: 24px;
        font-weight: 600;
    }
    &__button {
        width: 100%;
        height: rem(55);
        background-color: var(--red);
        color: #fff;
        border-radius: rem(30);
        margin-top: rem(25);
        font-size: 22px;
    }
}
</style>