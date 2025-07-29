<template>
    <section class="rate-store">
        <div class="container">
            <div class="rate-store__inner">
                <div class="rate-store__content">
                    <h3 class="rate-store__title">Оцените магазин</h3>
                    <p class="rate-store__p">Поделитесь впечатлениями о заказе  и помогите сделать нас лучше</p>
                </div>
                <div class="rate-store__action">
                    <div class="rate-store__stars"><img :src="star1" alt=""></div>
                    <button class="rate-store__button">Оставить отзыв</button>
                </div>
                <img :src="img" alt="" class="rate-store__img">
            </div>
        </div>
    </section>
</template>

<script setup>
import img from '@/assets/img/rate-store/img1.png'
import star1 from '@/assets/img/rate-store/star1.png'
</script>

<style lang="scss" scoped>
@import "@/scss/remFunction";
.rate-store {
    margin-top: rem(100);
    padding-bottom: 90px;
    overflow: hidden;
    &__inner {
        width: 100%;
        min-height: rem(165);
        background-color: #FFF8EB;
        border: 1px solid #FFE7B9;
        border-radius: 16px;
        padding: 25px 60px;
        position: relative;
        display: flex;
        align-items: center;
    }
    &__content {
        display: flex;
        flex-direction: column;
        height: 100%;
        justify-content: space-between;
        gap: 5px;
        color: #2E0505;
        max-width: rem(390);
        margin-right: 10%;
        z-index: 2;
    }
    &__title {
        font-size: 38px;
        text-transform: uppercase;
    }
    &__p {
        font-size: 20px;
    }
    &__action {
        max-width: rem(240);
        display: flex;
        flex-direction: column;
        gap: 15px;
        z-index: 2;
    }
    &__button {
        color: var(--red);
        font-size: 22px;
        border: 2px solid var(--red);
        border-radius: 30px;
        height: rem(55);
        padding: 0 35px;
        white-space: nowrap;
    }
    &__stars {
        width: 100%;
    }
    &__img {
        position: absolute;
        right: 20px;
        max-width: rem(300);
        user-select: none;
    }
    @media (max-width: 1300px) {
        &__img {
            width: rem(200);
            height: auto;
            right: -30px;
            bottom: -80px;
        }
    }
    @media (max-width: 1000px) {
        &__inner {
            padding: 20px;
            flex-direction: column;
            align-items: start;
            gap: 15px;
        }
        &__title {
            font-size: 25px;
        }
        &__button {
            font-size: 18px;
        }
        &__img {
            width: rem(270);
        }
    }
    @media (max-width: 768px) {
        &__img {
            width: rem(200);
        }
        &__title {
            font-size: 22px;
        }
        &__button {
            height: rem(40);
        }
    }
    @media (max-width: 480px) {
        &__title {
            font-size: 18px;
        }
        &__p {
            font-size: 16px;
        }
        &__button {
            height: rem(30);
            font-size: 15px;
            padding: 0 20px;
        }
        &__stars {
            width: 80%;
        }
        &__img {
            width: rem(150);
            bottom: -40px;
            right: -50px;
        }
    }
}
</style>
