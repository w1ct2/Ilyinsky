<template>
    <main class="main">
        <div class="error">
            <div class="error__message">ошибка</div>
            <div class="error__title">
                <h1 class="error__title-item">4</h1>
                <img :src="img1" alt="" class="error__img">
                <h1 class="error__title-item">4</h1>
            </div>
            <p class="error__p">Ой! Кажется что-то пошло не так. Страница, которую вы запрашиваете, не существует. Возможно она устарела, была удалена, или был введен неверный адрес в адресной строке.</p>
            <RouterLink :to="'/home'" class="error__link">Перейти на главную</RouterLink>
        </div>
    </main>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import img1 from '@/assets/img/mainImage/error-donut.png'
</script>

<style lang="scss" scoped>
@import "@/scss/remFunction";
.main {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
.error {
    width: fit-content;
    max-width: rem(640);
    margin: auto;
    display: flex;
    flex-direction: column;
    color: #BEBEBE;
    padding: 0 20px;
    &__message {
        font-size: 72px;
        font-weight: 700;
    }
    &__title {
        width: 100%;
        height: auto;
        display: grid;
        align-items: center;
        margin: 0 auto;
        grid-template-columns: 1fr rem(240) 1fr;
        &-item {
            font-size: 220px;
            font-weight: 700;
            text-align: center;
        }
    }
    // &__img {
    //     max-width: rem(240);
    // }
    &__p {
        font-size: 20px;
    }
    &__link {
        border: 1px solid var(--red);
        border-radius: rem(30);
        max-width: rem(200);
        aspect-ratio: 200/45;
        margin-top: rem(40);
        color: var(--red);
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
    }
    @media (max-width: 1000px) {
        &__message {
            font-size: 60px;
        }
        &__title {
            grid-template-columns: 1fr 1fr 1fr;
            &-item {
                font-size: 180px;
            }
        }
        &__p {
            font-size: 18px;
        }
    }
    @media (max-width: 768px) {
        & {
            max-width: rem(480);
        }
        &__message {
            font-size: 50px;
        }
        &__title {
            grid-template-columns: 1fr 1fr 1fr;
            &-item {
                font-size: 150px;
            }
        }
        &__p {
            font-size: 16px;
        }
        &__link {
            max-width: rem(150);
            font-size: 14px;
        }
    }
    @media (max-width: 480px) {
        &__message {
            font-size: 35px;
        }
        &__title {
            &-item {
                font-size: 120px;
            }
        }
        &__p {
            font-size: 14px;
        }
    }
}
</style>