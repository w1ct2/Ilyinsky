<template>
    <section class="form">
        <div class="container">
            <div class="form__inner">
                <div class="form__title-container" :style="{backgroundImage: `url(${img1})`}">
                    <h1 class="form__title">Хотите стать частью нашей команды?</h1>
                    <p class="form__p">Оставьте  заявку и мы с вами свяжемся.</p>
                </div>
                <form class="form__action">
                    <input type="text" class="form__input" placeholder="Ф.И.О">
                    <input type="text" class="form__input" placeholder="Телефон">
                    <input type="text" class="form__input" placeholder="Дата рождения">
                    <div class="form__select">
                        <span>▼</span>
                        <select>
                            <option value="России" selected>России</option>
                            <option value="Белоруси">Белоруси</option>
                            <option value="Казахстана">Казахстана</option>
                        </select>
                    </div>
                    <div class="form__checkbox">
                        <input type="checkbox" id="checkbox_mainBanner">
                        <label for="checkbox_mainBanner">согласие на <span>обработку персональных данных</span></label>
                        <button class="form__button" @click.prevent>Откликнуться</button>
                    </div>
                </form>
            </div>
        </div>
    </section>
</template>

<script setup>
import img1 from '@/assets/img/vacancios/Like.png'
import { useMainStore } from '@/store/MainStore'
const mainStore = useMainStore()
</script>

<style lang="scss" scoped>
@import "@/scss/remFunction";
.form {
    margin-bottom: rem(130);
    &__inner {
        display: flex;
        justify-content: space-between;
        background-color: #FFECCA;
        border: 1px solid #FFE7B9;
        border-radius: 16px;
        gap: 20px;
        width: 100%;
        padding: 50px;
        // aspect-ratio: 1290/460;
        max-height: rem(460);
        height: 100vh;
    }
    &__title-container {
        color: #2E0505;
        max-width: rem(480);
        height: 100%;
        display: flex;
        flex-direction: column;
        gap: 30px;
        background-repeat: no-repeat;
        background-size: auto;
        background-position: bottom right;
    }
    &__title {
        font-size: 38px;
        font-weight: 700;
        text-transform: uppercase;
    }
    &__p {
        font-size: 20px;
    }

    &__action {
        max-width: rem(590);
        display: flex;
        flex-direction: column;
        gap: 12px;
        width: 100%;
        height: 100%;
    }
    &__input {
        width: 100%;
        height: rem(55);
        background-color: #fff;
        padding: 0 20px;
        font-size: 20px;
        color: #000;
        border-radius: 10px;
        &::placeholder {
            color: rgba(0, 0, 0, .5);
        }
    }
    &__select select {
        width: 100%;
        height: rem(55);
        background-color: #fff;
        padding: 0 20px;
        font-size: 20px;
        color: #000;
        border-radius: 10px;
        appearance: none;
    }
    &__select {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        & span {
            font-size: 12px;
            color: #000;
            pointer-events: none; 
            position: absolute;
            right: 22px;
        }
    }
    &__checkbox {
        display: flex;
        gap: 12px;
        align-items: center;
        margin-top: auto;
        & input {
            min-width: rem(24);
            min-height: rem(24);
            max-width: rem(24);
            max-height: rem(24);
            background-color: #fff;
            appearance: none;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            border-radius: 4px;
            cursor: pointer;
            &:checked {
                &::after {
                    content: '';
                    background-color: #000;
                    width: rem(9);
                    height: rem(9);
                    border-radius: 50%;
                    position: absolute;
                }
            }
        }
        & label {
            user-select: none;
            font-size: 15px;
            color: #000;
        }
        & span {
            border-bottom: 1px solid #000;
        }
    }
    &__button {
        border-radius: 30px;
        color: #fff;
        font-size: 20px;
        background-color: var(--red);
        aspect-ratio: 185/55;
        max-width: rem(185);
        width: 100%;
        margin: 0 auto;
        margin-top: auto;
    }
    @media (max-width: 1300px) {
        &__title {
            font-size: 34px;
        }
    }
    @media (max-width: 1000px) {
        & {
            margin-bottom: 0;
        }
        &__inner {
            border-radius: 0;
            padding: 40px 20px;
        }
        &__title {
            font-size: 30px;
        }
        &__p {
            font-size: 16px;
        }
        .container {
            padding: 0;
        }
        &__checkbox {
            display: grid;
            grid-template-columns: auto auto;
            grid-template-rows: 1fr rem(55);
            max-width: rem(380);
        }
        &__button {
            grid-column: 1/3;
            grid-row: 2/3;
        }
    }
    @media (max-width: 768px) {
        &__inner {
            flex-direction: column;
            max-height: none;
            height: 100%;
        }
        &__title-container {
            width: 100%;
            max-width: none;
            background-size: 20%;
            background-position: center right;
        }
        &__title {
            max-width: 80%;
            font-size: 26px;
        }
    }
    @media (max-width: 480px) {
        &__input {
            font-size: 18px;
            height: rem(50);
        }
        &__select {
            height: rem(50);
            & select {
                font-size: 18px;
            }
        }
        &__checkbox label {
            font-size: 16px;
        }
        &__button {
            margin-top: rem(30);
        }
        & {
            max-width: none;
            width: 100%;
            border-radius: 0;
        }
        &__title {
            font-size: 24px;
        }
    }
}
</style>