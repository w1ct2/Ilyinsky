<template>
    <section class="input-card">
        <div class="container">
            <div class="input-card__inner">
                <div class="input-card__title">
                    <h2>Не нашли, что искали?</h2>
                    <p>Оставьте ссылку на товар или бренд.</p>
                </div>
                <form class="input-card__container">
                    <div class="input-card__checkbox">
                        <input type="checkbox" name="input1" id="input1">
                        <label for="input1">Товар</label>
                    </div>
                    <div class="input-card__checkbox">
                        <input type="checkbox" name="input2" id="input2">
                        <label for="input2">Бренд</label>
                    </div>
                    <input type="text" placeholder="Ссылка">
                    <button>Отправить</button>
                </form>
            </div>
        </div>
    </section>
</template>

<script setup>
import { useMainStore } from '@/store/MainStore'
const mainStore = useMainStore()
</script>

<style lang="scss" scoped>
@import "@/scss/remFunction";
.input-card {
    margin-bottom: rem(120);
    &__container {
        display: grid;
        width: 100%;
        min-width: 0;
        grid-template-columns: auto auto 1fr;
        grid-template-rows: 1fr 55px;
        column-gap: 35px;
        row-gap: 15px;
        max-width: 630px;
        & input[type="text"] {
            height: rem(36);
            background-color: #fff;
            border-radius: 16px;
            padding: 0 20px;
            font-size: 20px;
            &::placeholder {
                color: #C3B4B4;
            }
        }
        & button {
            grid-column: 1/4;
            grid-row: 2/3;
            border-radius: 30px;
            border: 1px solid var(--red);
            color: var(--red);
            height: 100%;
            width: fit-content;
            font-size: 22px;
            padding: 0 20px;
        }
    }
    &__checkbox {
        display: flex;
        align-items: center;
        gap: 8px;
        & label {
            font-size: 22px;
            user-select: none;
        }
        & input {
            background-color: #FFA90059;
            appearance: none;
            width: rem(17);
            height: rem(17);
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            border-radius: 50%;
            cursor: pointer;
            &::after {
                content: '';
                display: none;
                width: rem(7);
                height: rem(7);
                background-color: var(--red);
                border-radius: 50%;
                position: absolute;
            }
            &:checked {
                &::after {
                    display: block;
                }
            }
        }
    }
    &__inner {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        height: rem(165);
        background-color: #FFECCA;
        border: 1px solid #FFE7B9;
        border-radius: 16px;
        color: #2E0505;
        padding-left: 60px;
        padding-right: 20px;
        padding-top: 35px;
        padding-bottom: 25px;
    }
    &__title {
        display: flex;
        flex-direction: column;
        gap: 15px;
        height: 100%;
        max-width: rem(510);
        & h2 {
            font-size: 38px;
            text-transform: uppercase;
        }
        & p {
            font-size: 20px;
        }
    }
    @media (max-width: 1300px) {
        &__inner {
            padding: 25px 30px;
        }
        &__title {
            gap: 10px;
            & h2 {
                font-size: 30px;
            }
            & p {
                font-size: 18px;
            }
        }
        &__container {
            max-width: 470px;
            grid-template-rows: 1fr 40px;
            column-gap: 20px;
            button {
                font-size: 18px;
            }
        }
        &__checkbox label {
            font-size: 20px;
        }
    }
    @media (max-width: 1000px) {
        &__inner {
            flex-direction: column;
            align-items: start;
            height: auto;
            gap: 20px;
        }
        &__container {
            max-width: 600px;
        }
        &__title {
            & h2 {
                font-size: 26px;
            }
            & p {
                font-size: 16px;
            }
        }
        &__checkbox label {
            font-size: 18px;
        }
        & input[type="text"] {
            font-size: 18px;
        }
    }
    @media (max-width: 768px) {
        &__container {
            grid-template-columns: repeat(5, 1fr);
            grid-template-rows: 1fr 1fr 1fr;
            & button {
                grid-row: 3/4;
            }
            & input[type="text"] {
                grid-row: 2/3;
                grid-column: 1/6;
                max-width: 380px;
            }
        }
        &__title {
            & h2 {
                font-size: 22px;
            }
            & p {
                font-size: 14px;
            }
        }
        &__checkbox label {
            font-size: 16px;
        }
        & input[type="text"] {
            font-size: 16px;
        }
        &__container {
            button {
                font-size: 16px;
            }
        }
    }
    @media (max-width: 480px) {
        &__inner {
            padding: 15px;
            border-radius: 11px;
        }
        &__checkbox label {
            font-size: 14px;
        }
        & input[type="text"] {
            font-size: 14px;
        }
        &__container {
            button {
                font-size: 13px;
            }
        }
    }
}
</style>
