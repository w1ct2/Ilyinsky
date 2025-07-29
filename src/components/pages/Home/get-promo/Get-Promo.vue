<template>
    <section class="get-promo">
        <div class="container">
            <div class="get-promo__inner">
                <h2 class="get-promo__title">БЕСПЛАТНАЯ ДОСТАВКА + Скидка 10%</h2>
                <button class="get-promo__button">Получить промокод</button>
            </div>
        </div>
    </section>
</template>

<script setup>
</script>

<style lang="scss" scoped>
@import "@/scss/remFunction";
.get-promo {
    margin-top: rem(100);
    &__inner {
        display: flex;
        align-items: start;
        justify-content: space-between;
        min-height: 165px;
        border-radius: 44px;
        padding: 40px 60px;
        width: 100%;
        background: radial-gradient(68.58% 1403.4% at 73.62% -94.51%, #FF1F00 0%, #FF7715 100%);
    }
    &__title {
        font-size: 38px;
        position: relative;
        font-weight: 700;
        &::after, &::before {
            font-size: 22px;
            position: absolute;
            white-space: nowrap;
            font-weight: 400;
            bottom: -25px;
        }
        &::after {
            content: 'на заказы клинарии';
            right: 0;
        }
        &::before {
            content: 'первого заказа';
            left: 0;
        }
    }
    &__button {
        border: 2px solid #fff;
        height: rem(55);
        border-radius: 30px;
        padding: 0 25px;
        font-size: 22px;
        white-space: nowrap;
    }
    @media (max-width: 1300px) {
        &__title {
            font-size: 30px;
        }
        &__button {
            font-size: 20px;
        }
    }
    @media (max-width: 1000px) {
        &__inner {
            flex-direction: column;
            gap: 36px;
            padding: 20px;
            border-radius: 18px;
        }
        &__title {
            font-size: 25px;
            &::after, &::before {
                font-size: 20px;
            }
        }
        &__button {
            font-size: 18px;
        }
    }
    @media (max-width: 768px) {
        &__title {
            font-size: 22px;
            &::after, &::before {
                font-size: 18px;
            }
        }
        &__button {
            height: 40px;
        }
    }
    @media (max-width: 480px) {
        &__title {
            font-size: 18px;
            &::after, &::before {
                font-size: 14px;
            }
        }
        &__button {
            height: 30px;
            font-size: 15px;
        }
    }
}
</style>
